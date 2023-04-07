let iceTravel = document.getElementById("iceTravel")
iceTravel.addEventListener("click", openForm);
function openForm() {
    document.getElementById("popupForm").style.display = "block";
    document.getElementById("popupForm").style.background = "green";
    }
    
let cancelPopUp = document.getElementById("cancelPopUp")
cancelPopUp.addEventListener("click", closeForm)
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
    }