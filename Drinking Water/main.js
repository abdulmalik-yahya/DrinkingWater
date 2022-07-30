const smallCups = document.querySelectorAll(".cup-small"); //to get all the small cup divs
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remainder = document.getElementById("remainder");

//first logic

const updateBigCup = () => {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    // console.log(fullCups)
    const total = smallCups.length;
    if (fullCups == 0) //if nothing is selected from small cups
    {
        percentage.style.visibility = "hidden";
        percentage.style.height = '0';
    }
    else
    {
        percentage.style.visibility = "visible";
        percentage.style.height = `${(fullCups / total) * 330}px`;
        percentage.innerHTML=`${(fullCups/total)*100}%`
    }
    if (fullCups == total) {
        remainder.style.visibility = "hidden";
        remainder.style.height = 0;
    }
    else {
        remainder.style.visibility = "visible";
        liters.innerHTML=`${2-(250*fullCups)/1000} Liter`
    }
}
smallCups.forEach((cup, idx) => {
    cup.addEventListener("click", () => { // to get the index of clicked element
        fillCups(idx); // to fill cups n change bg color
    })
});

const fillCups = (idx) => {
    if (smallCups[idx].classList.contains("full") && !smallCups[idx].nextElementSibling.classList.contains("full")) {
        idx--; 
    }
    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add("full");
        }
        else {
            cup.classList.remove("full");
        }
    }
    )
    updateBigCup();
}


