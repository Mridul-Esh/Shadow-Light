

let result = document.getElementById("result");


// this function add all items in input tag
function insertValue (value){
    result.value += value;
}

//this function clear all items in input tag 
function clearResult () {
    result.value = "";
}

//this function delete items in input tag 
function deleteResult() {
    result.value = result.value.slice(0, -1);
}

//this function calculate 
function claculate () {
    try{
        result.value = eval(result.value);
    }
    catch (error) {
        result.value= "error";
    }
}