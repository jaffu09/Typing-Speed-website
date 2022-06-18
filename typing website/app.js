const setOfWords = ["my name is jafar i am B.com passout.", "fortifications on land, while Union ships attacked from the river. During the fight, a Confederate", " is a small town and the only built-up area in the municipality of Bolungarvíkurkaupstaður in the northwest of Iceland, located on the peninsula of the .", "Scouting, also known as the Scout Movement, is a worldwide youth movement employing the Scout method, a program of informal education with an emphasis on practical outdoor activities, including camping, woodcraft,"];

const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;
const playGame = ()=>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}
const endPlay = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);
   
    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);
    let speed = Math.floor((wordCount/ totalTime)*60);
    let finalMsg = `You typed at speed of ${speed} WPM`;
    finalMsg += compareWords(msg.innerText, totalStr);
    msg.innerText = finalMsg;
}
const compareWords = (str1,str2) =>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;
   
    words1.forEach(function(item,index){
        if(item == words2[index]){
            cnt++;
        }
    })
    let errorWords = (words1.length - cnt);
    return `${cnt} correct out of ${words1.length} words total number of error are ${errorWords}.`
    
}
const wordCounter = (str) => {
    let response = str.split(" ").length;
    
    return response;
}
btn.addEventListener('click', function () {
    if (this.innerText == 'Start') {
        typeWords.disabled = false;
        playGame();
    }else if(this.innerText == "Done"){
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})