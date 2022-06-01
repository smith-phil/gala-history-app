const HttpGet = async <T>(uri:string)=>{
    const response  = await globalThis.fetch(uri, {
        mode:'no-cors',
        headers: {
            'content-type':'application/xml',
            'sec-fetch-dest': 'script',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-site': 'cross-site'
        }
    });
    const json = await response.json();
    return json as T; 
}

export { HttpGet }

