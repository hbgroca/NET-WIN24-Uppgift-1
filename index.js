let darkMode = false;

function faqExpand(faqQuestion){
    const faqClassList = document.getElementById(faqQuestion);
    const faqBtn = document.getElementById(faqQuestion + "Btn");
    if(faqClassList.classList == "faqColapsed"){
        faqClassList.classList = "faqExpanded";
        faqBtn.classList = "faqBtnExpanded";
    }else
    {
        faqClassList.classList = "faqColapsed";
        faqBtn.classList = "faqBtnColapsed";
    }
}

function changeTheme(){
    if(darkMode){
      // Ändrar tema till ljust
      darkMode = false;
      console.log("changed theme to bright");
      document.getElementById("body").classList = "bright";
      document.getElementById("toggleSwitch-dot").classList = "toggleSwitch-dot";
      // document.getElementById("toggleSwitch-bg").classList = "toggleSwitch-bg";
    //   document.getElementById("linkButtons").innerHTML = `
    //         <button onClick=""><img class="tablet:hidden" src="./svg/linkAppleStore.svg" alt="Link to apple store"/></button>
    //         <button onClick=""><img class="tablet:hidden" src="./svg/linkGoogle.svg" alt="Link to google play"/></button>
    //         <button onClick=""><img class="hidden tablet:block" src="./svg/linkAppleStore-md.svg" alt="Link to apple store" /></button>
    //         <button onClick=""><img class="hidden tablet:block" src="./svg/linkGoogleStore-md.svg" alt="Link to google play" /></button>`;
    }
    else{
      // Ändrar tema till mörkt
      darkMode = true;
      console.log("changed theme to dark");
      document.getElementById("body").classList = "dark";
      document.getElementById("toggleSwitch-dot").classList = "toggleSwitch-dot toggleSwitch-dot-dark";
      // document.getElementById("toggleSwitch-bg").classList = "toggleSwitch-bg toggleSwitch-bg-dark";
    //   document.getElementById("linkButtons").innerHTML = `
    //         <button onClick=""><img class="tablet:hidden" src="./svg/linkAppleStore-Bright.svg" alt="Link to apple store" /></button>
    //         <button onClick=""><img class="tablet:hidden" src="./svg/linkGoogle-Bright.svg" alt="Link to google play" /></button>
    //         <button onClick=""><img class="hidden tablet:block" src="./svg/linkAppleStore-lg.svg" alt="Link to apple store" /></button>
    //         <button onClick=""><img class="hidden tablet:block" src="./svg/linkGoogle-lg.svg" alt="Link to google play" /></button>`;
    }
}