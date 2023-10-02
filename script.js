const bars= document.querySelector(".bars");
const ham= document.querySelector(".hamburger");

bars.addEventListener("click", () =>{
    bars.classList.toggle("active");
    ham.classList.toggle("active");
});

document.querySelectorAll(".pageslink").forEach(n=> n.addEventListener("click", ()=>{
    bars.classList.remove("active");
    ham.classList.remove("active");
}));


var pokeball = document.getElementById("pokeball");
pokeball.addEventListener("click", () => {
  pokeball.classList.add("pokeball-clicked");
});


const welcomeMessage= document.querySelector(".welcomeMessage");
const toPokemon= document.querySelector(".toPokemon");


function checkOpacity() {
    const ist = getComputedStyle(pokeball);
    const opacity = parseFloat(ist.opacity);

    if (opacity === 0) {
        welcomeMessage.classList.toggle("active");
        toPokemon.classList.toggle("active");
    }
}

pokeball.addEventListener("click", () => {
    setTimeout(checkOpacity, 5500); 
});


function openEmail() {
    var email = 'amirjon5321@gmail.com';
    var subject = 'Message';
    var stuff = 'Hello,\n\n: My name is '+ '. ';
    window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(stuff);
}