//solution 1
function distanceFromHqInBlocks(pickUp){
    const hq = 42;
    const blocks = Math.abs(hq - pickUp);
return blocks;
}
 
//solution 2

function distanceFromHqInFeet(pickUp) {
    return distanceFromHqInBlocks(pickUp) *264;
}

//solution 3

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start-destination) *264;
  }

  //solution 4
  function calculatesFarePrice(start, destination) {
   const chargable = distanceTravelledInFeet(start, destination) - 400;
  if(distanceTravelledInFeet(start, destination) <= 400) {
   return 0;
  } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <=2000)
  {
    return (distanceTravelledInFeet(start, destination) - 400) *0.02;

  } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <=2500)
  {
    return 25;

} else if (distanceTravelledInFeet(start, destination) > 2500) 
{
 return 'cannot travel that far';
}
  }
  const calculatesFarePriceReturn = calculatesFarePrice();


