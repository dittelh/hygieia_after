
function openAnswer(id){

    var answer = document.getElementById("answer" + id);
    answer.classList.toggle("showAnswer");
    

    var img = document.getElementById("img" + id);
    if(answer.classList.contains("showAnswer")){
        img.src = "../assets/img/minus.svg";
    }else {
        img.src = "../assets/img/plus.svg";
    }
}