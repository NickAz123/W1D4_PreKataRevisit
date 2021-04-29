const urlDecode = (url) => {
  let newObject = {};
  let urlAr = url.split("&");
  
  for (let i in urlAr) {
    let valuesAr = urlAr[i].split("=");
    newObject[valuesAr[0]] = valuesAr[1].replace(/%20/g, " ");
  }
  return newObject;
};

//TESTS
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);