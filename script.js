let education = document.getElementById('education');
let networth = document.getElementById('networth');
let skills = document.getElementsByClassName('skills');
let result = document.getElementById('result');
let money = document.getElementById('money');
   
function myFunction() {
    if (groomname.value === "") {
        console.log("Please, enter your grooms name")
    }
    if (money.value === "") {
        console.log("Please, enter starting bid")
    }
    var num1 = Number(document.getElementById('money').value);
    result *= num1

    const moveCommand = (education) => {
      let result;
      switch(education) {
        case 'Bachelor degree':
          result*= 1.5;
          break;
        case 'College degree':
          result*= 1.2;
          break;
        case 'High school degree':
          result*= 1.05;
          break;
        case 'Middle school degree':
          result*= 0.9;
          break;
      }
    }

    const moveCommand = (networth) => {
      let result; 
      switch(networth) {
        case 'More than 100,000$':
          result*= 2;
          break;
        case 'Between 50,000$ and 100,000$':
          result*= 1.5;
          break;
        case 'Less than 50,000$':
          result*= 1.2;
          break;
      }
    }

    const moveCommand = (skills) => {
      let result; 
      switch(skills) {
        case 'dombra':
          result+= 100;
          break;
        case 'cook':
          result+= 200;
          break;
        case 'character':
          result+= 150;
          break;
        case 'music':
          result+= 100;
          break;
      }
    }
   
    const moveCommand = (age) => {
      let result; 
      switch(age) {
        case 'young':
          result*= 1.5; 
          break;
        case 'middle':
          result*= 1.2;
          break;
        case 'old':
          result*= 0.95;
          break;
      }
    }

    const moveCommand = (reputation) => {
       let result;
       switch(reputation) {
         case 'parents':
           result*= 0.85;
           break; 
         case 'person':
           result*= 0.9;
           break; 
         case 'abouthim':
           result-= 200;
           break;
       }
    } 
    document.getElementById("calculate").addEventListener('click', myFunction);
} 