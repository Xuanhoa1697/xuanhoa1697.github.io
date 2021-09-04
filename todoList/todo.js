
export{Todo}

class Todo{
    constructor(nameValue,ageValue,task,node,date,time1){
        this.nameValue = nameValue.value
        this.ageValue = ageValue.value
        this.task = task.value
        this.node = node
        this.date = new Date(date.value)
    }

    timer(){setInterval(()=>{
        this.get()
    },1000)}


    get(){
        this.time = new Date()
        this.left = this.date - this.time
        console.log(this.left);
    }

   render(){
       this.timer()
       
      
        if(this.nameValue=="" || this.ageValue =="" || this.task=="" ){
            alert("Điền đầy đủ thông tin!")
        }else{
            this.node.innerHTML +=`<div class="note">
                                <input type="checkbox" name="" id="" class="checkbox">
                                <span class="result">${this.nameValue}, ${this.ageValue} ${this.time} </span> <br>
                                <span class="text-task">${this.task}</span>
                                </div>`
                                
        }
   }
}