document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav li");
    const submitBtn = document.getElementById("submit-btn");
    // Init carousel
    $(".main-carousel").flickity({
        cellAlign: "left",
        contain: true
    });
    // Add listeners
    navLinks.forEach(function(element) {
        element.addEventListener("click", smoothScroll)
    });
    submitBtn.addEventListener("click", checkEmail);
    // Functions
    function smoothScroll(event){
        event.preventDefault();
            let href = this.querySelector("a").hash;
            document.querySelector(href).scrollIntoView({ 
                behavior: "smooth" 
            });
        };
    function checkEmail(event){
        event.preventDefault();
        let email = document.getElementById("input-field").value;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            alert("Thanks for subscribing!")
        } else{
            alert("Please insert a valid email address.")
        }
    }
});


