//tema claro e tema escuro
const btnTema = document.querySelector(".menu .btn-tema")
const icone = document.querySelector(".btn-tema i")
const body = document.body
const temaSalvo = localStorage.getItem("tema")
if (temaSalvo === "dark") {
    body.classList.toggle("dark")
    icone.classList.remove("fa-sun")
    icone.classList.add("fa-moon")
}else {
    icone.classList.add("fa-sun")
    icone.classList.remove("fa-moon")
}
btnTema.addEventListener("click", () => {
    body.classList.toggle("dark")
    if (icone.classList.contains("fa-sun")) {
        icone.classList.remove("fa-sun")
        icone.classList.add("fa-moon")
        localStorage.setItem("tema","dark" )
    }else {
        icone.classList.add("fa-sun")
        icone.classList.remove("fa-moon")
        localStorage.setItem("tema","light" )
    }
})
// suavidade na navegação
const navLinks = document.querySelectorAll('#menu ul a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});