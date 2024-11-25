let c2forf2c 
c2forf2c = prompt('Choose c2f to convert Celsius to Fahrenheit or f2c to convert from Fahrenheit to Celsius');


while (c2forf2c.toLowerCase() !== "f2c" && c2forf2c.toLowerCase() !== "c2f") {
    c2forf2c = prompt('Choose c2f to convert Celsius to Fahrenheit or f2c to convert from Fahrenheit to Celsius');

}



if (c2forf2c == "c2f") {
   
    let confirmed = false; // A flag to track confirmation
    let c;
    while (!confirmed) { // Loop until the user confirms
        c = Number(prompt('Enter a degree in Celsius'));
        let ms = prompt(`The Celsius you entered is ${c}. Is that correct? (yes/no)`);
        if (ms.toLowerCase() == "yes") {
            confirmed = true; // Exit the loop when confirmed
            let answer = Number((c * 9/5) + 32 );
            Number(document.write('the answer is',Number(answer), ' fehrenheit'));
        } else  {
            alert("Let's try again.");
        }
        
    }
} else if (c2forf2c == "f2c") {
   
    let connfirmed = false;
    let f;
    while(!connfirmed){
    f = Number(prompt(' enter a number in fehrenheit '))
    
    let Ms = prompt(`The fehrenheit you entered is ${f}. Is that correct? (yes/no)`);
    if (Ms.toLowerCase ==  'yes') {
        connfirmed = true
        let fanswer = (f-32)*5/9
         Number( document.write( 'the answer is \t',Number(fanswer), ' celsuis' ) )


    }else {
        alert('try again')
    }


}}











