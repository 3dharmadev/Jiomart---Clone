let Name=document.querySelector(".kcname");
let Age=document.querySelector("kcage");
let Email=document.querySelector("kcemail");
let Mobile=document.querySelector("kcmobile");

let data=JSON.parse(localStorage.getItem("signedUser"));

// data.forEach((el)=>{
//     Name=`${el.Name} ${el.lastName}`;
//     Age=el.age;
//     Email=el.Mail;
//     Mobile=el.Mobile;
// })
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