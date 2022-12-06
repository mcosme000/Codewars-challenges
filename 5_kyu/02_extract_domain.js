// Write a function that when given a URL as a string,
//parses out just the domain name and returns it as a string. For example:

//"http://github.com/carbonfive/raygun" -> domain = "github"
//"http://www.zombie-bites.com"         -> domain = "zombie-bites"
//"https://www.cnet.com"                -> domain = cnet"


function domainName(url){
  url = ((/\/\//g).test(url)) ? url.split("//")[1] : url;
  url = ((/www./g).test(url)) ? url.split("www.")[1] : url;
  url = ((/\./g).test(url)) ? url.split(".")[0] : url;
  console.log(url);
}

domainName("http://github.com/carbonfive/raygun");
domainName("http://www.zombie-bites.com");
domainName("https://www.cnet.com")
domainName("http://google.com");
domainName("http://google.co.jp");
domainName("www.xakep.ru");
domainName("2i5bnj4njol4hq3wy6");
domainName("ibl7lcfsoi.biz/default.html");
domainName("https://youtube.com");
