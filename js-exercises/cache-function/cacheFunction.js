/*************** Lets assume that the caclution took alot of time
 */function numbSqr(a) {
  return a * a;
}

function cacheFunction(fn) {
    let obj = {};
    return (val) => {
        if (obj[val]) {
            console.log("memosied value")
            return obj[val];
        }else{
            console.log("function ran")
           return obj[val]=fn(val);
        }
    }
}

function cacheFunction() {
let newFunct=cacheFunction(numbSqr);
newFunct(3);
newFunct(3);
newFunct(5);
newFunct(8);
newFunct(5);
newFunct(8);

}

export {
  cacheFunction,
};
