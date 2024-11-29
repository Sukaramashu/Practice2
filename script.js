document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const numbers = document.querySelectorAll('.number');
    const brandName = document.getElementById('brand-name');
    const viewCollection = document.getElementById('view-collection');
    const textContainer = document.querySelector('.text-container');
    const slider = document.querySelector('.slider');
    const numberslider = document.querySelector('.numberslide');
    let currentSlide = 0;
    const intervalTime = 3000; // Time in milliseconds

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        numbers.forEach((number, i) => {
            number.classList.toggle('active', i === index);
        });
        brandName.textContent = slides[index].getAttribute('data-brand');
        viewCollection.textContent = slides[index].getAttribute('data-collection');

        // Change background image
        const imageUrl = slides[index].getAttribute('data-image');
        slider.style.background = `url('${imageUrl}') no-repeat right`;

        // Move text container to the left for all slides except the first one
        if (index === 0) {
            
            textContainer.classList.remove('left');
            viewCollection.classList.remove('red');
            hh.classList.remove('dark');
            hh.classList.add('white');
            
        } else {
            textContainer.classList.add('left');
            viewCollection.classList.add('red');
            hh.classList.remove('white');
            hh.classList.add('dark');
        }

        if (index === 0 || index === 1) {
            numberslider.classList.remove('dark');
            numberslider.classList.add('white');

        } else {
            numberslider.classList.remove('white');
            numberslider.classList.add('dark');
           
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    numbers.forEach((number, index) => {
        number.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    let slideInterval = setInterval(nextSlide, intervalTime);

    // Optional: Pause the slider on hover
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, intervalTime);
    });

    // Initial call to set the first slide
    showSlide(currentSlide);
});

// script.js
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.getElementById('burger-icon');
    const mobileMenu = document.getElementById('mobile-menu');

    if (burgerIcon && mobileMenu) {
        burgerIcon.addEventListener('click', function() {
            mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
        });

        // Добавляем обработчик для ссылок в меню-категории
        const menuCategoryLinks = mobileMenu.querySelectorAll('.menu-category a');
        menuCategoryLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                menuCategoryLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });

        // Добавляем обработчик для ссылок в языковом селекторе
        const languageLinks = mobileMenu.querySelectorAll('.language-selector a');
        languageLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                languageLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });
    } else {
        console.error('Элементы burger-icon или mobile-menu не найдены.');
    }
});





