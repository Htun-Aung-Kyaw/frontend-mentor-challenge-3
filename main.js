console.log("This is scroll reveal effect with js");

let cards = document.querySelectorAll(".card");
console.log(cards);

window.addEventListener("load", () => {
    cards.forEach(card=>{
        card.classList.add("reveal");
    });
});

window.addEventListener("scroll",scrollEventListener);

function scrollEventListener()
{
    console.log("Event Listener Called.");

    cards.forEach((card, index) => {
        let windowHeight = window.innerHeight;
        let sectionRectTop = card.getBoundingClientRect().top;

        if(sectionRectTop<windowHeight && card.classList.contains("reveal")){
            card.classList.add("active");
        }
        else
            card.classList.remove("active");
    });
}