let question=document.getElementsByClassName('question');
let answer=document.getElementsByClassName('answer');


for (let i=0; i < question.length; i++){

    question[i].addEventListener('click',drop);

    function drop() {
        question[i].classList.toggle('active');
        if (answer[i].style.display != 'block') {

            answer[i].style.display = 'block'

        }
        else{

            answer[i].style.display = 'none'
        }
    }
}
