let sidebar=() =>{
    return ` 
    <div id="mySidebar" class="sidebar">
       <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
      
       <div id="top">
          <div>
             
             <h4 id="hellouser">Hello User</h4>
          </div>
          <div class="second">
             <a href="/MY_Account/account.html">Account</a>
             <a href="">Orders</a>
          </div>
       
       </div>
       <a  onclick="refresh()">Home</a>
       <a href="#">Shop by Category</a>
       <a href="/MY_Account/wishlist.html">Mylist</a>
       <a href="#">Jiomart Wallet</a>
       <a href="#">Jiomart Gift Store</a>
       <a href="#">Jiomart Gift Card</a>
       <a href="#">GoGreen with Jiomart</a>
       <a href="#">All Offers</a>
 
       <div id="bar1">
       </div>
 
       <div>
          <a href="">Help</a>
          <a href="">About us</a>
          <a href="">Guide</a>
       </div>
 
       <div id="bar2">
       </div>

       <div id="contact">
          <h4>CONTACT US</h4>
          <p>WhatsApp us : 70003 70003</p>
          <p> Call Us : 1800 890 1222 <br>
             8:00 AM to 8:00 PM, 365 days</p>
             <p>  Please note that you are accessing the BETA Version of www.jiomart.com</p>
             <p>Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems on the beta website, please email us on cs@jiomart.com</p>
              
             <h4>DOWNLOAD APP</h4>
             <div id="downloadappimg">
              <img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png" alt="">
                <img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png" alt="">
             </div>
            
       </div>
 
     </div>
     
     <div id="main">
       <button class="openbtn" onclick="openNav()">☰</button> 
     </div>`;
};

export {sidebar};