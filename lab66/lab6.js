// Minified and optimized JavaScript

// Image lazy loading
document.addEventListener('DOMContentLoaded', function() {
    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Carousel functionality
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let index = 0;
    
    function updateAll() {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }
    
    updateAll();
    
    document.querySelector(".next")?.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        updateAll();
    });
    
    document.querySelector(".prev")?.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        updateAll();
    });
    
    // Second carousel
    const section = document.querySelector(".section");
    const slides1 = document.querySelectorAll(".slide1");
    const dots1 = document.querySelectorAll(".dot1");
    let index1 = 0;
    
    document.querySelector(".next1")?.addEventListener("click", () => {
        index1++;
        if (index1 === slides1.length) index1 = 0;
        updateSection();
        updateDots();
    });
    
    document.querySelector(".prev1")?.addEventListener("click", () => {
        index1--;
        if (index1 < 0) index1 = slides1.length - 1;
        updateSection();
        updateDots();
    });
    
    function updateSection() {
        if (section) {
            section.style.transform = `translateX(-${index1 * 100}%)`;
        }
    }
    
    function updateDots() {
        dots1.forEach(dot => dot.classList.remove('active'));
        dots1[index1]?.classList.add('active');
    }
    
    // Keyboard navigation for carousels
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            document.querySelector(".prev")?.click();
            document.querySelector(".prev1")?.click();
        }
        if (e.key === 'ArrowRight') {
            document.querySelector(".next")?.click();
            document.querySelector(".next1")?.click();
        }
    });
    
    // Service worker registration for PWA
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js');
        });
    }
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfEntries = performance.getEntriesByType('navigation');
        if (perfEntries.length > 0) {
            const navEntry = perfEntries[0];
            console.log('Page load time:', navEntry.loadEventEnd - navEntry.startTime);
        }
    });
}