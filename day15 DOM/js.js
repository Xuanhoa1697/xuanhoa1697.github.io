let students = [
    {
        id: 1,
        name: "Khoa",
        age: 26,
        gmail:"Khoa@Gmail.com"
    },
    {
        id: 2,
        name: "Dương",
        age: 1000,
        gmail:"Dương@Gmail.com"
    },
    {
        id: 3,
        name: "Hòa",
        age:24,
        gmail:"Hòa@Gmail.com"
    },
    {
        id:4,
        name: "Haha",
        age: 10000,
        gmail:"Khoa@Gmail.com"
    },
    {
        id: 5,
        name:"Kakaa",
        age: 1500,
        gmail:"Khoa@Gmail.com"
    }
];

this.onclick=function(){
    for(let i = 0;i<students.length;i++){
        
        //tạo element tr
        let trElem = document.createElement("tr")

        //tạo element td
        // và gán value
     let tdElem1 = document.createElement("td")
     tdElem1.innerHTML=students[i].id
     
     let tdElem2 = document.createElement("td")
     tdElem2.innerHTML=students[i].name

     let tdElem3 = document.createElement("td")
     tdElem3.innerHTML=students[i].age

     let tdElem4 = document.createElement("td")
     tdElem4.innerHTML=students[i].gmail
     

     // gán td vào tr
     trElem.appendChild(tdElem1)
     trElem.appendChild(tdElem2)
     trElem.appendChild(tdElem3)
     trElem.appendChild(tdElem4)
     
     // gán tr vào body
     let tdbody = document.getElementById("body-table")
    tdbody.appendChild(trElem)
    
    
    }
}

