function cambiaractivo(e) {
    document.querySelectorAll(".active").forEach(elem => elem.classList.remove('active'))
    e.target.classList.add('active')
    let id=e.target.getAttribute('ariacustom')
    console.log(id)
    let elem=document.getElementById(id)
    console.log(elem        )
        setTimeout(() => {
            elem.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }, 100);
}

document.querySelectorAll(".nav-link").forEach(elem => elem.addEventListener("click", cambiaractivo))
