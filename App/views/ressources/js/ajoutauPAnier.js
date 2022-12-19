let span_increment = document.querySelector(".quantity_paner");
let buttonAdd = document.querySelector(".button_add");  
let add_click=document.querySelector(".add_click")


/****************** all prices to number******************/
function convertToNumber(number) {
    return Number(number)
}
/****************** end all prices to number************/
        

/*************************************add element to modal*/
let obj={nomDuProduit:"AOC 24B1XHS Black", nombreDeClick:0, prix:109.94, totalCommand:0}
let names = document.querySelector(".name")
let click = document.querySelector(".click")
let prix = document.querySelector(".prix")
let td_3 = document.querySelector(".td_3")
let total_command = document.querySelector(".total_command")
let total_shop=document.querySelector(".total_shop")


buttonAdd.addEventListener("click", function (e) {
    e.preventDefault();
    span_increment.textContent++;
    add_click.style.display = "block";

    obj.nombreDeClick++;
        obj.totalCommand += obj.prix
        console.log(obj.nombreDeClick);
    console.log(obj.prix);
    total_shop.textContent= (obj.totalCommand).toFixed(2)
})
        
/********************************end add element to modal*/

        /********************************close part*/
let closse = document.querySelector("#close4");
let closse1 = document.querySelector("#close5");
let openModal4 = document.querySelector("#openModal4")
// let openModal1=document.querySelector("#openModal5")
let pannerPrint = document.querySelector('.pannerPrint');
pannerPrint.addEventListener("click", function (e) {
    e.preventDefault()
    console.log("gr");
    if (span_increment.textContent === '0') {
        openModal4.style.display='block'
    } else {
        openModal5.style.display = 'block'
        names.textContent = obj.nomDuProduit;
        click.textContent = obj.nombreDeClick;
        td_3.textContent = obj.nombreDeClick;
        prix.textContent = obj.prix;
        total_command.textContent = obj.totalCommand.toFixed(2);
     
    }
})


let tr2=document.querySelector(".tr2")
let btnDelete = document.querySelector(".btn-delete");
btnDelete.addEventListener("click", function (e) {
    e.preventDefault();
    click.textContent--;
    obj.nombreDeClick--;
    td_3.textContent--;
    total_command.textContent = total_command.textContent - obj.prix;
    span_increment.textContent--;
    if (click.textContent == 0) {
        names.textContent = 0;
        total_command.textContent = 0;
        obj.totalCommand = 0;
        prix.textContent = 0;
        tr2.remove();
    } 
   
})

closse.addEventListener("click", function (e) {
    e.preventDefault();
    openModal4.style.display = "none";
});
closse1.addEventListener("click", function (e) {
    e.preventDefault();
    openModal5.style.display = "none";
})
//         /*****************************end close part*/

// let pannerPrint = document.querySelector(".pannerPrint")

// pannerPrint.addEventListener("click", function(e){
//     if (span_increment.textContent === 0) {
        
//     }
// })