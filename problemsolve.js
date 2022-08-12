// ----------------------

// problem 1 radianToDegree

// -------------------------

function radianToDegree(radian){
    if(typeof radian !=="number"){
        return "Enter Number"
    }
    else{
        const degree=radian * 57.2958;
        const toFixedDegree=degree.toFixed(2);
        const stringToParseFloart=parseFloat(toFixedDegree);
        return stringToParseFloart;
}
}
const result=radianToDegree(5);
console.log(result);



// -----------------------------------

// second problem isJavaScriptFile

// --------------------------------

function isJavaScriptFile(string){
    if(typeof string !=="string"){
        return "please enter String";
    }
    else{
        const extenSion=string.endsWith(".js");
        return extenSion;
    }
}
const string="isJavaScriptFile.js";
const result2=isJavaScriptFile(string);
console.log(result2)

// -------------------------

// third problem oilPrice

// -----------------------------------

function oilPrice(digel,pectol,octen){
    if(typeof digel !=="number" && typeof pectol !=="number" && typeof octen !=="number"){
        return "please enter number"
    }
    else{
        let digelCalc=digel * 114;
        let pectolCalc=pectol * 130;
        let octenCalc=octen * 135;
        let totalPrice=digelCalc + pectolCalc + octenCalc;
         return totalPrice;
    }
}
const result3= oilPrice(5,3,7);
console.log(result3);


// ------------------------

// four problem publicBusFare

// ------------------------------------ 

function publicBusFare(people){
    let busFare=people % 50;
    let microFare=busFare % 11;
    let publicBusCost=microFare * 250;
    return publicBusCost;
}
const result4=publicBusFare(65);
console.log(result4)

// ----------------------------

// problem five IsBestFriend

// -------------------------

const frinds1={
    name:"Jihad Hossen",
    friend:"rakib"
}
const frinds2={
    name:"rakib",
    friend:"Jihad Hossen"
}

function isBestFriend(fnd1,fnd2){
if(fnd1.name === fnd2.friend && fnd2.name === fnd1.friend){
    return true;

}
else{
    return false;
}
}

const result5=isBestFriend(frinds1,frinds2);
console.log(result5);