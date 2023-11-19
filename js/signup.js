Lpdata=JSON.parse(localStorage.getItem("form"))||[]
let formEl=document.querySelector("form");
let Name=document.getElementById("name");
let Email=document.getElementById("email");
let Password=document.getElementById("password");
let Cpass=document.getElementById("pass");


formEl.addEventListener("submit",function(e){
    e.preventDefault()




    if(Password.value!==Cpass.value){
        alert("Passwords do not match. Please try again.");
        return;
    }

    if(Password.value.length < 6){
    alert("Password is too short. Please enter at least 6 characters.");
    return;
}


    let formdata={
        name:Name.value,
        email:Email.value,
        password:Password.value,
        confirmpassword:Cpass.value
    }

    let emailexist=false;

    for(let i=0; i<Lpdata.length; i++){
        if(Lpdata[i].email===Email.value){
            emailexist=true;
            break;
        }
    }
    if(emailexist){
        alert("Email already exists. Please try again with a different email.")
        return
    }
    else{
        window.location.href="SignIn.html"
    }
    
    Lpdata.push(formdata)
    localStorage.setItem("form",JSON.stringify(Lpdata))
})