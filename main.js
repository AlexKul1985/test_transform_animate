(function() {
  let arr = [8,5,1,3,4,6,2,7];
  
  function sortArrBubble(arr){
     for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
           if(arr[j] < arr[i]){
               let temp = arr[i];
               arr[i] = arr[j];
               arr[j] = temp;
           }
        }
     }

     return arr;
  }

//   console.log(sortArrBubble(arr));

})()
var  compute;
// function sum(a){
//    let s = 0;
//    compute  = function (v = undefined){
//       if(v){
//          s +=v;
//          return compute
//       }  
//       else{
//          return s;
//       }
//    }
//    compute(a);
//    Object.defineProperty(global,'compute',{
//       get:function(){
//          return s;
//       }
//    })
   

//    return compute;

// }

// console.log(sum(5)(6));
   
// let res = (a) => (s) => s ? res(a+s) : a; //short cart variant 

function res(a){
   let res1;
   let obj = {
      func:function(s){
         
         return s ? res(a+s) : a;
      }
   }
   let proxy = new Proxy(obj,{
      get(target,property){
         return a;
      }
   })
   res1 = proxy.func;
    console.log('FUNC ',proxy.func)
    return res1;
}
  
// console.log(res(2))

   

   function test(){
     
      if(test.config){
         console.log('OK')
      }
      else{
         console.log('No')
      }
   }
   test()
   test.config  = true;
   test()


   let a1 = [2,3,[4,5,['a',4,5,6],8,9]];



let arr1 = [1,3,4,5,6,7];
let iter = arr1[Symbol.iterator]();

// 
let aa = [];

// function convertInLineArray(arr){
//    if(typeof arr !== "object"){
//       aa.push(arr)
//    }
//    else{
//       for(let i = 0; i < arr.length; i++){
//          convertInLineArray(arr[i])
//       }
//    }
// }

function convertInLineArray(arr,i){
  
  if(!Array.isArray(arr[i])){
     
     aa.push(arr[i])
     convertInLineArray(arr,i+1)
  }
  else{
     convertInLineArray(arr[i],0)
  }
}


     






  
// let b = convertInLineArray(a1,0);
// let a = 255;
// a = a >> 6;
//  a = ~a;
//  a++;
 console.log(255 >> 7)
let a11 = 255;
let aar = [];
for(let i = 7; i <= 1; i--){
   a11 = a11 >> i
   aar.push(a11);
}
console.log(aar)

console.log(parseFloat(11/10));

      
      
  
      









