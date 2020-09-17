
function duplicateLetters(string) {
  let array=string.split("");
  let obj={};
  let grtNum=1;
  for(let x of array){
      obj[x]=(obj[x] || 0) + 1
  }
  for(let y in obj){
      if(grtNum<obj[y]){
          grtNum=obj[y]  
      }
  }
  if(grtNum == 1){
      return false
  }else{
      return grtNum
  }}

export {
  duplicateLetters,
};
