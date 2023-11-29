const clickCamion = document.querySelector(".loader");
console.log(clickCamion)
const img =document.querySelector("img");


clickCamion.addEventListener("click", eventAdd)

// let clickCamion = document.querySelector(".loader")
clickCamion.addEventListener("click", openForm);
function openForm() {
    // document.getElementById("popupForm").style.display = "block";
    // document.getElementById("popupForm").style.background = "green";
    alert("en panne")
    }
    
let cancelPopUp = document.getElementById("cancelPopUp")
cancelPopUp.addEventListener("click", closeForm)
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
    }

// function eventAdd(){
//     alert("Page du camion en construction");
//     img.style.position ="fixed";
//     top:0;
//     left: 0;
//     img.style.zIndex = "10000";
//     img.style.width = "500px";
//     img.style.height = "auto";
//     img.src = "./Assets/camion.jpg"
// }