
let inc = document.getElementById("inc");
let dec = document.getElementById("dec");
let num = document.getElementById("number");


inc.onclick = () => {
    let beParsed = num.innerText;
    let parsed = parseInt(beParsed, 10);
    parsed += 1;
    num.innerText = parsed;
    /*  console.log(parsed)  */
    
}

dec.onclick = () => {
    let beParsed = num.innerText;
    let parsed = parseInt(beParsed, 10);
    parsed -= 1;
    num.innerText = parsed;
    /* console.log(parsed)  */
}