// export cho index.js
export {validate}
//Regex xác thực
let regexEmail1 = /[a-z]+[0-9]+@[a-z]+.[a-z]{2,}$/;
let regexEmail2 = /[a-z]+@[a-z]+.[a-z]{2,}$/;
let regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/; //8 ký tư tói thiểu 1 số 1 chữ
let count;
let count1 = 0
let count2 = 0
//Xử lý validate
let validate = (...node)=>{
    for(let i =0;i<=node.length;i++){
        if((regexEmail1.test(node[0])== true || regexEmail2.test(node[0])==true) && (regexPass.test(node[1]) == true )){
            node[4].textContent = "Waiting"
            count = true
        }else{
            node[2].textContent = "Nhập lại Email!"
            node[3].textContent = "Nhập lại Password!"
        }
    }
    setTimeout(()=>{
        node[2].textContent = ""
        node[3].textContent = ""
    },2000)
    if(count== true){
        let time = setInterval(()=>{
            node[4].textContent +="." 
            count1++
            if(count1===4){
                node[4].textContent ="Waiting"
                count1=0
                count2++
                if(count2===2){
                    node[4].textContent ="Connected ✔"
                    clearInterval(time)
                }
            }  
        },500)
    }
}

