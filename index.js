const hq = 42;

function distanceFromHqInBlocks(distanceInBlocks) {
  let blocks = Math.abs(hq - distanceInBlocks);
  return blocks;
}

function distanceFromHqInFeet(distanceInBlocks) {
  let blocks = Math.abs(hq - distanceInBlocks);
  let distanceInFeet = blocks * 264;
  return distanceInFeet;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs((start - end) * 264);
}

function calculatesFarePrice(start, end) {
  let feetTraveled = distanceTravelledInFeet(start, end);
  if (feetTraveled <= 400) {
    return 0;
  } else {
    if (feetTraveled > 400 && feetTraveled <= 2000) {
      return (feetTraveled - 400) * 0.02;
    } else {
      if (feetTraveled > 2000 && feetTraveled <= 2500) {
        return 25;
      } else {
        if (feetTraveled > 2500) {
          return "cannot travel that far";
        }
      }
    }
  }
}