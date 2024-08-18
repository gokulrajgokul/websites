 
var sidenavbar=document.querySelector(".side-navbar")
function showNavbar(){
    sidenavbar.style.left="0"
}

function closeNavbar(){
    sidenavbar.style.left="-60%"
}


var productContainer=document.getElementById("products")
var search=document.getElementById("search")
var productlist=productContainer.querySelectorAll("div")


search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count=count+1)
        {
         var Productname=productlist[count].querySelector("p").textContent 
            if(Productname.toUpperCase().indexOf(enteredValue)<0)
                {
                productlist[count].style.display="none"
                }
            else{
                productlist[count].style.display="block"
                }
        }

})