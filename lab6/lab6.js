const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let index = 0;

// Функц: бүгдийг шинэчлэх
function updateAll() {
    // Бүх слайд болон цэгийг идэвхгүй болгох
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Одоогийн слайд болон цэгийг идэвхтэй болгох
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

// Эхлэх
updateAll();

// Next товч
document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateAll();
});

// Prev товч
document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateAll();
});





//2 dugaar hesgiin java code

const section = document.querySelector(".section");
const slides1 = document.querySelectorAll(".slide1");
const dots1 = document.querySelectorAll(".dot1");
let index1 = 0;

document.querySelector(".next1").addEventListener("click", () => {
    index1++;
    if (index1 === slides1.length) index1 = 0;
    updateSection();
    updateDots(); // ЭНД НЭМЭХ
});

document.querySelector(".prev1").addEventListener("click", () => {
    index1--;
    if (index1 < 0) index1 = slides1.length - 1;
    updateSection();
    updateDots(); // ЭНД НЭМЭХ
});

function updateSection() {
    section.style.transform = `translateX(-${index1 * 100}%)`;
}

// ШИНЭ ФУНКЦ НЭМЭХ
function updateDots() {
    // Бүх цэгүүдийг идэвхгүй болгох
    dots1.forEach(dot => dot.classList.remove('active'));
    
    // Одоогийн цэгийг идэвхтэй болгох
    dots1[index1].classList.add('active');
}

// Эхлэх үед цэгүүдийг шинэчлэх
updateDots(); // ЭНД НЭМЭХ