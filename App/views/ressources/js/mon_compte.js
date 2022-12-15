let select=document.querySelector(".user-account-item")
console.log(select);
let connexionAccess = document.querySelector("#openModal form fieldset:nth-child(2) a")
let linkConnexionToModal2 = document.querySelector("a[href='#openModal2']")
let div1=document.getElementById("openModal")
let div2=document.getElementById("openModal2")
let modalDialog2=document.querySelector("modalDialog2")
let redirect_connexion=document.querySelector("#redirect_connexion")
let close1=document.querySelector("#close1")
let close2=document.querySelector("#close2")
console.log(connexionAccess);
console.log(div1);
console.log(div2);
select.addEventListener("click", function(e){
    e.preventDefault();
   div1.style.display="block";
})
connexionAccess.addEventListener("click", function(e){
    e.preventDefault();
    div1.style.display="none";
    div2.style.display="block";
})

redirect_connexion.addEventListener("click", function(e){
    e.preventDefault();
    div2.style.display="none";
    div1.style.display="block";
})

close1.addEventListener("click", function(e){
    div1.style.display="none";
    div2.style.display="none";
})

close2.addEventListener("click", function(e){
    
    div2.style.display="none";
})