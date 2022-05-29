const fetchAssetFromJson = async <T>(uri:string)=>{
    const response  = await globalThis.fetch(uri, {
        headers: {
            'content-type':'application/xml'
        }
    });
    const json = await response.json();
    return json as T; 
}

export { fetchAssetFromJson }