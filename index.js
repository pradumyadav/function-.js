



// function fac(){
// let num =6
// let fac =1
// for(num; num>=1;num--){
//     fac = fac * num;
//     console.log(fac);
// }
// }
// function one(){
//     let one=8
//     for(one; one>=1;one--){
//         console.log(one);
//     }
// }
Abc();
        // const Abc = function(){
        //    let value = 20;
        // console.log(value);
        //     }
            const greet =  function(name){
                         return function(m){
                            console.log(`Hi!! ${name}, ${m}`);
                            }
                            }
                            const greet_message = greet('EA19');
                            greet_message("Welcome To PrepBytes")

