const num1 = Number(prompt ("Inserisci il primo numero"));
const num2 = Number(prompt ("Inserisci il secondo numero"));

if(num1 > num2){
    alert("Il numero più grande è " + num1);
}
else if(num2 > num1){
    alert("Il numero più grande è " + num2);
}
else{
    alert("I due numeri sono uguali");
}
