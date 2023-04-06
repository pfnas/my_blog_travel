let norTravel = document.getElementById("norTravel")
console.log(norTravel)
norTravel.addEventListener("click", openForm);
function openForm() {
    document.getElementById("popupForm").style.display = "block";
    document.getElementById("popupForm").style.background = "blue";     
    console.log(openForm)  
    }
    
let cancelPopUp = document.getElementById("cancelPopUp")
cancelPopUp.addEventListener("click", closeForm)
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
    }

