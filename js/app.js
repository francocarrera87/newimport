coll = document.getElementsByClassName("collapsible");


for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        var content = this.nextElementSibling;
        
        // Cerrar todos los elementos abiertos
        for (var j = 0; j < coll.length; j++) {
            var openContent = coll[j].nextElementSibling;
            if (openContent !== content && openContent.style.display === "block") {
                openContent.style.display = "none";
                coll[j].classList.remove("active");
            }
        }
        
        // Abrir o cerrar el elemento actual
        this.classList.toggle("active");
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Comprobar si hay una preferencia de tema guardada
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', '');
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slides");
    let index = 0;

    function moveSlider() {
        index++;
        if (index > 4) index = 0;
        slider.style.transform = `translateX(${-index * 250}px)`;
    }

    setInterval(moveSlider, 3000);
});
let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".slide");
    currentSlide += step;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    document.querySelector(".carousel-container").style.transform = `translateX(${-currentSlide * 100}%)`;
}

// Cambia de imagen cada 5 segundos automáticamente
setInterval(() => moveSlide(1), 5000);
