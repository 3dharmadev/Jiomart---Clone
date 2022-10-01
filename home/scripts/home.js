import {navbar} from '../component/components.js'
document.getElementById('kcnavbar').innerHTML=navbar();

import {sidebar} from '../component/sidebar.js'
document.getElementById('sidebar').innerHTML=sidebar();

let data=["https://www.jiomart.com/images/cms/aw_rbslider/slides/1661329065_02--Shop-From-Top-Categories-Kitchen-Appliances.jpg",
"https://www.jiomart.com/images/cms/aw_rbslider/slides/1661329189_02--Shop-From-Top-Categories-audio.jpg",
"https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109495_1654018730_Smartphones.jpg",
"https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109344_1654018675_Mens-Wear.jpg"
]

data.forEach((el)=>{
    let img
})

let next=()=>{
    if(count<3)
    {
        showData(++count);
    }
    else if(count==3)
    {
        count=3
        showData(count);
    }
}

let prev=()=>{
    if(count>1)
    {
        showData(--count);
    }
    else if(count==1){
        showData(count);
    }
}


