const btnDarkMode = document.getElementById('btn-toggle-dm');
let darkMode = false;

// Change theme on load based on user preference.
const hasDarkMode = localStorage.getItem('darkmode')
if(hasDarkMode == null){
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        document.querySelector('body').classList.add('bg-dark');
        document.querySelector('.btn-toggle').classList.add('btn-toggle-active');
        darkModeToggle();
    }else{
        console.log("User does not use dark mode");
    }
}

// Dark mode button toogle
document.querySelector('.btn-toggle').addEventListener('click', ()=>{
    // Add btn-toogle-active to the first instance of toggle switch.
    document.querySelector('.btn-toggle').classList.toggle('btn-toggle-active');
    // Add bg-dark to class in body container.
    document.querySelector('body').classList.toggle('bg-dark');
    darkModeToggle();
});

function darkModeToggle(){
    if(!darkMode){
        // Change apple and google store svg
        document.getElementById("appleStore").src = `./images/svg/hero/appstore-dark.svg`;
        document.getElementById("googleStore").src = `./images/svg/hero/googleplay-dark.svg`;
        darkMode = true;
    }else{
        document.getElementById("appleStore").src = `./images/svg/hero/appstore-light.svg`;
        document.getElementById("googleStore").src = `./images/svg/hero/googleplay-light.svg`;
        darkMode = false;
    }
}


// Hamburger menu button toogle
document.querySelector('.btn-hamburger-area').addEventListener('click', ()=>{
    // Open navbar
    document.querySelector('.navbar-side').classList.toggle('navbar-side-active');
    // Toggle open or closed X
    document.querySelector('.btn-hamburger').classList.toggle('btn-hamburger-active');
});

// FAQ Questions open / close function.
function faqExpand(faqQuestion){
    const faqClassList = document.getElementById("faq-faqs-" + faqQuestion);
    faqClassList.classList.toggle('expanded');
}

// Slider
let sliderNr = 2;

function sliderPressed(selected){
    const imgCont = document.querySelector('.slider-img-container');

    if(selected == sliderNr){
        selected++;
        if (selected > 3){ selected = 1}
    }

    imgCont.classList.remove('img-left');
    imgCont.classList.remove('img-right');
    if(selected == '1'){
        sliderNr = 1;
        imgCont.classList.add('img-left');
        imgCont.nextElementSibling.firstElementChild.innerHTML = 'Senaste transaktionshistorik';
        imgCont.nextElementSibling.lastElementChild.innerHTML = 'Här får du en snabb överblick över dina senaste betalningar och överföringar. Håll enkelt koll på dina utgifter och inkomster direkt i appen, så att du alltid har full kontroll över din ekonomi';
    }
    if(selected == '2'){
        sliderNr = 2;
        imgCont.nextElementSibling.firstElementChild.innerHTML = 'Överföringar till personer från din kontaktlista';
        imgCont.nextElementSibling.lastElementChild.innerHTML = 'Med vår app kan du enkelt överföra pengar direkt till personer i din telefonlista. Du slipper skriva in kontonummer manuellt välj bara en kontakt och skicka pengar på några sekunder. Smidigt, snabbt och säkert!';
    }
    if(selected == '3'){
        imgCont.classList.add('img-right');
        sliderNr = 3;
        imgCont.nextElementSibling.firstElementChild.innerHTML = 'Gör snabba överföringar och få full koll på historiken';
        imgCont.nextElementSibling.lastElementChild.textContent = 'Med vår app kan du göra snabba överföringar och få full koll på din transaktionshistorik. Hantera dina betalningar med bara några klick och se detaljerad information om tidigare transaktioner för att alltid ha din ekonomi under kontroll.';
    }
}

// Pop-up
function ContactPressed(){
    document.querySelector('.contact-pop-up').classList.toggle('pop-up-active');
}
function LoginPressed(){
    document.querySelector('.login-pop-up').classList.toggle('pop-up-active');
}