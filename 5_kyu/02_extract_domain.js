// Write a function that when given a URL as a string,
//parses out just the domain name and returns it as a string. For example:

//"http://github.com/carbonfive/raygun" -> domain = "github"
//"http://www.zombie-bites.com"         -> domain = "zombie-bites"
//"https://www.cnet.com"                -> domain = cnet"


function domainName(url){
  url = ((/[//]/g).test(url)) ? url.split("//")[1] : url;
  console.log(url);
  url = ((/www./g).test(url)) ? url.split("www.")[1] : url;
  console.log(url);
  url = ((/\./g).test(url)) ? url.split(".")[0] : url;
  console.log(url);
  // url.forEach((elem) => {
  //   console.log(elem);
  //   // url = (/www./g).test(elem) ? elem : url;
  //   // console.log(`new assigned url: ${url}`);
  // })
//  url = (/www./).test(url) ? url.split("www.")[1] : url;

//  if (url.length > 1) {
//    url.forEach((elem) => {
//      console.log((/\./).test(elem));
//      console.log(elem);
//    })
//  } else {
//   console.log(url);
//  }
 // (/.com/g).test(element)
 // console.log(`This url contiene el dominio: ${url}`);
}

domainName("http://github.com/carbonfive/raygun");
domainName("http://www.zombie-bites.com");
domainName("https://www.cnet.com")
domainName("http://google.com");
domainName("http://google.co.jp");
domainName("www.xakep.ru");
// domainName("https://youtube.com");
