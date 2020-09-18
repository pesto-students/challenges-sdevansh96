
function limitMe(){
  return 5 * 10;
}

function limitHandler(limit){
  let count=0;
  return (fn)=>{
      if(count >=limit){
          return 'Limit exceed'
      }else{
          count+=1;
          return fn()
      }
  }
}
const limitFunctionCallCount = () => {
  let newFunct=limitHandler(3);
  console.log(newFunct(limitMe));
  console.log(newFunct(limitMe));
  console.log(newFunct(limitMe));
  console.log(newFunct(limitMe));
  console.log(newFunct(limitMe));
  console.log(newFunct(limitMe));
  console.log(newFunct(limitMe));
};

export {
  limitFunctionCallCount,
};
