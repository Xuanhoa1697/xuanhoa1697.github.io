function Character(name,level,weapon,skill){
    this.name= name;
    this.level =level;
    this.weapon= weapon;
    this.skill=skill;
    this.attack= function(){
        return this.name + " có kỹ năng " + this.skill; 
    }
    this.changeWeapon = function(){
        return "Nhân vật " + this.name + " có level " + this.level + " vũ khí là " + this.weapon;
    }
}
let C1 = new Character("Yassuo",18,"kiếm cùn","Hashagi")
console.log(C1.changeWeapon());
console.log(C1.attack());
let C2 =new Character("Mẹ",10000000000000,"dép","phi dép");
console.log(C2.changeWeapon());
console.log(C2.attack());
let c3 = new Character("Master Yi",18,"kiếm","Chém gió Alpha");
console.log(c3.changeWeapon());
console.log(c3.attack());
////////////////////////////////////////////////////////

///////////////////////////////////////////////////////
function Weapon(type,damage,speed,critical){
    this.type=type;
    this.damage=damage;
    this.speed=speed;
    this.critical=critical;
    this.properties=function(){
       return this.type + " có sức mạnh " + this.damage + " tốc độ " + this.speed;
    }
    this.Crit=function(){
        return "Tỷ lệ chí mạng " + this.critical;
    }
}
let w1=new Weapon("Vô cực kiếm",1500,0,"100%")
console.log(w1.properties());
console.log(w1.Crit());
let w2 = new Weapon("Kiếm Ma Yumunu",1200,"30%",0)
console.log(w2.properties());
console.log(w2.Crit());

function Trick(garenal,q,w,e,r){
    this.garenal=garenal;
    this.q=q;
    this.w=w;
    this.e=e;
    this.r=r;
    this.combo=function(){
        return this.garenal + " có các chiêu thức " + this.q + this.w + this.e;
    }
    this.lastHit=function(){
        return this.garenal + " có chiêu cuối là " + this.r;
    }
}
let t1=new Trick("Garen","Đòn quyết định "," Dũng cảm"," Phán quyết"," Công lý Demacia");
console.log(t1.combo());
console.log(t1.lastHit());
let t2 =new Trick("Temmo"," Mù"," Tăng tốc"," Độc"," Đặt nấm");
console.log(t2.combo());
console.log(t2.lastHit());





let obj={
    w:200,
    h:300,
    C: function(){
        return this.w + this.h;
    }

}
console.log(obj.C());

//
function Number(w,h){
    this.w=w;
    this.h=h;
    this.getAria=function(){
        return this.w * this.h;
    }
}
let r1 = new Number(1,2);
console.log(r1.getAria());


function Counter(value){
    this.value = value || 0;
    this.up=function(){
       return this.value +=1;
    }
    this.down=function(){
        this.value-=1;
        
    }
    this.get=function(){
        return this.value;
    }
}
let c1 = new Counter();
let c2 = new Counter(10)
c1.up();
console.log(c1.get());


console.log(c2.get());



