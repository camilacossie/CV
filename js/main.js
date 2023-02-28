function showMenu (){
    document.getElementById('nav-menu').classList.toggle("show-menu")
}

const toggle = document.getElementById("nav-toggle");  
toggle.addEventListener('click', showMenu);

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')
const scrollY = window.pageYOffset

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
   
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

function scaleCv(){
    document.body.classList.add('scale-cv')
}

function removeScale(){
    document.body.classList.remove('scale.cv')
}

let areaCv = document.getElementById('area-cv')

let resumeButton = document.getElementById('resume-button')

let opt = {
    margin:       0,
    filename:     'myCv.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 4 },
    jsPDF:        { format: 'a4', orientation: 'portrait' }
  };
function generateResume(){
    html2pdf(areaCv, opt)
}

resumeButton.addEventListener('click', () =>{
    scaleCv()

    generateResume()
})