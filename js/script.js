const body = document.querySelector('body')

const toggle = document.getElementById('theme-checkbox');
const darkTheme = document.querySelector('.dark-theme')
const lightTheme = document.querySelector('.light-theme')
const linkd = document.querySelector('.linkedin')
const insta = document.querySelector('.insta')

toggle.onclick = () => {
    if(!toggle.checked){
        body.style.transition = "0.3s"
        body.classList.add('light-theme')
        body.classList.remove('dark-theme')
        linkd.src = "./media/linkedin-dark.png"
        insta.src = "./media/instagram-dark.png"
    } else if (toggle.checked) {
        body.style.transition = "0.3s"
        body.classList.add('dark-theme')
        body.classList.remove('light-theme')
        linkd.src = "./media/linkedin-light.png"
        insta.src = "./media/instagram-light.png"
    }
     
}