
export default function profile({method,url,succes,error}){
    let xhr =new XMLHttpRequest()
    xhr.open(method,url)
    xhr.responseType="json"
    xhr.send()
    xhr.onload=()=>{
        if(xhr.status >=200 && xhr.status<300){
            succes(xhr.response)
        }else{
            xhr.onerror=()=>{
                error(xhr.status)
            } 
        }
    }          
    
}
