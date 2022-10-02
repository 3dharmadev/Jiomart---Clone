
  // getting the item from local storage
  var item = JSON.parse(localStorage.getItem("ProductDetails"));
  // console.log(item);

  // displaying the element of the item
  item.map(function (ele) {
    //// getting main image
    var img = document.createElement("img");
    img.src = ele.image;
    document.querySelector(".singleImg").append(img);
    //// getting item name
    var name = document.createElement("p");
    name.innerText = ele.name;
    document.querySelector(".name").append(name);
    //
    // document.querySelector(".pageLocation").append(name);
    //// getting price
    var price = document.createElement("p");
    price.innerText = ele.price;
    document.querySelector(".price").append(price);
    //// getting strikeOffPrice
    // var strike = document.createElement("p");
    // strike.innerText = ele.strikeOffPrice;
    // document.querySelector(".stikeOffPrice").append(strike);
    // // getting sub images
    //// getting sub image one
    var imgOne = document.createElement("img");
    imgOne.src = ele.image;
    imgOne.setAttribute("class", "subImage");
    document.querySelector(".imgOne").append(imgOne);
    // calling the function
    imgOne.addEventListener("click", function () {
      changeImgOne(ele);
    });
    //// getting sub image two
    //var imgTwo = document.createElement("img");
    // imgTwo.src = ele.subImgTwo;
    // imgTwo.setAttribute("class", "subImage");
    // document.querySelector(".imgTwo").append(imgTwo);
    // // calling the function
    // imgTwo.addEventListener("click", function () {
    //   changeImgTwo(ele);
    // });
    // //// getting sub image three
    // var imgThree = document.createElement("img");
    // imgThree.src = ele.subImgThree;
    // imgThree.setAttribute("class", "subImage");
    // document.querySelector(".imgThree").append(imgThree);
    // // calling the function
    // imgThree.addEventListener("click", function () {
    //   changeImgThree(ele);
    // });
    //// getting sub image four
    // var imgFour = document.createElement("img");
    // imgFour.src = ele.subImgFour;
    // imgFour.setAttribute("class", "subImage");
    // document.querySelector(".imgFour").append(imgFour);
    // // calling the function
    // imgFour.addEventListener("click", function () {
    //  // changeImgFour(ele);
    // });
  });

  // discount
  // var a = document.querySelector(".price").innerText;
  // // console.log(a);
  // var b = document.querySelector(".stikeOffPrice").innerText;
  // var discount = Math.floor(((b - a) / b) * 100);
  // discountValue = `(${discount}% OFF)`;
  // // console.log(discount);
  // document.querySelector(".discount").append(discountValue);

  //// changing the main image
  // one image
  function changeImgOne(ele) {
    var selectedImg = document.querySelector(".imgOne").innerHTML;
    document.querySelector(".singleImg").innerHTML = selectedImg;
  }
  // two image
  //function changeImgTwo(ele) {
    //var selectedImg = document.querySelector(".imgTwo").innerHTML;
//document.querySelector(".singleImg").innerHTML = selectedImg;
 // }
  // three image
  //function changeImgThree(ele) {
  //  var selectedImg = document.querySelector(".imgThree").innerHTML;
   // document.querySelector(".singleImg").innerHTML = selectedImg;
  //}
  // four image
 // function changeImgFour(ele) {
  //  var selectedImg = document.querySelector(".imgFour").innerHTML;
  //  document.querySelector(".singleImg").innerHTML = selectedImg;
  //}

  ////adding to cart
  var cartData = JSON.parse(localStorage.getItem("cart")) || [];
  //listening the event
  document.querySelector(".addToBag").addEventListener("click", addingToCart);
  // function to add the item to cart
  function addingToCart(ele) {
    cartData.push(item[0]);
    console.log(cartData);
    localStorage.setItem("cart", JSON.stringify(cartData));
    window.location.reload();
  }

  //location of the file
  // var location = document.querySelector(".pageLocation").innerText;
  // console.log(location);

  // var location = document.querySelector(".pageLocation");
  // location.innerText = item[0]["name"];
  // console.log(item[0]["name"]);
