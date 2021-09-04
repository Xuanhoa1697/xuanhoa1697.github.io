  export{Time}
  class Time{
      constructor(node,cowndown){
          this.node = node
          this.cowndown = cowndown
      }

      getTime(){
          setInterval(()=>{
              this.time = new Date().toLocaleString("vi-VN",{
                  year:"numeric",
                  month:"long",
                  day:"2-digit",
                  weekday:"long",
                  hour12:false,
                  hour:"2-digit",
                  minute:"2-digit",
                  second:"2-digit"
              })
              this.render()
          })
      }
      render(){
        this.node.textContent = this.time
        this.date = new Date()
        this.cowndown1 = new Date(this.date.getFullYear(),12,1)
        this.left = this.cowndown1 - this.date

        
        this.day = Math.floor(this.left / 1000/60/60/24)
        this.hour = Math.floor(this.left /1000 / 60 /60 )%24
        this.minute = Math.floor(this.left / 1000 / 60)%60
        this.second = Math.floor(this.left / 1000)%60 


        this.cowndown.textContent = `CownDown 2022: ${this.day}d:${this.hour}h:${this.minute}m:${this.second}s`
      }
      
  }