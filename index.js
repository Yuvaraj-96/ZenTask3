//Using for loop 

const valueArray = [{FristName:"Yuvi" ,LastName:"Raj", Age:25 ,isWorkingHard:true},{FristName:"Raj" ,LastName:"Yuvi", Age:5 ,isWorkingHard:false}];

for(var i=0;i<valueArray.length;i++)
{
    var itrate1 = valueArray[i];
    
        console.log(` ${valueArray[i].FristName}   ${valueArray[i].LastName}`);
   
    
}

//using for in loop
var Details = {FristName:"Yuvi" ,LastName:"Raj", Age:25 ,isWorkingHard:true};

for(let x in Details)
{
    console.log(`${x} is ${Details[x]}`);
}

//using for of loop
var mycars = [{name:'Audi', color:"Red", preice:123456, isV8:true}, {name:'BMW', color:"Blue", preice:14856, isV8:true }];

for (var car of mycars) 
{
console.log(`Name of the car ${car.name} color ${car.color}.`);
}


//using for each loop
var result = [ {id:"123", English:89, Math:90, isPass:true}, {id:"03", English:67, Math:100, isPass:false} ];

result.forEach(function(value) {
    console.log(`Id ${value.id} and Result ${value.isPass}.`);
});

