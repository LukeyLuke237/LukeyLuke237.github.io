function validate(form){
    if(validateName(form) && validateAge(form) && validateTravellerNum(form) && validateCheckbox(form)){
        return true;
    }
    else{
        return false;
    }
}

function validateName(form){
    var name = form.elements["userName"];
    if (name.validity.valueMissing){
        name.setCustomValidity("Please enter your username here");
        return false;
    }
    else{
        name.setCustomValidity("");
        return true;
    }
}

function validateAge(form){
    var age = form.elements["age"];
    if (age.validity.valueMissing){
        age.setCustomValidity("Please enter your age here");
        return false;
    }
    else if (age.validity.rangeUnderflow || age.validity.rangeOverflow || isNaN(age.value)){
        age.setCustomValidity("Age should be a number between 1 and 100");
        return false;
    }
    else{
        age.setCustomValidity("");
        return true;
    }
}

function validateTravellerNum(form){
    var travellerNum = form.elements["travellersNum"];
    if (travellerNum.validity.valueMissing){
        travellerNum.setCustomValidity("Please enter the number of travellers here");
        return false;
    }
    else if (travellerNum.validity.rangeUnderflow || isNaN(travellerNum.value)){
        travellerNum.setCustomValidity("The number of travellers must be a number larger than 0");
        return false;
    }
    else{
        travellerNum.setCustomValidity("");
        return true;
    }
}

function validateCheckbox(form){
    var checkbox = form.elements["region"];
    if (!(checkbox[0].checked || checkbox[1].checked || checkbox[2].checked)){
        checkbox[0].setCustomValidity("Please choose at least 1 region");
        return false;
    }
    else{
        checkbox[0].setCustomValidity("");
        return true;
    }
}

function displayGuide(form){ //Display a text message showing which part of the 2nd user should see based on the checkboxes result
    if (validate(form)){
        var regionText = "";
        var checkbox = form.elements["region"];
        if (checkbox[0].checked){
            regionText = regionText + " Ha Long Bay ";
        }
        if (checkbox[1].checked){
            regionText = regionText + " The Imperial Citadel of Hue ";
        }
        if (checkbox[2].checked){
            regionText = regionText + " Dragon Wharf ";
        }
        var name = form.elements["userName"].value;
        document.getElementById("data_output").innerText = "Hello " + name + "! Vietnam is waiting for you.\nYou should view the Guide tab for information about " + regionText + "\nMake sure to check out everything if you can.\nThank you for visiting this website!";
        return false;
    }
}







