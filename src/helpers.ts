// Put in comment when you do not want to harvest a specific municipality
// You can remove the entrypoint when you want to use the default scheduled entry point

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export function urlExists(url) {
  var http = new XMLHttpRequest();
  http.open('GET', url, false);
  http.send();
  if (http.status != 404)
      return true;
  else
      return false;
}


export function handleFiles(e) {
  console.log("handle file")
  const selectedFile = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function(event) {
    let result = event.target.result;
    let workbook = XLSX.read(result, {
      type: "binary"
    });
    workbook.SheetNames.forEach(sheet => {
      let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
      data = rowObject;
    });
  };
  reader.readAsBinaryString(selectedFile);
}


export function handleExportToExcel() {
    if (data.length) {
      const headData = Object.keys(data[0]).map((col) => ({
        value: col,
        type: "string",
      }));
      const bodyData = data.map((item) =>
        Object.values(item).map((value) => {   
             if (typeof value === "object") return { 
                 "value": value.toString(), 
                 "type": "string"
               }
             else return { 
                "value": value, 
                "type": typeof value 
               }
        })
      );
      const config = {
        filename: "filename",
        sheet: { data: [headData, ...bodyData] },
      };
      zipcelx(config);  
    }
}


export function getRandom(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len){
    n = len;
    console.log(`getRandom: more elements taken than available. Will use ${len} as the number of elements.`);
  }
      // throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}
