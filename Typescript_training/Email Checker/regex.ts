function validateemail(){
    let email = (<HTMLInputElement>document.getElementById("myInput")).value;
    const regex_email= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if(regex_email.test(email)){
        console.log("this email is valid")
    }
    else{
        console.log("email is not valid")
    }
}

