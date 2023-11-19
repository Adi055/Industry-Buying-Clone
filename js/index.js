





let StoreImages=[
    "https://static3.industrybuying.com/homepage/1676984622Ink-Cartridge-&-Toner-desktop.png",
    "https://static3.industrybuying.com/homepage/1676008144Desktop-524X334-Tectix%20(1).png",
    "https://static3.industrybuying.com/homepage/1676984766vaccum-cleaner-desktop.png",
    "https://static3.industrybuying.com/homepage/1676358813powerwash-desktop.png",
    "https://static3.industrybuying.com/homepage/1675426294Desktop%20slider%20banner%20-%20524x334%20pixel-100%20(4).jpg",
    "https://static3.industrybuying.com/homepage/1676984498symphony-desktop.png"
    ]
    let store=document.getElementById("slideshow");

    slidshow(StoreImages)
    function slidshow(StoreImages){
        let index=0
        let image=document.createElement("img");
        image.setAttribute("src",StoreImages[0])

        setInterval(function(){
            index++;
            image.setAttribute("src",StoreImages[index])
            if(index==StoreImages.length){
                index=0
                image.setAttribute("src",StoreImages[index])
            }
        },3000)

        store.append(image)
    }

    function addToCart(){
        let product=document.querySelector(" .image-lay").innerHTML.trim();
        if(!localStorage.getItem("cart")){
            localStorage.setItem("cart",JSON.stringify([]));
        }

        let cart=JSON.parse(localStorage.getItem("cart"))||[];
        cart.push(product);

        localStorage.setItem("cart",JSON.stringify(cart))
        alert("Product added to cart!");
    }
    

Lpdata=JSON.parse(localStorage.getItem("form"))||[];
console.log(Lpdata);

let productVal=document.getElementById("cart");


productVal.addEventListener("click",()=>{
    Auth(Lpdata)
})


function Auth(Lpdata) {
    console.log(Lpdata);
    if(Lpdata.length>0){
        Lpdata.map((ele)=>{
            if(ele.email){
                productVal.href="cart.html"
            }
            
            })
    }
    else{
        alert("Please login!")
    }
    
}









