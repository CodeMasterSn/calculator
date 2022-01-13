let result = document.getElementById('inpuText');
console.log(result)

/* affiche un nombre dans l'écran pour chaque chiffre saisie */
let calculator = function calcul (number){
    result.value +=number;
}
console.log(calculator)

/* fonction egal */
let ResultEqual = function equal () {
    try{
        result.value = eval(result.value);
    }catch(error){
        alert('Enter the valid Input')
    }
}
console.log(ResultEqual)

/* fonction clear ou effacer tout */
function clr(){
    result.value = " ";
}
console.log(clr)

/* fonction effacer chiffre après chiffre */
function deleteNumber () {
    result.value = result.value.slice(0, -1);
}
console.log(deleteNumber)

/* dark mode */
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    //change the theme of the website
    document.body.classList.toggle('dark');
    document.body.classList.toggle('')
});