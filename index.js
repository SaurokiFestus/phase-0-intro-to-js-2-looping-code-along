// Code your solutions in this file
// for (let age = 30; age < 40; age ++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }

const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts){
//     for (let i = 0; i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow `);
//         debugger;
//     }
//     return gifts;
// }

// wrapGifts(gifts);

function writeCards(stringName, eventName){
    let thankYou = []
    for(let i = 0; i < stringName.length; i++){
        thankYou.push(`Thank you, ${stringName[i]}, for the wonderful ${eventName} gift!`)
    }
    return thankYou;
}

function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }
