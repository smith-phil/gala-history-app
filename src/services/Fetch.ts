const HttpGet = async <T>(uri:string)=>{
    const response = await globalThis.fetch(uri);
    const json = await response.json();
    return json as T;
}

export { HttpGet }

