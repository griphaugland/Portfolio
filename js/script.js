const body = document.querySelector('body')

const toggle = document.getElementById('theme-checkbox');
const darkTheme = document.querySelector('.dark-theme')
const lightTheme = document.querySelector('.light-theme')

toggle.onclick = () => {
    if(!toggle.checked){
        body.style.transition = "0.3s"
        body.classList.add('light-theme')
        body.classList.remove('dark-theme')
    } else if (toggle.checked) {
        body.style.transition = "0.3s"
        body.classList.add('dark-theme')
        body.classList.remove('light-theme')
    }
     
}


/* 

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let pageHeight = document.documentElement.scrollHeight;
    let windowHeight = window.innerHeight;

    let scrollPercentage = (scrollPosition / (pageHeight - windowHeight)) * 100;

    if (scrollPercentage >= 25) {
      document.documentElement.style.setProperty('::-webkit-scrollbar-thumb', '#4f4bf4');
    } else if (scrollPercentage >= 50) {
      document.documentElement.style.setProperty('::-webkit-scrollbar-thumb', '#555');
    } else if (scrollPercentage >= 75) {
        document.documentElement.style.setProperty('::-webkit-scrollbar-thumb', '#555');
    }
  });


 */

/* const headerTextTop = document.querySelector('.header-text-top')
const headerImageWrapper = document.querySelector('.header-image-wrapper')
const cardContentContainerSs = document.querySelector('.card-content-containerSs')
const cardContentContainerIn = document.querySelector('.card-content-containerIn')
const cardContentContainerBSM = document.querySelector('.card-content-containerBSM')
const headerTextBottom = document.querySelectorAll('.header-text-bottom li') */


/* function darkenShadows() {
headerTextTop.classList.remove('light-shadows-text');
headerImageWrapper.classList.remove('light-shadows');
cardContentContainerSs.classList.remove('light-shadows');
cardContentContainerIn.classList.remove('light-shadows');
cardContentContainerBSM.classList.remove('light-shadows');
headerImageWrapper.classList.add('dark-shadows');
cardContentContainerSs.classList.add('dark-shadows');
cardContentContainerIn.classList.add('dark-shadows');
cardContentContainerBSM.classList.add('dark-shadows');
headerTextBottom.style.color = "#212121";
}
function lightenShadows() {
headerTextBottom.style.color = "#dedede";
headerTextTop.classList.add('light-shadows-text');
headerImageWrapper.classList.add('light-shadows');
cardContentContainerSs.classList.add('light-shadows');
cardContentContainerIn.classList.add('light-shadows');
cardContentContainerBSM.classList.add('light-shadows');
headerTextTop.classList.remove('dark-shadows-text');
headerImageWrapper.classList.remove('dark-shadows');
cardContentContainerSs.classList.remove('dark-shadows');
cardContentContainerIn.classList.remove('dark-shadows');
cardContentContainerBSM.classList.remove('dark-shadows');
}

 */