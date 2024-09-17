let darkMode = false;

// Change theme on load based on user preference.
// Kod från Hans (Darkmode toggle videon) med viss modifikation.
const hasDarkMode = localStorage.getItem('darkmode')
if(hasDarkMode == null){
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        console.log("User is in dark mode, avtivating dark mode");
        changeTheme();
    }else{
        console.log("User does not use dark mode");
    }
}
// Change theme function
function changeTheme(){
    if(darkMode){
      // Ändrar tema till ljust
      darkMode = false;
      console.log("Dark mode disabled");
      document.getElementById("body").classList.remove('dark');
      document.getElementById("toggleSwitch-dot").classList.remove('toggleSwitch-dot-dark');

      document.getElementById("appleStore").src = `svg/appstore-light.svg`;
      document.getElementById("googleStore").src = `svg/googleplay-light.svg`;
    }
    else{
      // Ändrar tema till mörkt
      darkMode = true;
      console.log("Dark mode enabled");
      document.getElementById("body").classList.add('dark');
      document.getElementById("toggleSwitch-dot").classList.add('toggleSwitch-dot-dark');

      document.getElementById("appleStore").src = `svg/appstore-dark.svg`;
      document.getElementById("googleStore").src = `svg/googleplay-dark.svg`;
    }
}

// Side navbar menu
function NavbarSide(input){
    if(input == "open"){
        console.log("Side menu opend")
        document.getElementById("aside").classList.remove('hidden');
    }else{
        console.log("Side menu closed")
        document.getElementById("aside").classList.add('hidden');
    }
}

// Button press alert.
function buttonPressed(input){
    window.alert(`Du har klickat på ${input}`)
}

// FAQ Questions open / close function.
function faqExpand(faqQuestion){
    console.log(`Opened/Closed ${faqQuestion}`);
    const faqClassList = document.getElementById(faqQuestion);
    const faqClass = document.getElementById(faqQuestion + "Btn").parentElement.parentElement;
    const faqBtn = document.getElementById(faqQuestion + "Btn");
    if(faqBtn.classList == "faq-btn faqBtnExpanded"){
        faqClassList.classList = "faqColapsed";
        faqBtn.classList = "faq-btn";
        faqClass.classList = "faq colapsed";
    }else if(faqBtn.classList == "faq-btn")
    {
        faqClassList.classList = "faqNotColapsed";
        faqBtn.classList = "faq-btn faqBtnExpanded";
        faqClass.classList = "faq notColapsed";
    }
}