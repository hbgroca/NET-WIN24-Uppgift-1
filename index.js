let darkMode = false;

function faqExpand(faqQuestion){
  console.log(faqQuestion);
    const faqClassList = document.getElementById(faqQuestion);
    const faqBtn = document.getElementById(faqQuestion + "Btn");
    if(faqClassList.classList == "faqColapsed"){
        faqClassList.classList = "faqNotColapsed b-bottom";
        // faqBtn.classList = "faqBtnExpanded";
    }else
    {
        faqClassList.classList = "faqColapsed";
        // faqBtn.classList = "faqBtnColapsed";
    }
}

function changeTheme(){
    if(darkMode){
      // Ändrar tema till ljust
      darkMode = false;
      console.log("changed theme to bright");
      document.getElementById("body").classList = "bright";
      document.getElementById("toggleSwitch-dot").classList = "toggleSwitch-dot";
      document.getElementById("manageMoney-link-wrapper-sm").innerHTML = `
          <a href=""><img id="appleLink-sm" src="svg/linkAppleStore.svg" alt="AppleStore länk"></a>
          <a href=""><img id="googleLink-sm" src="svg/linkGoogle.svg" alt="Google Store länk"></a>`;
      
      document.getElementById("manageMoney-link-wrapper-md").innerHTML = `
          <a href=""><img id="appleLink-md" src="svg/linkAppleStore-md.svg" alt="AppleStore länk"></a>
          <a href=""><img id="googleLink-md" src="svg/linkGoogleStore-md.svg" alt="Google Store länk"></a>`;
                
      document.getElementById("manageMoney-link-wrapper-lg").innerHTML = `
          <a href=""><img id="appleLink-lg" src="svg/linkAppleStore-lg-bright.svg" alt="AppleStore länk"></a>
          <a href=""><img id="googleLink-lg" src="svg/linkGoogle-lg-Bright.svg" alt="Google Store länk"></a>`;
                
    }
    else{
      // Ändrar tema till mörkt
      darkMode = true;
      console.log("changed theme to dark");
      document.getElementById("body").classList = "dark";
      document.getElementById("toggleSwitch-dot").classList = "toggleSwitch-dot toggleSwitch-dot-dark";
      
      document.getElementById("manageMoney-link-wrapper-sm").innerHTML = `
          <a href=""><img id="appleLink-sm" src="svg/linkAppleStore-Bright.svg" alt="AppleStore länk"></a>
          <a href=""><img id="googleLink-sm" src="svg/linkGoogle-bright.svg" alt="Google Store länk"></a>`;
      
      document.getElementById("manageMoney-link-wrapper-md").innerHTML = `
          <a href=""><img id="appleLink-md" src="svg/appstore-md-dark.svg" alt="AppleStore länk"></a>
          <a href=""><img id="googleLink-md" src="svg/googleplay-md-dark.svg" alt="Google Store länk"></a>`;
                
      document.getElementById("manageMoney-link-wrapper-lg").innerHTML = `
          <a href=""><img id="appleLink-lg" src="svg/appstore-lg-dark.svg" alt="AppleStore länk"></a>
          <a href=""><img id="googleLink-lg" src="svg/googleplay-lg-dark.svg" alt="Google Store länk"></a>`;
    }
}