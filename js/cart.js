let Product=JSON.parse(localStorage.getItem("product"))||[];
let mainDiv=document.getElementById("cart")
    showData(Product)
function showData(data){
    mainDiv.innerHTML="";
       for (let i=0; i<data.length; i++){
        let first=document.createElement("div");
        let Image=document.createElement("img");
        let title=document.createElement("h3");
        let Description=document.createElement("p");
        let Price=document.createElement("h3");
        let btn1=document.createElement("button");
        let btn2=document.createElement("button");
        let Increase=document.createElement("button")
        let Decrease=document.createElement("button");
        let Quantity=document.createElement("span")


        btn1.setAttribute("class","button")
        btn2.setAttribute("class","new")

        Increase.setAttribute("class","increase")
        Decrease.setAttribute("class","decrease")

        //let imageUrl = `${data[i].images[0]}?${Date.now()}`;
        Image.setAttribute("src",data[i].images);

        title.innerText=data[i].title
        Description.innerText=data[i].description
        Price.innerText=`₹${data[i].price}`

        let anchor = document.createElement("a");
        anchor.setAttribute("href", "newcheckout.html");
        anchor.innerText="Buy Now"
        btn2.appendChild(anchor)

        btn1.innerText="Remove"
        // btn2.innerText="Buy Now"
        Increase.innerText="+"
        Decrease.innerText="-"
        Quantity.innerText=data[i].quantity;

        Increase.addEventListener("click",function(){
            data[i].quantity++;
            localStorage.setItem("product", JSON.stringify(Product));
            showData(Product);

        })
        Decrease.addEventListener("click",function(){
            if( data[i].quantity>1){
                data[i].quantity--;
            }
            localStorage.setItem("product", JSON.stringify(Product));
            showData(Product);
        })

        btn1.addEventListener("click",function(){
            let index = data[i].index;
            Product.splice(index, 1);
            localStorage.setItem("product", JSON.stringify(Product));
            showData(Product);
                    
        })

        data[i].index = i;

        let sum=0;
        for(let i=0; i<data.length; i++){
            sum+=data[i].price*data[i].quantity
        }

        document.getElementById("cart-total").innerText=sum;
        first.append(Image,title,Description,Price,btn1,Increase, Quantity,Decrease,btn2)
        mainDiv.append(first)
       }
    }
