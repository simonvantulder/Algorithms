function domainName(url){
    //remove http(s) if present
    url = url.replace("https://", '');
    url = url.replace("http://", '');

    //remove www. if present
    url = url.replace("www.", '');

    //domain name will now be everything up to the first "."
    //return everything before the first period
    return url.split('.')[0];
};