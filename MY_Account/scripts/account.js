let Name=document.getElementById("kcname");
let Age=document.getElementById("kcage");
let Email=document.getElementById("kcemail");
let Mobile=document.getElementById("kcmobile");

let data=JSON.parse(localStorage.getItem("signedUser"));

// data.forEach((el)=>{
//     Name=`${el.Name} ${el.lastName}`;
//     Age=el.age;
//     Email=el.Mail;
//     Mobile=el.Mobile;
// })

let addPAN=()=>{
    window.location.href="pancard.html"
    console.log("ram")
}