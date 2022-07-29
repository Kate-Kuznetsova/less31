/* function name (){      //класична функція
    bodyOfTheFunction
}
name()

let name = function (){  // функціональній вираз
   bodyOfTheFunction
};
name()

let name = (arg1, arg2, arg3,...argN) => expression; // стрілкова функція

let name = (arg1, arg2) => {   // ,багаторядкова стрілкова функція
   expression;
   return expression;
}
*/

btncalcArguments.onclick = function(){
    outputcalcArguments.value = calcArguments(inputCalcArguments.value)
}

let calcArguments = enter => enter.length;

btnNumberСomparison.onclick = function(){
    outputNumberСomparison.value = numberСomparison(inputNumberСomparison1.value, inputNumberСomparison2.value)
}

function numberСomparison(numb1, numb2) {

    if(numb1<numb2){
        var result = ('-1');
    } 
    else if(numb1>numb2){
        var result = ('1');
    } 
    else if(numb1=numb2){
        var result = ('0');
    } 
    return result;
}
numberСomparison();



btnFactorial.onclick = function(){
    outputFactorial.value = factorial(inputFactorial.value)
}

function factorial(n){
    var result = 1;
    while(n){
        result *= n--;
    }
    return result;
}
factorial();



btnCombine.onclick = function(){
    outputCombine.value = combine(inputCombine1.value, inputCombine2.value, inputCombine3.value)
}

function combine(numb1, numb2, numb3){
    var sum = (numb1 + numb2 + numb3);
    return sum;
}
combine();


btn.onclick = function(){
    output.value = square(input1.value, input2.value)
}

function square(width,length){
    
    if (width>0 && length>0){
        var calculate =(width*length);
    }

    else if (width<=0){
        var calculate =(length*length);
    }

    else if (length<=0){
        var calculate =(width*width);
    }
    return calculate;
}
square();