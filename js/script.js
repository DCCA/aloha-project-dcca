document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll("nav li");
    const form = document.querySelector('#form-sign-up');
    const submitBtn = document.getElementById('submit-btn');

    //Smooth scroll
    navLinks.forEach(function(element) {
        // add click listener for the element in this iteration of the loop
        element.addEventListener("click", function(event){
            event.preventDefault();
        // how can you get the "href" attribute value of the clicked element to create a string that corresponds the id of the correct section?
            let href = this.querySelector('a').hash;
        // scroll to that section with .scrollIntoView()
            document.querySelector(href).scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    });

    // Init carousel
    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true
    });

    submitBtn.addEventListener('click', checkEmail);

    function checkEmail(event){
        event.preventDefault();
        let email = document.getElementById('input-field').value;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            alert("Thanks for subscribing!")
        } else{
            alert("Please insert a valid email address.")
        }
    }
});


