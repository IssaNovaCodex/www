function add(value){
    document.getElementById("result").value += value;
}

function calculate(){
    let display = document.getElementById("result").value;
    let answer = document.getElementById("answer");

    try{
        answer.value = eval(display);
    }
    catch{
        answer.value = "Error";
    }
}

function clearDisplay(){
    document.getElementById("result").value = "";
    document.getElementById("answer").value = "";
}