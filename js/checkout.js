let formEl=document.querySelector("form")
    let inputEl=document.querySelector('button[type="submit"]')

    inputEl.addEventListener("click",function(e){
        e.preventDefault()

        let Name=document.getElementById("name");
        let Email=document.getElementById("email");
        let Address=document.getElementById("address");
        let City=document.getElementById("city");
        let State=document.getElementById("state");
        let Zip=document.getElementById("zip");

        let Ship=document.getElementById("ship_name");
        let ship_address=document.getElementById("ship_address");
        let ship_city=document.getElementById("ship_city");
        let ship_state=document.getElementById("ship_state");
        let ship_zip=document.getElementById("ship_zip")

        if(Name.value==="" && Email.value==="" && Address.value==="" && City.value==="" && State.value==="" && Zip.value==="" && Ship.value==="" && ship_address.value==="" && ship_city.value==="" && ship_state.value==="" && ship_zip.value===""){
            alert("Please fill out the details")
        }
        else{
            window.location.href="Payment.html"
        }

    })