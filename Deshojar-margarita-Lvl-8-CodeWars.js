function howMuchILoveYou(nbPetals) {
  let myPetals = ['I love you', 'a little','a lot', 'passionately', 'madly', 'not at all'];

  if (nbPetals <= 6) {
     return myPetals[nbPetals - 1];
  } else if (nbPetals > 6) {
    
    let myIndex = nbPetals % 6;

    if (myIndex === 0) {
      return myPetals[5];
    } else {
    return myPetals[myIndex - 1];
    }
  } 
}

howMuchILoveYou(34);