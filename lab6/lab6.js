const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let index = 0;

// funktsiig bugdiin update
function updateAll() {
    // buh slide iig idavhgui bolgoh
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // daraagiin slide iig idevhtei bolgono
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}


updateAll();

document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateAll();
});

document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateAll();
});



const section = document.querySelector(".section");
const slides1 = document.querySelectorAll(".slide1");
const dots1 = document.querySelectorAll(".dot1");
let index1 = 0;

document.querySelector(".next1").addEventListener("click", () => {
    index1++;
    if (index1 === slides1.length) index1 = 0;
    updateSection();
    updateDots();
});

document.querySelector(".prev1").addEventListener("click", () => {
    index1--;
    if (index1 < 0) index1 = slides1.length - 1;
    updateSection();
    updateDots(); 
});

function updateSection() {
    section.style.transform = `translateX(-${index1 * 100}%)`;
}

function updateDots() {
    // buh tsegiig idevhgui bolgone
    dots1.forEach(dot => dot.classList.remove('active'));
    
    // daraagiin tsegiig idevhtei bolgono
    dots1[index1].classList.add('active');
}
лэх
updateDots(); 