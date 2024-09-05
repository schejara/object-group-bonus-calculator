const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  let bonusPercent = 0;
  // let bonusAmt = 0;
  let totalComp = 0;
  let totalBonus = 0;

  // for(let key in employee){
     // console.log('this is key', key);
      console.log('employee rating is    ', employee.reviewRating);
    if(employee.employeeNumber.length == 4) {
      bonusPercent = 0.05
    } 
    
    if(employee.reviewRating === 5) {
        bonusPercent += 0.1;
     } 
    
    if(employee.reviewRating == 4){
        bonusPercent += 0.06;
    } 
    
    if(employee.reviewRating == 3){
        bonusPercent += 0.04;
    } 
    
    if(+employee.annualSalary > 65000){
      bonusPercent -= 0.01;
    } 
    
   if(bonusPercent > 0.13) {
      bonusPercent = 0.13
    } 
    
   if(bonusPercent < 0) {
      bonusPercent = 0;
    }

    totalBonus = bonusPercent * +employee.annualSalary;
    totalComp = +employee.annualSalary + totalBonus;

  return {
    name: employee.name,
    bonusPercentage: bonusPercent,
    totalCompensation: totalComp,
    totalBonus: totalBonus
  }
}


console.log(calculateIndividualEmployeeBonus({
  name: 'Mayella',
  employeeNumber: '89068',
  annualSalary: '35000',
  reviewRating: 1
}));

console.log(calculateIndividualEmployeeBonus({
  name: 'Atticus',
  employeeNumber: '2405',
  annualSalary: '47000',
  reviewRating: 3
}));

console.log(calculateIndividualEmployeeBonus({
  name: 'Jem',
  employeeNumber: '62347',
  annualSalary: '63500',
  reviewRating: 4
}));

console.log(calculateIndividualEmployeeBonus({
  name: 'Scout',
  employeeNumber: '6243',
  annualSalary: '74750',
  reviewRating: 5
}));

console.log(calculateIndividualEmployeeBonus({
  name: 'Robert',
  employeeNumber: '26835',
  annualSalary: '66000',
  reviewRating: 1
}));



function calculateCompanyEmployeeBonus(employees) {
  let companyBonus = [];
  for(let employee of employees) {
   // console.log(employee)
    companyBonus.push(calculateIndividualEmployeeBonus(employee));
  }
  return companyBonus;
}

console.log(calculateCompanyEmployeeBonus(employees));

