var myForm = document.getElementById("form");
if (localStorage.getItem("userNumber") === null) {
    localStorage.setItem("userNumber", JSON.stringify([]));
}

function checkSignIn(e) {
    e.preventDefault();
    var numberIn = myForm.txt.value;
    var pass = myForm.pwd.value;
    console.log(pass)

    let array = JSON.parse(localStorage.getItem("MartUsers"));
    var isPresent = false;
    var signInedUser

    if(array===null){
        alert("Not a user Sign Up first")
        window.location.href ="SignUp.html";
    }else{
        var arr=[];
        array.forEach(function (p) {
            if (p.Mobile == numberIn && pass == p.Password) {
                isPresent = true;
                signInedUser = localStorage.setItem("signedIUser",JSON.stringify(p));
            }
        })
        if (isPresent ===false && numberIn!=="") {
            window.location.href = "SignUp.html";
        } else if (numberIn == "") {
            alert("you have Entered Empty Number")
        } else {
            alert("Logged In Successfully!")
            localStorage.setItem("cart", JSON.stringify(arr));
            window.location.href = "Index.html";
        }
        console.log(isPresent);
    }
}
function refresh(){
    window.location.href="Index.html";
}