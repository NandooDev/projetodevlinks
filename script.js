function toggleMode () {
    const html = document.documentElement
    html.classList.toggle("light")

    // pegar a img
    const img = document.querySelector("#profile img")

    // substituir a img
    if (html.classList.contains("light")) {
    //se estiver com light mode, add a imagem light
        img.setAttribute("src", "./assets/avatar-l.jpg")
    } else {
    //se estiver sem light mode, manter a imagem atual
        img.setAttribute("src", "./assets/avatar.png")
    }

}