// Is the agent licensed in A&H
const isLicensed = getURLParameter('isLicensed');
const state2urlParams = getURLParameter('state');
const leadTypeurlParams = getURLParameter('leadType');
const wlVsTerm = getURLParameter('wlVsTerm');
const fig = getURLParameter('fig');

// Function to get URL parameters by name
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Populate the fields with URL parameters
window.addEventListener('DOMContentLoaded', (event) => {
    var selectedPlanType = getURLParameter('planType');
    const primaryName2urlParams = getURLParameter('primaryName1');
    const primaryAge2urlParams = getURLParameter('primaryAge1');
    const sexInputAurlParams = getURLParameter('sexInputA');
    const spouseName2urlParams = getURLParameter('spouseName1');
    const spouseAge2urlParams = getURLParameter('spouseAge1');
    const sexInputBurlParams = getURLParameter('sexInputB');

    // List of states to hide 'yes2kADD'
    const statesToHideYes2kADD = ['CT', 'KS', 'LI', 'MA', 'MD', 'ME', 'MI', 'MN', 'ND', 'NH', 'NJ', 'NO', 'PA', 'RI', 'UT', 'VA', 'WY'];

    // Assuming the IDs of the input fields are as follows:
    var planType = document.getElementById("planType");
    if (selectedPlanType !== null) {
        planType.value = selectedPlanType;
    } else {
        planType.value = 'recBasic';
    }

    handlePlanTypeSelection();
    planTypeTitle();
    document.getElementById('state2').value = state2urlParams;
    handleStateSelection();
	
//Hide a71 slide if not licensed
if (!isLicensed) {
    document.getElementById('a71Slide').classList.add('skipSlide');
} else {
    document.getElementById('a71Slide').classList.remove('skipSlide');
}
	
//Hide WL vs Term slide if not checked
if (!wlVsTerm) {
    document.getElementById('wltermSlide').classList.add('skipSlide');
} else {
    document.getElementById('wltermSlide').classList.remove('skipSlide');
}
	
//Hide FIG slide if not checked
if (!fig) {
    document.getElementById('figSlide').classList.add('skipSlide');
} else {
    document.getElementById('figSlide').classList.remove('skipSlide');
}
	
// Get all elements with class name 'isLicensed' and 'notLicensed'
var isLicensedElements = document.querySelectorAll('.isLicensed');

// Hide 'isLicensed' and show 'notLicensed' based on isLicensed Parameter
if (isLicensed) {
    isLicensedElements.forEach(function(element) {
        element.style.display = '';
    });
} else {
    isLicensedElements.forEach(function(element) {
        element.style.display = 'none';
    });
}

// Get all elements with class name 'yes2kADD' and 'no2kADD'
var yes2kADDElements = document.querySelectorAll('.yes2kADD');
var no2kADDElements = document.querySelectorAll('.no2kADD');

// Hide 'yes2kADD' and show 'no2kADD' based on state
if (statesToHideYes2kADD.includes(state2urlParams)) {
    yes2kADDElements.forEach(function(element) {
        element.style.display = 'none';
    });
    no2kADDElements.forEach(function(element) {
        element.style.display = 'block';
    });
} else {
    yes2kADDElements.forEach(function(element) {
        element.style.display = 'block';
    });
    no2kADDElements.forEach(function(element) {
        element.style.display = 'none';
    });
}


	
// Hide 'AIL' and show 'NIL' based on state
// Get all elements with class name 'AIL' and 'NIL'
var AILElements = document.querySelectorAll('.AIL');
var NILElements = document.querySelectorAll('.NIL');
	
if (state2urlParams === 'NY') {
    AILElements.forEach(function(element) {
        element.style.display = 'none';
    });
    NILElements.forEach(function(element) {
        element.style.display = 'block';
    });
	if (leadTypeurlParams === "HARDCARD") {
    document.getElementById('addSlide').style.backgroundImage = "url('img/slides/ADD-NIL.jpg')";
	document.getElementById('company-logo').style.backgroundImage = "url('img/slides/GROUP-BENEFITS-REVIEW-NIL.jpg')";
	} else if (leadTypeurlParams === "WILLKIT") {
    document.getElementById('company-logo').style.backgroundImage = "url('img/slides/wk_slides/WILL-KIT-WELCOME-NIL.jpg')";
	} else if (leadTypeurlParams === "CHILDSAFE") {
		document.getElementById('company-logo').style.backgroundImage = "url('img/slides/csk_slides/CHILD-SAFE-WELCOME-NIL.jpg')";
	} else if (leadTypeurlParams === "REFERRAL") {
		document.getElementById('company-logo').style.backgroundImage = "url('img/slides/GROUP-BENEFITS-REVIEW-NIL.jpg')";
	} else {
		document.getElementById('company-logo').style.backgroundImage = "url('img/slides/GROUP-BENEFITS-REVIEW-NIL.jpg')";
	}
} else {
    AILElements.forEach(function(element) {
        element.style.display = 'block';
    });
    NILElements.forEach(function(element) {
        element.style.display = 'none';
    });
	if (leadTypeurlParams === "HARDCARD") {
    document.getElementById('addSlide').style.backgroundImage = "url('img/slides/ADD.jpg')";
	document.getElementById('company-logo').style.backgroundImage = "url('img/slides/GROUP-BENEFITS-REVIEW.jpg')";
	} else if (leadTypeurlParams === "WILLKIT") {
    document.getElementById('company-logo').style.backgroundImage = "url('img/slides/wk_slides/WILL-KIT-WELCOME.jpg')";
	} else if (leadTypeurlParams === "CHILDSAFE") {
		document.getElementById('company-logo').style.backgroundImage = "url('img/slides/csk_slides/CHILD-SAFE-WELCOME.jpg')";
	} else if (leadTypeurlParams === "REFERRAL") {
		document.getElementById('company-logo').style.backgroundImage = "url('img/slides/GROUP-BENEFITS-REVIEW.jpg')";
	} else {
		document.getElementById('company-logo').style.backgroundImage = "url('img/slides/GROUP-BENEFITS-REVIEW.jpg')";
	}
}
	
    document.getElementById('primaryName2').value = primaryName2urlParams;
    document.getElementById('primaryName3').value = primaryName2urlParams;
	updateTextContentByIdToClass('primaryName2', 'primary-name-display', 'PRIMARY');
    document.getElementById('primaryAge2').value = primaryAge2urlParams;
    calculateAge('primaryAge2', 'dobTextA');
    syncInputs('primaryAge2', 'optionAgeInputA');
    document.getElementById('needsSexInputA').value = sexInputAurlParams;
    sendDropdownSelection('needsSexInputA', 'optionSexInputA');
    document.getElementById('spouseName2').value = spouseName2urlParams;
    document.getElementById('spouseName3').value = spouseName2urlParams;
	updateTextContentByIdToClass('spouseName2', 'spouse-name-display', 'SPOUSE');
    needsActivateIncome('spouseName3');
    document.getElementById('spouseAge2').value = spouseAge2urlParams;
    calculateAge('spouseAge2', 'dobTextB');
    syncInputs('spouseAge2', 'optionAgeInputB');
    document.getElementById('needsSexInputB').value = sexInputBurlParams;
    sendDropdownSelection('needsSexInputB', 'optionSexInputB');
    famStatus();
});

// HIDE THE EDITS ON THE OPTION BUILDER
toggleEdit('button-edit');
toggleEdit('hide-edit');

function handlePlanTypeSelection() {
  var planType = document.getElementById("planType");
  var selectedPlanType = planType.value;

  var spans = document.getElementsByClassName("planType");

  for (var i = 0; i < spans.length; i++) {
    spans[i].style.display = "none";
  }

  var selectedSpans = document.getElementsByClassName(selectedPlanType);

  for (var j = 0; j < selectedSpans.length; j++) {
    selectedSpans[j].style.display = "inline";
  }
}

function handleStateSelection() {
  var selectedValue = document.getElementById('state2').value;

  var spans = document.getElementsByClassName("state");

  for (var i = 0; i < spans.length; i++) {
    spans[i].style.display = "none";
  }

  var selectedSpans = document.getElementsByClassName(selectedValue);

  for (var j = 0; j < selectedSpans.length; j++) {
    selectedSpans[j].style.display = "";
  }
}

function updateTextContentByIdToClass(id, className, defaultValue) {
  const sourceElement = document.getElementById(id);
  const elementsToUpdate = document.getElementsByClassName(className);

  if (sourceElement && elementsToUpdate.length > 0) {
    const newValue = sourceElement.value || defaultValue;

    for (let i = 0; i < elementsToUpdate.length; i++) {
      elementsToUpdate[i].textContent = newValue;
    }
  }
}

// Global variable to store opened pop-up windows
var popupWindows = [];