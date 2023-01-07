if(localStorage.getItem("userHientai") ){
    let userName=localStorage.getItem("userHientai")
    document.getElementById("userName").innerHTML +=`<span class='nav-a' href='signin.html' >${userName}</span>`
    document.getElementById("userName").innerHTML +=`<span class='nav-a' onclick ="logout()" >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Log out</span>`
}else{
   
    document.getElementById("userName").innerHTML +="<a class='nav-a' href='signin.html' >Login</a>"
}
function logout(){
    localStorage.removeItem("userHientai");
    window.location.reload();
}
