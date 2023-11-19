let formEl=document.querySelector("form");
   


    formEl.addEventListener("submit",UserlogIn)
      
    function UserlogIn(event){
        event.preventDefault()
        let Name=document.getElementById("name").value;
        let Email=document.getElementById("email").value;
        let Password=document.getElementById("password").value;
        
        Lpdata=JSON.parse(localStorage.getItem("form"))||[];
        console.log(Lpdata)
        let user = Lpdata.find((data) => data.name === Name && data.email === Email && data.password === Password );
        console.log(user);
        if( user){
            window.location.href='index.html'
        }
        else{
            alert("Invalid Email or Password. Please try again")
        }


    }