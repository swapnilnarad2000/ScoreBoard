// alert('Connected');

let score_Player1 = 0;
let score_Player2 = 0;
let highScore = 5;
let isGameOver = false;

//update score
let score_p1 = () =>{
    score_Player1++;
    // console.log(score_Player1);
    scoreP1.innerText = score_Player1;
};
let score_p2 = () =>{
    score_Player2++;
    scoreP2.textContent = score_Player2;
}
let reset_p = ()=>{
    score_Player1 = 0;
    score_Player2 = 0;
    scoreP1.textContent = score_Player1;
    scoreP2.textContent = score_Player2;
    isGameOver = false;
    highScore = parseInt(highRecord.value);
}



//query selector for p1 button
let btnP1 = document.querySelector('#p1');
let btnP2 = document.querySelector('#p2');
let scoreP1 = document.querySelector('.scorep1');
let scoreP2 = document.querySelector('.scorep2');
let btnReset = document.querySelector('#reset');
let highRecord = document.querySelector('#highScore');
let deusE = document.querySelector('#deus');
let verdict = document.querySelector('.verdict');
//if high score is changes

let deus = ()=>{
    if(score_Player1 == score_Player2 && score_Player1 == highScore-1){
        // console.log(highScore);
        highScore+=1;
        verdict.textContent = "DUES";
    }
}
highRecord.addEventListener('change',()=>{
    // alert(highRecord.value); 
    highScore = parseInt(highRecord.value);
    verdict.textContent = "click reset to start over";
    
})
//if button is clicked == p1
btnP1.addEventListener('click',()=>{
    if(!isGameOver)
        score_p1()
    if(score_Player1 == highScore || score_Player2 == highScore){
        isGameOver = true;
    }
    if(deusE.checked){ 
        deus();
    }
    if(score_Player1 >= highScore){
        scoreP1.textContent = score_Player1;
        // alert("Player1  wins!!!!");
        scoreP1.classList.add('winner');
        scoreP2.classList.add('loser');
        winner = 'Player1'
        verdict.classList.add('back');
        verdict.textContent = 'Player 1 is your winner';
        isGameOver = true;
    }
})

//if button is clicked == p1
btnP2.addEventListener('click',()=>{
    if(!isGameOver)
        score_p2();
    if(score_Player2 == highScore || score_Player1 == highScore){
        isGameOver = true;
    }
    if(deusE.checked){ 
        deus();
    }
    if(score_Player2 >= highScore){
        scoreP2.textContent = score_Player2;
        // alert("Player2  wins!!!!");
        scoreP2.classList.add('winner');
        scoreP1.classList.add('loser');
        winner = 'Player2';
        verdict.classList.add('back');
        verdict.textContent = 'Player 2 is your winner';
        isGameOver = true;
    }
})



btnReset.addEventListener('click',()=>{
    reset_p();
    scoreP1.classList.remove('winner');
    scoreP2.classList.remove('loser');
    scoreP2.classList.remove('winner');
    scoreP1.classList.remove('loser');
    verdict.classList.remove('back');
    verdict.textContent = 'Click reset to start over';
    isGameOver = false;    
})