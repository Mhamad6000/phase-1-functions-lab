// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  if (someValue > 42) {
    return someValue - 42;
  } else {
    return 42 - someValue;
  }
}
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}
function distanceTravelledInFeet(num1, num2) {
  if (num2 > num1) {
    return (num2 - num1) * 264;
  } else {
    return (num1 - num2) * 264;
  }
}
function calculatesFarePrice(start, destination) {
  if (distanceFromHqInFeet(destination) - distanceFromHqInFeet(start) <= 400) {
    return 0;
  } else if (
    distanceFromHqInFeet(destination) - distanceFromHqInFeet(start) > 400 &&
    distanceFromHqInFeet(destination) - distanceFromHqInFeet(start) < 2000
  ) {
    return (
      (distanceFromHqInFeet(destination) - distanceFromHqInFeet(start) - 400) *
      0.02
    );
  } else if (
    distanceFromHqInFeet(destination) - distanceFromHqInFeet(start) > 2000 &&
    distanceFromHqInFeet(destination) - distanceFromHqInFeet(start) < 2500
  ) {
    return 25;
  } else if (
    distanceFromHqInFeet(destination) - distanceFromHqInFeet(start) >
    2500
  ) {
    return "cannot travel that far";
  }
}
