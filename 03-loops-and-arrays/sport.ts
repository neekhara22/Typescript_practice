let sport: string[]=["Golf","Cricket","Tennis","Swimming"];
/*
for(let i=0;i<sport.length;i++){
    console.log(sport[i]);
}
*/

//use of simplified for loop
for(let tempSport of sport){

    if(tempSport=="Cricket"){
        console.log(tempSport+" << My favourite!!");
    }
    else{
        console.log(tempSport);
    }
    
}