console.log("Conected");
// Setting vars
var buttons = document.querySelectorAll("button");
var added = "";

for(i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", clickCheck, false);
}

function clickCheck(){
    if(this.classList.contains("add-to-cart")){
        console.log("Clicked")
    }
}




// Init carousel
$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });

