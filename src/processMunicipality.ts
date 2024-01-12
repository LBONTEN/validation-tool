
import * as q from './queries';
import * as h from './helpers'

// import { ProxyHandlerStatic } from "https://cdn.skypack.dev/@comunica/actor-http-proxy@2.6.9";
// import zipcelx from "https://cdn.skypack.dev/zipcelx@1.6.2";
//const proxy = "https://proxy.linkeddatafragments.org/";
const proxy = "http://localhost:8085/";

let data : any = [];


/* function to validate a publication 
  param:
  - publication: object to be validated
  returns:
  - one of the following valuesL: [besluitenlijst, notulen, agenda]

*/
export function determineDocumentType(publication): string {

  // 
  return "unknown document type"
}

/* function to validate a publication 
  param:
  - publication: object to be validated
  returns:
  - contains a report of all missing requirements for a publication

*/
export async function validatePublication(publication) {

  // 

}
