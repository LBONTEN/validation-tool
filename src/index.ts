
import * as q from './queries';
import * as p from './processMunicipality'
import * as h from './helpers'


// import { ProxyHandlerStatic } from "https://cdn.skypack.dev/@comunica/actor-http-proxy@2.6.9";
// import zipcelx from "https://cdn.skypack.dev/zipcelx@1.6.2";
//const proxy = "https://proxy.linkeddatafragments.org/";
const proxy = "http://localhost:8085/";

// Put in comment when you do not want to harvest a specific municipality
// You can remove the entrypoint when you want to use the default scheduled entry point
const interestedMunicipality = {
  "municipalityLabel": "Provincie Antwerpen",
  "entrypoint": "https://www.provincieantwerpen.be/content/dam/publicaties/open-data/provincieraad/2023/2023-05-25/pr_2023-05-25.html"
};

$(document).ready(async () => {
  console.log(`starting up...`);
  // const publicationsCollected : any = await q.getCollectedPublications(m.municipalityLabel);
  const input = document.getElementById("input").value;
  console.log(`${input}`);

  // 1. Determine document type
  const documentType: string = p.determineDocumentType(input);
  console.log(documentType);

  // 2. Get blueprint of application profile
  const blueprintOfAP = await q.getBlueprintOfApplicationProfile();
  if(input) {
    // const blueprintOfMunicipality = await q.getBlueprintOfMunicipality([input], proxy);

    const val = await q.getRelevantPublicationsValue(input, proxy);
    val.on('data', (binding) => {
      console.log(binding.toString()); // Quick way to print bindings for testing

      console.log(binding.has('s')); // Will be true
      
      // Obtaining values
      console.log(binding.get('o').termType);
      console.log(binding.get('o').value);
    });

    console.log(`VAL: ${val}`)
  }
});

