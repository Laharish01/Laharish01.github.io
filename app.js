var btnToggle = document.querySelector(".btnToggle");
btnToggle.addEventListener('click', function() {
    document.body.classList.toggle("dark");
    this.classList.toggle("active")
})
