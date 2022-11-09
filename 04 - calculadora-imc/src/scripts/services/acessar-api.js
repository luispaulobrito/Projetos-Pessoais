import { url } from "/src/scripts/variables.js";

async function acessarApi() {
    const response = await fetch(`${url}`)
    return await response.json() 
} 

export { acessarApi }