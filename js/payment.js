let formEl=document.querySelector("form")
let inputEl=document.querySelector('button[type="submit"]')

inputEl.addEventListener("click",function(e){
    e.preventDefault()

    let Cardname=document.getElementById("cardname")
    let Cardnumber=document.getElementById("cardnumber")
    let exDate=document.getElementById("expdate");
    let Cvv=document.getElementById("cvv")

    if(Cardname.value==="" && Cardnumber.value==="" && exDate.value==="" && Cvv.value==""){
        alert("Please fill out the details")
    }
    else{
        alert("Your order has been placed")
        formEl.reset()
    }
   
})
