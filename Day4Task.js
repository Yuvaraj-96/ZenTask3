
const fetch = require("node-fetch");
var obj1 = { name: "Person 1", age:5 , Year:2018};
var obj2 = { age:5, name: "Person 1",  Year:2020};
//Task 1
for(let x in obj1)
{
    for(let y in obj2)
    {
        if(x == y)
        {
            if(obj1[x] == obj2[y])
        {
            console.log(`Values are same in the json files Value is ${obj1[x]} and Key is ${x}.`)

        }else{
            console.log(`Keys are same but values are not same. `);
        }

        }else{
           // console.log(`Keys are not same. `);
            continue;
        }
    }
}
//Task 3
fetch('https://restcountries.eu/rest/v2/all').then(response => response.json()).then(data => outPut(data)).catch(error => console.log("Error:", error.message));

function outPut(data) {
//let count =0;
    for(let x of data)
    {
        //if(count<=50){
        console.log(`Name ${x.name};`);
        console.log(`Region ${x.region};`);
        console.log(`Sub Region ${x.subregion};`);
        console.log(`Population ${x.population};`); 
        console.log(`Flag ${x.flag};`);        
        //count++;
        //}


    }
  
}

