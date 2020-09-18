// You can use the function from the `Math` module.
function sqrt(numb){
  if(!numb) return false;
  return Math.sqrt(numb)
}

function power(val,power){
  if(!val && !power) return false;
  return val ** power
}
function round(val){
  if(!val) return false
  return Math.round(val)
}

// Don't change the exported names. 
export {
  sqrt,
  power,
  round,
};
