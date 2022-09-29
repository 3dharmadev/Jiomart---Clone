 
    let container=document.getElementById("container");

    let arr__data=[
{
"name":"Onion 5 kg (Pack)",
"image":"https://www.jiomart.com/images/product/150x150/590002136/onion-5-kg-pack-product-images-o590002136-p590002136-0-202203141906.jpg",
"selection2":105.00
},
{
"name":"Sweet Corn 1 pc (Approx 250 g - 450 g)",
"image":"https://www.jiomart.com/images/product/150x150/590001266/sweet-corn-1-pc-approx-250-g-450-g-product-images-o590001266-p590001266-0-202203170359.jpg",
"selection2":17.00
},
{
"name":"Potato per kg",
"image":"https://www.jiomart.com/images/product/150x150/590003516/potato-per-kg-product-images-o590003516-p590003516-0-202203170642.jpg",
"selection2":33.00
},
{
"name":"Onion 1 kg",
"image":"https://www.jiomart.com/images/product/150x150/590003515/onion-1-kg-product-images-o590003515-p590003515-0-202203170724.jpg",
"selection2":22.00
},
{
"name":"Coconut 1 pc (Approx 350 g - 600 g)",
"image":"https://www.jiomart.com/images/product/150x150/590000086/coconut-1-pc-approx-350-g-600-g-product-images-o590000086-p590000086-0-202203170206.jpg",
"selection2":23.00
},
{
"name":"Tomato 1 kg",
"image":"https://www.jiomart.com/images/product/150x150/590003517/tomato-1-kg-product-images-o590003517-p590003517-0-202203170629.jpg",
"selection2": 41.00
},
{
"name":"Ginger Indian 200 g",
"image":"https://www.jiomart.com/images/product/150x150/590003531/ginger-indian-200-g-product-images-o590003531-p590003531-0-202203171030.jpg",
"selection2":24.00
},
{
"name":"Bhendi (Okra) 250 g",
"image":"https://www.jiomart.com/images/product/150x150/590003550/bhendi-okra-500-g-product-images-o590003550-p590003550-0-202203170339.jpg",
"selection2":16.00
},
{
"name":"Button Mushroom 200 g",
"image":"https://www.jiomart.com/images/product/150x150/590000245/button-mushroom-200-g-product-images-o590000245-p590000245-0-202203151749.jpg",
"selection2":32.00
},
{
"name":"Green Chilli 200 g",
"image":"https://www.jiomart.com/images/product/150x150/590003533/green-chilli-200-g-product-images-o590003533-p590003533-0-202203150435.jpg",
"selection2":18.00
},
{
"name":"Lauki (Bottle Gourd) 1 kg",
"image":"https://www.jiomart.com/images/product/150x150/590000174/lauki-bottle-gourd-1-kg-product-images-o590000174-p590000174-0-202203170512.jpg",
"selection2": 89.00 
},
{
"name":"Indian Garlic 200 g",
"image":"https://www.jiomart.com/images/product/150x150/590003532/indian-garlic-200-g-product-images-o590003532-p590003532-0-202203141952.jpg",
"selection2": 18.00 
}
];



let renderDom =(data) =>{
  container.innerHTML="";


        data.forEach((ele) => {
            let div =document.createElement("div");     
            let name =document.createElement("h3");
            name.innerText=ele.name;
            let image =document.createElement("img");
            image.src=ele.image;
            let Price =document.createElement("h5");
            Price.innerText="Price - ₹"+ele.selection2;
            let div1 =document.createElement("div");
            AddTOCart = document.createElement("button");   
            AddTOCart.innerText="Add to Cart"; 
            PLUS = document.createElement("h1");   
            PLUS.innerText="+";    
            div1.append(AddTOCart,PLUS);
            div.append(image,name,Price,div1);
            container.append(div);
        });
}

renderDom(arr__data);

// let show_btn = () =>{
//     let btn=document.getElementById("btn");
//     btn.innerHTML=""; 

//      let data= +Math.ceil(arr__data.length/8);
//      console.log(data,"data");

// for(let i=1;i<=data+1;i++){

//     let btn1=document.createElement("button");
//     btn1.innerText=i;
      
    
//     btn1.onclick=()=>{
//      renderDom(i-1);
//     }
//     btn.append(btn1);
// }
// }

// show_btn();




// let LowToHigh= document.getElementById("lth").addEventListener("click",LTH);

let LTH = () =>{
     
    arr__data.sort(function(a,b){
        return a.selection2-b.selection2;
    });
  
     
    renderDom(arr__data);
    
}

let HTL = () =>{
     
    arr__data.sort(function(a,b){
        return b.selection2-a.selection2;
    });
    renderDom(arr__data);
    
}


let filter = () =>{
  
    let filteR= +document.getElementById("filter").value ;
 
    if(filteR===0){
        renderDom(arr__data);
        return;
    }
 let data=arr__data.filter((ele)=>{
     return  ele.selection2<=filteR;
 });
 
 renderDom(data);
}