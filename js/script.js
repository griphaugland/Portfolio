const body = document.querySelector('body')

const toggle = document.getElementById('theme-checkbox');
const darkTheme = document.querySelector('.dark-theme')
const lightTheme = document.querySelector('.light-theme')
const linkd = document.querySelector('.linkedin')
const github = document.getElementsByClassName('github')

toggle.onclick = () => {
    if(!toggle.checked){
        body.style.transition = "0.3s"
        body.classList.add('light-theme')
        body.classList.remove('dark-theme')
        linkd.src = "./media/linkedin-dark.png"
        for (let i = 0; i < github.length; i++) {
          github[i].src = "./media/github-dark.png";
      }
    } else if (toggle.checked) {
        body.style.transition = "0.3s"
        body.classList.add('dark-theme')
        body.classList.remove('light-theme')
        linkd.src = "./media/linkedin-light.png"
        for (let i = 0; i < github.length; i++) {
          github[i].src = "./media/github-light.png";
      }
    }
     
}