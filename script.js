// var pass = document.getElementById("password");
// var msg = document.getElementById("message");
// var str = document.getElementById("strength");

// pass.addEventListener('input', () => {
//     if(pass.ariaValueMax.length > 0){
//         msg.style.display = "block";
//     }
//     else{
//         msg.style.display = "none";
//     }
//     if(pass.value.length < 4){
//         str.innerHTML = weak;
//         pass.style.borderColor = "#ff5925"; 
//         msg.style.color = "#ff5925";

//     }
//     else if(pass.value.length >=4 && pass.value.length < 8){
//         str.innerHTML = "medium";
//         pass.style.borderColor = "yellow"; 
//         msg.style.color = "yellow";
//     }
//     else if(pass.value.length >= 8 ){
//         str.innerHTML = "strong";
//         pass.style.borderColor = "#26d730";
//         msg.style.color = "26d730";

//     }
// })








var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");

pass.addEventListener('input', () => {
    if(pass.value.length > 0){
        msg.style.display = "block";
    }
    else{
        msg.style.display = "none";
    }
    if(pass.value.length < 4){
        str.innerHTML = "Weak";
        pass.style.borderColor = "#ff5925"; 
        msg.style.color = "#ff5925";
    }
    else if(pass.value.length >=4 && pass.value.length < 8){
        str.innerHTML = "Medium";
        pass.style.borderColor = "yellow"; 
        msg.style.color = "yellow";
    }
    else if(pass.value.length >= 8 ){
        str.innerHTML = "Strong";
        pass.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }
})


// var pass = document.getElementById("password");
// var msg = document.getElementById("message");
// var str = document.getElementById("strength");

// pass.addEventListener('input', () => {
//     if(pass.value.length > 0){
//         msg.style.display = "block";
//     } else {
//         msg.style.display = "none";
//     }
//     if(pass.value.length < 4){
//         str.innerHTML = "weak"; // Enclose "weak" in quotes
//         pass.style.borderColor = "#ff5925"; // Enclose color in quotes and add # for hexadecimal
//         msg.style.color = "#ff5925"; // Enclose color in quotes and add # for hexadecimal
//     } else if(pass.value.length >=4 && pass.value.length < 8){
//         str.innerHTML = "medium";
//         pass.style.borderColor = "yellow"; // Enclose color in quotes
//         msg.style.color = "yellow"; // Enclose color in quotes
//     } else if(pass.value.length >= 8 ){
//         str.innerHTML = "strong";
//         pass.style.borderColor = "orange"; // Enclose color in quotes
//         msg.style.color = "orange"; // Enclose color in quotes
//     }
// });
