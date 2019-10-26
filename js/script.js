document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll("button");
    const navLinks = document.querySelectorAll("nav li");

    //Smooth scroll
    navLinks.forEach(function(element) {
        // add click listener for the element in this iteration of the loop
        element.addEventListener("click", function(event){
            event.preventDefault();
        // how can you get the "href" attribute value of the clicked element to create a string that corresponds the id of the correct section?
            let href = this.querySelector('a').href;
        // get the section by its id using the string from the last step
            let sec = href.split('#');
        // scroll to that section with .scrollIntoView()
            document.querySelector('#' + sec[1]).scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    });

    // for(i = 0; i < buttons.length; i++){
    //     buttons[i].addEventListener("click", clickCheck, false);
    // }

    // function clickCheck(){
    //     if(this.classList.contains("add-to-cart")){
    //         console.log("Clicked")
    //     }
    // }

    // Init carousel
    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true
    });
});


