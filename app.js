function getNumber(num){
    var result= document.getElementById("result")
    result.value += num
}
function clearResult(){
    var result= document.getElementById("result");
    result.value = ""
}
function Result(){
    var result= document.getElementById("result");
    result.value = eval(result.value)
}
function square(){
    var result= document.getElementById("result");
    result.value = result.value*result.value
}
function root(){
    var result= document.getElementById("result");
    result.value=Math.sqrt(result.value)
}
function sin(){
    var result=document.getElementById("result")
    result.value=Math.sin(result.value)
}
function sininv(){
    var result=document.getElementById("result")
    result.value=1/Math.sin(result.value)
}
function log(){
    var result=document.getElementById("result")
    result.value=Math.log(result.value)
}
function back(){
    var result=document.getElementById("result")
    result.value=result.value.slice(0,-1)
}
