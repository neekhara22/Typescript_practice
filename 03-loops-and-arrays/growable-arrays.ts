let sportsTwo: string[]=["Golf","Cricket","Tennis","Swimming"];

sportsTwo.push("Baseball");
sportsTwo.push("Football");

for(let tempSport of sportsTwo){

    if(tempSport=="Cricket"){
        console.log(tempSport+" << My favourite!!");
    }
    else{
        console.log(tempSport);
    }
    
}