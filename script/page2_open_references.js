function openReferences(){
    let target = document.querySelectorAll("div[id^=references_]")
    if (document.getElementById("reference").value == "Tap to see references for this page"){
        document.getElementById("reference").value = "Tap to hide references";
        for (let div of target){
            div.style.display = 'block'; 
        }
    }
    else{
        document.getElementById("reference").value = "Tap to see references for this page";
        for (let div of target){
            div.style.display = 'none'; 
        }
    }
}
