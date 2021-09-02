export { CownDown };

class CownDown {
  constructor(node) {
    this.node = node;
    
  }
  getTimer() {

    
    setInterval(() => {
      this.date = new Date()
      this.CownDown = new Date(this.date.getFullYear(), 12, 1)
      this.present = this.CownDown - this.date;


      this.day = Math.floor(this.present / 1000 / 60 / 60 / 24);
      this.hour = Math.floor(this.present / 1000 / 60 / 60) % 24;
      this.minute = Math.floor(this.present / 1000 / 60) % 60;
      this.second = Math.floor(this.present / 1000)%60;

      this.leftCowndown();
    }, 1000);
  }
  leftCowndown() {
    this.node.innerHTML = `Còn ${this.day} ngày <br> ${this.hour}giờ : ${this.minute}phút : ${this.second}giây`;
  }
}



