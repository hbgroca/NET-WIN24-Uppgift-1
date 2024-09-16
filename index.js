let darkMode = false;

function faqExpand(faqQuestion){
  console.log(faqQuestion);
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

function changeTheme(){
    if(darkMode){
      // Ändrar tema till ljust
      darkMode = false;
      console.log("changed theme to bright");
      document.getElementById("body").classList = "bright";
      document.getElementById("toggleSwitch-dot").classList = "toggleSwitch-dot";  

      document.getElementById("appleStore").src = `svg/appstore-light.svg`;
      document.getElementById("googleStore").src = `svg/googleplay-light.svg`;
    }
    else{
      // Ändrar tema till mörkt
      darkMode = true;
      console.log("changed theme to dark");
      document.getElementById("body").classList = "dark";
      document.getElementById("toggleSwitch-dot").classList = "toggleSwitch-dot toggleSwitch-dot-dark";
      
      document.getElementById("appleStore").src = `svg/appstore-dark.svg`;
      document.getElementById("googleStore").src = `svg/googleplay-dark.svg`;
    }
}

function closeNavbarSide(){
    document.getElementById("aside").classList = "hidden";
}

function openNavbarSide(){
    document.getElementById("aside").classList = "";
}