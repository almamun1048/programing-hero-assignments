//1.radianToDegree
function radianToDegree(radian){
    if(typeof radian !== "number"){
        return "Please Enter Valid input";
    }
    const pi = 3.1416;
    let degree = radian*180/pi ;
    degree = parseFloat(degree.toFixed(2));
    return degree;
}

//2.isJavaScriptFile
function isJavaScriptFile(fileName){
    if(typeof fileName !== "string"){
        return "Please Enter Valid input";
    }
    isJsFile = fileName.endsWith(".js");
    return isJsFile;
}

//3.oilPrice
function oilPrice(quantityOfDisel,quantityOfPetrol,quantityOfOcten){
    if(typeof quantityOfDisel !== "number" || typeof quantityOfPetrol !== "number" || typeof quantityOfOcten !== "number") {
        return "Please Enter Valid input";
    }
    const diselPrice = 114 , petrolPrice = 130 , octenPrice = 135 ;

    let totalPrice = (diselPrice * quantityOfDisel) + (petrolPrice * quantityOfPetrol) + (octenPrice * quantityOfOcten);
    return totalPrice;
}

//4.publicBusFare
function publicBusFare(totalPassengers){
    if(typeof totalPassengers !== "number"){
        return "Please Enter Valid input";
    }
    const ticketPrice = 250;

    if(totalPassengers > 50){
        let remainPassengers = totalPassengers % 50 ;
        if(remainPassengers > 11){
            let publicBusPassengers = remainPassengers % 11 ;
            return publicBusPassengers * ticketPrice ;
        }
        else if(remainPassengers === 11){
            return 0;
        }
        else{
            return remainPassengers * ticketPrice ;
        }
    }
    else if(totalPassengers === 50){
        return 0;
    }
    else{
        if(totalPassengers > 11){
            let publicBusPassengers = totalPassengers % 11 ;
            return publicBusPassengers * ticketPrice ;
        }
        else if(totalPassengers === 11){
            return 0;
        }
        else{
            return totalPassengers * ticketPrice ;
        }
    }

}

//5.isBestFriend
function isBestFriend(firstFriend,secondFriend){
    if(typeof firstFriend !== "object" || typeof secondFriend !== "object"){
        return "Please Enter Valid input";
    }

    if(firstFriend.name === secondFriend.friend && secondFriend.name === firstFriend.friend){
        return true;
    }
    else{
        return false;
    }
}
