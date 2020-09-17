
function lastIndexOf(value,arr) {
  let lastIndex=-1;
  for(let i=0;i<arr.length;i++){
      if(value == arr[i]){
          lastIndex =i
      }
  }
  return lastIndex;
}

export {
  lastIndexOf,
};
