var navMenu = document.getElementById("nav-menu");
var navToggle = document.getElementById("nav-toggle");
var navClose = document.getElementById("nav-close");
var navClose = document.getElementById("nav-close")
//        show menu//

if (navToggle) {
        navToggle.addEventListener('click', () => {
                navMenu.classList.add('show-menu')
        })
}

if(navClose){

        navClose.addEventListener('click', () => {
                navMenu.classList.remove('show-menu')
        })
}

// Remove menu mobile//

var navLink=document.querySelectorAll('.nav__link')
// console.log('navLink:', navLink)

function linkAction(){
        var navMenu =document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')
}
for(let i=0;i<navLink.length;i++){
        navLink[i].addEventListener('click',linkAction)
}


/* ==============Accordition skills================ */

var skillsContent=document.getElementsByClassName("skills__content");
var skillsHeader=document.querySelectorAll('.skills__header')


function toggleSkills(){
        let itemclass=this.parentNode.className

        for(let i=0;i<skillsContent.length;i++){
                skillsContent[i].className='skills__content skills__close'
        }

        if(itemclass==='skills__content skills__close'){
                this.parentNode.className='skills__content skills__open'
        }
}

skillsHeader.forEach((el)=>{
        el.addEventListener('click',toggleSkills)
})




/* ============== Srcoll sections active link ================ */
var sections = document.querySelectorAll('section[id]')

function scrollActive(){
    var scrollY = window.pageYOffset

    sections.forEach(current =>{
        var sectionHeight = current.offsetHeight
        var sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
        var nav = document.getElementById('header')
        // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
        if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)


    
/*==================== show srcoll up ====================*/ 
    function scrollUp(){
        var scrollUp = document.getElementById('scroll-up');
        // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)    


    
/*==================== DARK LIGHT THEME ====================*/ 
var themeButton = document.getElementById('theme-button')
var darkTheme = 'dark-theme'
var iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
var selectedTheme = localStorage.getItem('selected-theme')
var selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
var getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
var getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uli-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uli-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
  
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

