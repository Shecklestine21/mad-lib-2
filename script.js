document.getElementById("btn").addEventListener("click", pizzaOrder);

function pizzaOrder(){
    let word1 = document.getElementById("word1").value;
    let word2 = document.getElementById("word2").value;
    let word3 = document.getElementById("word3").value;
    let word4 = document.getElementById("word4").value;

    console.log(word1);
    console.log(word2);
    console.log(word3);
    console.log(word4);
    
    let greeting = `the building ${word1} was ${word2} and ${word3} and ${word4} and it was beautiful`;
document.getElementById("greeting").innerHTML = greeting;
}

