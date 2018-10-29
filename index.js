// Code your solution here:
function driversWithRevenueOver(drivers,revenue){
  let increasedRevenueDrivers = drivers.filter(function(driver){ return driver["revenue"]>revenue;});
  return increasedRevenueDrivers;
}

function driverNamesWithRevenueOver(drivers,revenue){
  let increasedRevenueDrivers = driversWithRevenueOver(drivers,revenue);
  let namesOfDrivers = increasedRevenueDrivers.map(function(driver){return driver["name"];});
  return namesOfDrivers;
}

function exactMatch(drivers,driverAttr){
  let matchingDrivers = drivers.filter(function(driver){ return driver[`${Object.keys(driverAttr)[0]}`] === driverAttr[Object.keys(driverAttr)[0]];})
  return matchingDrivers;
}

function exactMatchToList(drivers, driverAttr){
    let matchingDrivers = exactMatch(drivers,driverAttr);
    let namesArr = matchingDrivers.map(function(driver){return driver["name"];});
    return namesArr;
}
