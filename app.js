var btnToggle = document.querySelector(".btnToggle");
btnToggle.addEventListener('click', function() {
    document.querySelector('.big-container').classList.toggle("light");
    this.classList.toggle("active")
})
