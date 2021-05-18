function convertFahrToCelsius(temp) {
  if(typeof(temp) === "number" || typeof(temp) === "string"){
    return ((Number(temp) - 32) * 5/9).toFixed(4);
  } else {
    if(Array.isArray(temp) === true){
      return `${JSON.stringify(temp)} is not a valid number but a/an array`;
    } else {
    return `${JSON.stringify(temp)} is not a valid number but a/an ${typeof(temp)}`;
    }
  }
}

function checkYuGiOh(n) {
  if(typeof(n) !== "number"){
     return `invalid parameter: ${JSON.stringify(n)}`;
  }
  let arrs = [];
  let i;
  for(i=1; i <= n; i++) {
    arrs.push(i);
  }
  arrs.forEach(function(arr){
    if(arr % 2 === 0 && arr % 3 === 0 && arr % 5 === 0){
      let val = arrs.indexOf(arr);
      arrs[val] = "Yu-Gi-Oh";
    } else if(arr % 2 === 0 && arr % 3 === 0){
      let val = arrs.indexOf(arr);
      arrs[val] = "Yu-Gi";
    } else if(arr % 2 === 0 && arr % 5 === 0){
      let val = arrs.indexOf(arr);
      arrs[val] = "Yu-Oh";
    } else if(arr % 3 === 0 && arr % 5 === 0){
      let val = arrs.indexOf(arr);
      arrs[val] = "Gi-Oh";
    } else if(arr % 2 === 0){
    let val = arrs.indexOf(arr);
    arrs[val] = "Yu";
   } else if(arr % 3 === 0){
    let val = arrs.indexOf(arr);
     arrs[val] = "Gi";
   }
    else if(arr % 5 === 0){
      let val = arrs.indexOf(arr);
      arrs[val] = "Oh";
    }
  })
  return arrs;
}





