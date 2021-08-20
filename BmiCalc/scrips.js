// node
let inputWeight = document.querySelector(".input-weight");
let inputHeight = document.querySelector(".input-height");
let button = document.querySelector(".btn");
//render
let report = document.querySelector(".BMI-report");
let nodeInner = document.querySelector(".node-inner")
let regexWeight = /[0-9]$/
let regexHeight = /[0-9]$/
let indexBMI;





button.addEventListener("click",function(e){
     e.preventDefault()
    
     let weightValue = (inputWeight.value);
     let heightValue = (inputHeight.value);



    if((regexWeight.test(weightValue)==true) && regexHeight.test(heightValue)==true){
        indexBMI = weightValue / (heightValue**2)
        indexBMI = indexBMI.toFixed(1)
        console.log(indexBMI);
        if(indexBMI <= 16){
            report.textContent = indexBMI
            nodeInner.textContent = "Gầy cấp độ III"
            nodeInner.style.color = "brown"
        }else if(indexBMI>16 && indexBMI<= 17.5){
            report.textContent = indexBMI
            nodeInner.textContent = "Gầy cấp độ II"
            nodeInner.style.color = "brown"
        }else if(indexBMI> 17.5 && indexBMI <= 18.5){
            report.textContent = indexBMI
            nodeInner.textContent = "Gầy cấp độ I"
            nodeInner.style.color = "brown"
        }else if(indexBMI > 18.5 && indexBMI <=25){
            report.textContent = indexBMI
            nodeInner.textContent = "Bình thường"
            nodeInner.style.color = "greenyellow"
        }else if(indexBMI >25 && indexBMI <=30){
            report.textContent = indexBMI
            nodeInner.textContent = "Thừa cân nhẹ"
            nodeInner.style.color = "brown"
        }else if(indexBMI >30 && indexBMI <= 35){
            report.textContent = indexBMI
            nodeInner.textContent = "Béo phì cấp độ I"
            nodeInner.style.color = "brown"
        }else if(indexBMI > 35 && indexBMI <=40){
            report.textContent = indexBMI
            nodeInner.textContent = "Béo phì cấp độ II"
            nodeInner.style.color = "brown"
        }else{
            report.textContent = indexBMI
            nodeInner.textContent = "Béo phì cấp độ III"  
            nodeInner.style.color = "brown" 
        }



    }else if((regexWeight.test(weightValue) == false) && regexHeight.test(heightValue) == true){
            report.textContent = ""
            nodeInner.textContent = "Nhập lại cân nặng"
    }else if((regexWeight.test(weightValue) == true) && regexHeight.test(heightValue) == false){
        report.textContent = ""
        nodeInner.textContent = "Nhập lại chiều cao"
    }else if((regexWeight.test(weightValue) == false) && regexHeight.test(heightValue) == false){
        report.textContent = ""
        nodeInner.textContent = "Nhập lại cân nặng và chiều cao"
    }
    
    

    

     
     
   
     
     
    
    
   
})