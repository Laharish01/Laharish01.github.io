var btnToggle = document.querySelector(".dark-mode-toggle");

if(window.matchMedia('preferes-color-scheme: dark')){
    btnToggle.innerHTML = "Dark"
}

btnToggle.addEventListener('click', function() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains('dark')){
        btnToggle.innerHTML = "Light"
    }else {
        btnToggle.innerHTML = "Dark"

    }
})
