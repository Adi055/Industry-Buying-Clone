Fdata=[]
    let ApiUrl=`https://api.escuelajs.co/api/v1/products`
    fetch(ApiUrl)
    .then((res)=>{
       return res.json();
      
    })
    .then((data)=>{
        Fdata=data
        showData(Fdata)
    })
    .catch((error)=>{
        console.log(error)
    })

    let Product=JSON.parse(localStorage.getItem("product"))||[];

    let mainDiv=document.getElementById("container")
   function showData(data){
    mainDiv.innerHTML=""
       for (let i=0; i<data.length; i++){
        let first=document.createElement("div");
        let Image=document.createElement("img");
        let title=document.createElement("h3");
        let Description=document.createElement("p");
        let Price=document.createElement("h3");
        let btn1=document.createElement("button");
        let btn2=document.createElement("button");

        btn1.setAttribute("class","button")
        btn2.setAttribute("class","new")

        //let imageUrl = `${data[i].images[0]}?${Date.now()}`;
        Image.setAttribute("src",data[i].images);

        title.innerText=data[i].title
        Description.innerText=data[i].description
        Price.innerText=`₹${data[i].price}`

        btn1.innerText="Add to Cart"
        btn2.innerText="Buy Now"

        btn1.addEventListener("click",function(){
           let Lpdata=JSON.parse(localStorage.getItem("form"))||[];
            if(Lpdata.length>0){
                if(checkDuplicate(data[i])){
                    alert("Product Already in a Cart")
                }
                else{
    
                    Product.push({...data[i],quantity:1})
                    localStorage.setItem("product",JSON.stringify(Product))
                    alert("Product Added to the Cart")
                }
            }
            else{
                alert("Please login!")
            }

        })

        first.append(Image,title,Description,Price,btn1,btn2)
        mainDiv.append(first)
       }
    }

    function checkDuplicate(data){
        for(let i=0; i<Product.length; i++){
            if(Product[i].id==data.id){
                return true
            }
        }

        return false
    }



    let inputEl=document.getElementById("btnsearch")
    inputEl.addEventListener("click",function(){
        let searchInp=document.getElementById("search").value;
        let SearchUrl=`https://api.escuelajs.co/api/v1/products?supplier=${searchInp}`

        fetch(SearchUrl)
        .then((res)=>{
            return res.json();
           
        })
        .then((data)=>{
           
            Fdata=data
        showData(Fdata)
        })

    })





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