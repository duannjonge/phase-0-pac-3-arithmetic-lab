
 function add(a,b) {

    return a+b ;
 }

 function subtract(a,b){
   return a-b;
 }

 function multiply(a,b){

   return a*b;

 }

 function divide(a,b){

   return a/b;
 }
 function increment(n){

return (n+=1)

 }
 function decrement(n){

  return (n-=1)
 }

 function makeInt(n){

  return parseInt(n,10)
 }

 function preserveDecimal(n){

  return parseFloat(n,10);
 }

 function preserveDecimal(n) {
  const parsed = parseFloat(n);
  if (isNaN(parsed)) {
    return NaN;
  } else {
    return parsed;
  }
}


 add (2,3);
 subtract (3,2);
 multiply (3,2);
 divide ();