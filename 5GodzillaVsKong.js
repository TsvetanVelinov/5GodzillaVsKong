function godzillaVsKong (input){

    let budgetForMovie = Number(input[0]);
    let people = Number(input[1]);
    let priceForKits = Number(input[2]);

    let decorPrice = (budgetForMovie * 0.1);

    if (people > 150){

        priceForKits=priceForKits*0.9;
    } 

    let totalCost = people * priceForKits;
    let differenceCost = budgetForMovie - (totalCost+decorPrice);

    if (budgetForMovie > totalCost){

        console.log("Action!");
        console.log(`Wingard starts filming with ${(differenceCost).toFixed(2)} leva left.`);
    } else {
        
        console.log("Not enough money!");
        console.log(`Wingard needs ${Math.abs(differenceCost).toFixed(2)} leva more.`);
    }

}

godzillaVsKong (["20000","120","55.5"])
godzillaVsKong (["15437.62","186","57.99"])
godzillaVsKong (["9587.88","222","55.68"])


