
let sriTravel = document.getElementById("sriTravel")
sriTravel.addEventListener("click", openForm);
function openForm() {
    document.getElementById("popupForm").style.display = "block";
    }
    
let cancelPopUp = document.getElementById("cancelPopUp")
cancelPopUp.addEventListener("click", closeForm)
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
    }

