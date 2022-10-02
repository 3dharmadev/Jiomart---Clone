import {navbar} from '../home/component/navbar.js'
document.getElementById('kcnavbar').innerHTML=navbar();

import {sidebar} from '../home/component/sidebar.js'
document.getElementById('sidebar').innerHTML=sidebar();


let Name=document.querySelector(".kcname");
let Age=document.querySelector(".kcage");
let Email=document.querySelector(".kcemail");
let Mobile=document.querySelector(".kcmobile");

let Data=JSON.parse(localStorage.getItem("MartUsers")) || [];
console.log(Data);

Name.innerText ="Tejas";

Age.textContent ="12";


Name.innerText ="Tejas";

data.forEach((el)=>{
    console.log(el);
    // Name=`${el.Name} ${el.lastName}`;
    // Age=el.age;
    // Email=el.Mail;
    // Mobile=el.Mobile;
})
//console.log(data)
let addWishList=()=>{
    window.location.href="wishlist.html"
}

let addPAN=()=>{
    window.location.href="pancard.html"
}

let Legal=()=>{
    window.location.href="legalinfo.html"
}

let Contact=()=>{
    window.location.href="contact.html"
}

let kcLogout=()=>{
    Name.innerHTML=null;
    Age.innerHTML=null;
    Email.innerHTML=null;
    Mobile.innerHTML=null;
}