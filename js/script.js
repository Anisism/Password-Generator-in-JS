const pw = document.getElementById("pw")
const copy = document.getElementById("copy")
const len = document.getElementById("length")
const num = document.getElementById("number")
const sym = document.getElementById("symbol")
const gen = document.getElementById("generate")

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*()_+="

function getLetter() {
    return letters[Math.floor(Math.random() * letters.length)];
}
function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    
    



    let password = "";
    let rand;
    for(let i = password.length; password.length<len.value; i++){
        rand = Math.floor(Math.random() * 3)
        if(rand==0){
            password += getLetter();
        }
        else if(rand==1 && num.checked){
            
                password += getNumber();
            
        }
        else if(rand==2 && sym.checked){
            
                password += getSymbol();
             
        }
        
        
    }
       

    document.getElementById("pw").value = password;
}

gen.addEventListener("click", generatePassword);

copy.addEventListener("click", () => {
    document.getElementById("pw").select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
});