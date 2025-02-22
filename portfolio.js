// Functions to open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// Add event listener to close the contact form when clicking outside
document.addEventListener("click", function(event){
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm();
    }
}, false);
