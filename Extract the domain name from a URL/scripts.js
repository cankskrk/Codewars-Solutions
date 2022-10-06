const domainName = (url) => {

    url = url.replace("http://", "")
    url = url.replace("https://", "")
    url = url.replace("www.", "")

    let domain = url.split(".") // Array olarak dondurur.
    console.log(domain[0])
}

domainName("https://www.google.com")