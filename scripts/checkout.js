var emptyCart = document.getElementById("emptyCart");
     var productCont = document.getElementById("userProCont");
     let dPrice = document.getElementById("dSc");
     let FPrice = document.getElementById("tA");

      let arr= JSON.parse(localStorage.getItem("checkoutPrices"));
      {
          console.log(arr[0], arr[1])
          var fP = Number(arr[0]);
          FPrice.textContent = fP;
          if(+arr[1] !== NaN)
          {
              dPrice.textContent = arr[1]; 
          }
      }
      
       if(localStorage.getItem("jioUserCart") !== null && JSON.parse(localStorage.getItem("jioUserCart")).length !== 0)
       {
          var con = document.getElementById("top");
            emptyCart.innerHTML = "";
            var productsArr = JSON.parse(localStorage.getItem("jioUserCart"));
            var total = 0;
             productsArr.forEach(function(product)
            {
               let divC = document.createElement("div");
               let image = document.createElement("img");
               let d = document.createElement("div");
               let Price = document.createElement("div");
              total +=  +product.price.trim();
                
              if(product.img==undefined){
                console.log("product not defined");
                image.src=product.image;
              }else{
               image.src = product.img;
              }

              let Name = document.createElement("div");
              let btn  = document.createElement("button");
              
              Name.textContent = "Name of Product: "+ product.name;
              Price.textContent ="Price: " + product.price;
              d.append(Name);
              btn.innerText = "Remove";
              btn.style.width = "50%"
              btn.style.border ="none"
              btn.onclick = function(){
                removeEle(product);
              }
              divC.append(image,d,Price);
              con.append(divC);

              let actPrice = document.getElementById("pRc");
              let disPrice = document.getElementById("dSc");
              let tPrice = document.getElementById("tA");
              
              
              actPrice.textContent = total +"/-";

              actPrice.setAttribute("class", "rigthPrice")
              tPrice.setAttribute("class", "rigthPrice")
            })
       }else
       {
           productCont.innerHTML ="";
       }
       
       function addPro()
       {
         window.location.href = "Index.html";
       }


    // vaibhav code
    function refresh() {
        console.log("he refreshed");
        window.location.href = "Index.html";
    }
    function addressdisp() {
        document.getElementById("addressform").style.display = "block";
    }
    function goToPayment() {
        let hN = document.getElementById("houseNo");
        let fN = document.getElementById("FloorNo");
        let tN = document.getElementById("TowerNo");
        let bN = document.getElementById("BuildingName");
        let aL  = document.getElementById("Address");
        let lndM = document.getElementById("Landmark");
         
         var userAdd ={
             houseNo:   hN.value,
             floorNo:   fN.value,
             towerNo:   tN.value,
             building:  bN.value,
             adressLine: aL.value,
             landMark:  lndM.value
         }
         for(key in userAdd)
         {
             console.log(userAdd[key]);
         }
         if(lndM.value != "" && fN.value!= "" && tN.value != "" && bN.value!= "" && aL.value != "" && hN.value != "")
         {
           if(localStorage.getItem("jioUserAddress") === null)
           {
             localStorage.setItem("jioUserAddress", JSON.stringify([]));
             let arr = JSON.parse(localStorage.getItem("jioUserAddress"));
             arr.push(userAdd);
              localStorage.setItem("jioUserAddress",JSON.stringify(arr));
           }
          else
           {
              let arr = JSON.parse(localStorage.getItem("jioUserAddress"));
             arr.push(userAdd);
             localStorage.setItem("jioUserAddress", JSON.stringify(arr));
           }
          window.location.href = "payment.html";
         }else
         {
           alert("please Enter all Feilds!")
         }
    }
    function addAdrs(e) {
        e.preventDefault();
    }
    function checkAdd() {
    }
    let addressInp = document.getElementById("Address");
    addressInp.onkeyup = function (e) {
        if (e.target.value != null) {
            document.getElementById("addrchk").innerText=null;
        } 
        if(e.target.value.length==0){
            document.getElementById("addrchk").innerText="Please enter a valid address";
        }
    }
    let landmInp = document.getElementById("Landmark");
    landmInp.onkeyup = function (e) {
        if (e.target.value != null) {
            document.getElementById("landmChk").innerText=null;
        }
        if(e.target.value.length==0){
            document.getElementById("landmChk").innerText="Please enter a valid Landmark/Area";
        }
    }