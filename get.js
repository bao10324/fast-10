let title = document.getElementById("titleRandom")
let addWord = document.getElementById("inputWord");
let Word=["run","dog","fish","pork","shark","animal","motorbike","pen","tsunami","cat","rocodile","game","learn"]
let score = document.getElementById('score');
let countTime = document.getElementById("timer");
let randomWord = Word[Math.floor(Math.random()*Word.length)];
title.innerHTML = randomWord;
let time =10;
let point = 0;
let countDown = setInterval(two,1000);


function one (){
    score.innerHTML = "Score = " + point;
    randomWord = Word[Math.floor(Math.random()*Word.length)]
    title.innerHTML = randomWord;
    addWord.value = '';
    countDown;
    time = 10
    return countDown;
}
   
addWord.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        // Do work
        if(inputWord.value === randomWord) {
            point++;
            one();
        }
        else{
            one();
        }
    }
});
function two(){
    time--;
    countTime.innerHTML= "Time : " + time;
    
    if (time <= 0){
        
       one();
    }
 }




