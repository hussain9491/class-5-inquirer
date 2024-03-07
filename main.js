/*let PersonName: string = 'Hussain Ali';
console.log(PersonName);

let thing: string = 'watch';
console.log(thing);
//This line show single line comment
//thing is string and this is watch

let link:any = 'https://www.youtube.com/@codewitharibamemon';
console.log(link);
/* This our multi line comment
this youtube chennal name is code with areebamemon

let ATMcard: number = 83909367637;
console.log(ATMcard);

let isATMcard: boolean = true;*/
//import using from './module.js';
//console.log(using)
//import {file,folder,name} from "./module.js"
//console.log(file,folder,name);
//import {personName,gun,father,thing} from './module.js'
//console.log(personName,gun,father,thing);
/*import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt ([{

     name  :"personalName",
     type : "string",
     message : "Enter your personal Name!:"
      
     
     
}])
let give = await inquirer.prompt([{
     name  :"Age",
     type : "number",
     message : "enter your age:"
      
      

}])
  console.log( chalk.blue  ("welcome ! " +  answer.personalName + ' You are a nice Person' + " Insha Allah, in " + (60 - give.Age) + " years you will be 60 years old."));
  
  /*

  import inquirer from "inquirer";
  let answer = await inquirer.prompt({

      name : "Age",
     type:"number",
     message:"Enter your current age:"
     })
     console.log("Insha Allah, in " + (60 - answer.Age) + " years you will be 60 years old."  );
     */
import inquirer from "inquirer";
let father = await inquirer.prompt([{
        name: 'FatherName',
        type: "string",
        message: 'Enter your Father Name',
    }]);
let give = await inquirer.prompt([{
        name: "Age",
        type: "number",
        message: "enter your father Age",
    }]);
console.log("hello dear" + ' i  know your Father is a great Man ' + (110 - give.Age) + 'masha Allah long live your father');
