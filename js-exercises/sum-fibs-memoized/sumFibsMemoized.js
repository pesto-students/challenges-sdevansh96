function sumFibs(num) {
  let arr=[];
  let oddSum=0
  for(let i =0;i<=num;i++){
      if(i == 0|| i ==1){
          arr.push(i)
      }else{
          let numb=arr[i-2] + arr[i-1];
          if(numb >num){
              return oddSum
          }
          arr.push(numb);
          if(numb % 2 == 0){
              oddSum+=numb  
          }
      }
  }
  return oddSum
}

function cacheFunction(fn) {
    let memoValues={};
    return (value)=>{
    if(value in memoValues){
        console.log("memosied")
        return memoValues[value]
    }else{
        console.log("not memosied")
       return memoValues[value]=fn(value)
    }
    }
}

export { sumFibs, cacheFunction };
