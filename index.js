let darkMode = false;

function faqExpand(faqQuestion){
  console.log(faqQuestion);
    const faqClassList = document.getElementById(faqQuestion);
    const faqBtn = document.getElementById(faqQuestion + "Btn");
    if(faqBtn.classList == "faq-btn faqBtnExpanded"){
        faqClassList.classList = "faqColapsed";
        faqBtn.classList = "faq-btn";
    }else if(faqBtn.classList == "faq-btn")
    {
        faqClassList.classList = "faqNotColapsed b-bottom";
        faqBtn.classList = "faq-btn faqBtnExpanded";
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
          <a href=""><img id="appleLink-sm" class="hover" src="svg/linkAppleStore.svg" alt="AppleStore länk"></a>
          <a href=""><img id="googleLink-sm" class="hover" src="svg/linkGoogle.svg" alt="Google Store länk"></a>`;
      
      document.getElementById("manageMoney-link-wrapper-md").innerHTML = `
          <a href=""><img id="appleLink-md" class="hover" src="svg/linkAppleStore-md.svg" alt="AppleStore länk"></a>
          <a href=""><img id="googleLink-md" class="hover" src="svg/linkGoogleStore-md.svg" alt="Google Store länk"></a>`;
                
      document.getElementById("manageMoney-link-wrapper-lg").innerHTML = `
          <a href=""><img id="appleLink-lg" sclass="hover" rc="svg/linkAppleStore-lg-bright.svg" alt="AppleStore länk"></a>
          <a href=""><img id="googleLink-lg" class="hover" src="svg/linkGoogle-lg-Bright.svg" alt="Google Store länk"></a>`;
                
    }
    else{
      // Ändrar tema till mörkt
      darkMode = true;
      console.log("changed theme to dark");
      document.getElementById("body").classList = "dark";
      document.getElementById("toggleSwitch-dot").classList = "toggleSwitch-dot toggleSwitch-dot-dark";
      
      document.getElementById("manageMoney-link-wrapper-sm").innerHTML = `
          <a href=""><img id="appleLink-sm" class="hover" src="svg/linkAppleStore-Bright.svg" alt="AppleStore länk"></a>
          <a href=""><img id="googleLink-sm" class="hover" src="svg/linkGoogle-bright.svg" alt="Google Store länk"></a>`;
      
      document.getElementById("manageMoney-link-wrapper-md").innerHTML = `
          <a href=""><img id="appleLink-md" class="hover" src="svg/appstore-md-dark.svg" alt="AppleStore länk"></a>
          <a href=""><img id="googleLink-md" class="hover" src="svg/googleplay-md-dark.svg" alt="Google Store länk"></a>`;
                
      document.getElementById("manageMoney-link-wrapper-lg").innerHTML = `
          <a href=""><img id="appleLink-lg" class="hover" src="svg/appstore-lg-dark.svg" alt="AppleStore länk"></a>
          <a href=""><img id="googleLink-lg" class="hover" src="svg/googleplay-lg-dark.svg" alt="Google Store länk"></a>`;
    }
}