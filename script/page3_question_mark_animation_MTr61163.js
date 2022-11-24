window.addEventListener("DOMContentLoaded", function(){ //create 10 div containing question mark
    let target = document.getElementById("animation");
    for (let i=0; i < 10; i++){
        let div = document.createElement("div");    
        div.innerText = "?";
        div.className = "centerDiv";
        target.append(div);
    }
    startAnimation();
});


function startAnimation(){  
    let divs = document.querySelectorAll("div.centerDiv");
    for (let i=0; i < divs.length; i++){
        if (i % 2 == 0){    //set up the animation by hiding divs with even index
            divs[i].style.visibility = 'hidden';
        }
        else{
            divs[i].style.visibility = 'visible';
        }
    }
    setInterval(doAnimation, 500); //switching divs visibility every half second
}

function doAnimation(){ 
    let divs = document.querySelectorAll("div.centerDiv");
    for (let i=0; i < divs.length; i++){
        if (divs[i].style.visibility == 'hidden'){
            divs[i].style.visibility = 'visible';
        }
        else if (divs[i].style.visibility == 'visible'){
            divs[i].style.visibility = 'hidden';
        }
    }
}

    


