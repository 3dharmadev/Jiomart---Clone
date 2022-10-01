var emptyCart = document.getElementById("emptyCart");
var productCont = document.getElementById("userProCont");

//  fetching data from cart

if (localStorage.getItem("jioUserCart") !== null && JSON.parse(localStorage.getItem("jioUserCart")).length !== 0) {
  var con = document.getElementById("top");
  emptyCart.innerHTML = "";
  var productsArr = JSON.parse(localStorage.getItem("jioUserCart"));
  var total = 0;

  productsArr.forEach(function (product) {
    let divC = document.createElement("div");
    let image = document.createElement("img");
    let d = document.createElement("div");
    let Price = document.createElement("div");
    total += +product.price.trim()*product.quantity;


    if (product.img == undefined) {
      console.log("product not defined");
      image.src = product.image;
    } else {
      image.src = product.img;
    }


    let Name = document.createElement("div");
    let btn = document.createElement("button");
    let quan = document.createElement('div');
    let n = document.createElement('div');
    n.textContent = product.quantity;

    quan.textContent = 'Quantity'
    Name.textContent = "Name of Product: " + product.name;
    Price.textContent = "Price: " + product.price*product.quantity;
    d.append(Name, btn);
    quan.append(n)
    btn.innerText = "Remove";
    btn.style.width = "50%"
    btn.style.border = "none"
    btn.onclick = function () {
      removeEle(product);
    }
    divC.append(image, d, Price, quan);
    con.append(divC);

    let actPrice = document.getElementById("pRc");
    let disPrice = document.getElementById("dSc");
    let tPrice = document.getElementById("tA");


    actPrice.textContent = total.toFixed(2);
    disPrice.textContent = "----";
    tPrice.textContent = total.toFixed(2);
    actPrice.setAttribute("class", "rigthPrice")
    tPrice.setAttribute("class", "rigthPrice")
  })
} else {
  productCont.innerHTML = "";
}

function addPro() {
  window.location.href = "Index.html";
}

function checkCoupon() {
  let code = document.getElementById("couponCode")
  let disPrice = document.getElementById("dSc");
  let tPrice = document.getElementById("tA");


  if (code.value === "masai30") {
    alert("Coupon Applied Successfully");
    disPrice.textContent = Math.floor(total * (0.3));
    disPrice.setAttribute("class", "offer");
    tPrice.textContent = Math.floor((0.7) * total);
    tPrice.setAttribute("class", "offer")
    console.log(tPrice.textContent, disPrice.textContent)
    localStorage.setItem('disc', 'masai30')
  } else {
    alert("This Code is Not Valid");
  }
}

function placeOrder() {
  let disPrice = document.getElementById("dSc");
  let tPrice = document.getElementById("tA");

  if (localStorage.getItem("checkoutPrices") === null) {
    localStorage.setItem("checkoutPrices", JSON.stringify([]));
    var arr = JSON.parse(localStorage.getItem("checkoutPrices"));
    arr.push(tPrice.textContent)
    localStorage.setItem("checkoutPrices", JSON.stringify(arr))
    arr.push(disPrice.textContent)
    localStorage.setItem("checkoutPrices", JSON.stringify(arr))
    console.log(JSON.parse(localStorage.getItem("checkoutPrices")));
  } else {
    localStorage.setItem("checkoutPrices", JSON.stringify([]));
    var arr = JSON.parse(localStorage.getItem("checkoutPrices"));
    arr.push(tPrice.textContent)
    localStorage.setItem("checkoutPrices", JSON.stringify(arr))
    arr.push(disPrice.textContent)
    localStorage.setItem("checkoutPrices", JSON.stringify(arr))
    console.log(JSON.parse(localStorage.getItem("checkoutPrices")));
  }

  var number = document.getElementById("verifyNumber");
  console.log(number.value);

  var array = JSON.parse(localStorage.getItem("MartUsers"))
  let isPresent = false;
  console.log(array)
  if (array !== null && localStorage.getItem("signedIUser") !== null && JSON.parse(localStorage.getItem("signedIUser") != {})) {
    var logUserNumber = (JSON.parse(localStorage.getItem("signedIUser")))["Mobile"]
    array.forEach(function (user) {
      console.log(user.Mobile);
      if (user.Mobile === number.value && number.value == logUserNumber) {
        isPresent = true;
      }
    })
    if (isPresent === false && number.value !== "") {
      alert("Please Enter Correct Number")
    }
    else if (number.value === "") {
      alert("Please Enter Your Number")
    } else {
      window.location.href = "checkout.html"
    }
  }
  else {
    window.location.href = "signIn.html";
  }
}


function removeEle(product) {

  var productsArr = JSON.parse(localStorage.getItem("jioUserCart"));
  var arr = []
  var cnt = 0;
  for (var i = 0; i < productsArr.length; i++) {
    if (productsArr[i].name === product.name) {
      cnt++;
    }
    if (cnt > 1 && productsArr[i].name === product.name) {
      arr.push(productsArr[i]);
    }
    else if (productsArr[i].name !== product.name) {
      arr.push(productsArr[i]);
    }
  }
  console.log(arr);
  localStorage.setItem("jioUserCart", JSON.stringify(arr));
  checkC();
  window.location.href = "Cart.html";
}
checkC();
function checkC() {
  if (JSON.parse(localStorage.getItem("jioUserCart")).length == 0) {
    localStorage.setItem('disc', 'none')
  } else {
    if (localStorage.getItem('disc') == 'masai30') {
      let disPrice = document.getElementById("dSc");
      let tPrice = document.getElementById("tA");

      disPrice.textContent = Math.floor(total * (0.3));
      disPrice.setAttribute("class", "offer");
      tPrice.textContent = Math.floor((0.7) * total);
      tPrice.setAttribute("class", "offer")
    }
  }
}

function refresh() {
  window.location.href = "Index.html";
}
