// тоглоомын бүх газар хэрэглэгдэх хувьсагч
var activeplayer, score, roundscore;
var diceDom=document.querySelector('.dice');
// тоглоомыг эхлүүлэх
initgame();
function initgame(){
        //  тоглогчийн  ээлжийг хадгалах хувьсагч нэгдүнээр тоглогчийг 0 хоёрдугаар тоглогчийг 1 гэж тэмдэглэнэ
     activeplayer = 0;
    // тоглогчдын цуглуулсан оноог хадгалах хувьсагч
     score=[0, 0];
    // тоглогчийн ээлжиндээ цуглуулж байгаа оноогоо хадгалах хувьсагч
     roundscore = 0;
    //шоо аль талаараа буусныг хадгалах хувьсагч 1-6ийн хооронд энэ хувьсагчид санамсаргүй хадгалж өгнө
    // var diceNumber = Math.floor(Math.random()*6)+1;
    window.document.getElementById('score-0').textContent="0";
    document.getElementById('score-1').textContent="0";
    document.getElementById('current-0').textContent="0";
    document.getElementById('current-1').textContent="0";
    document.getElementById('name-0').textContent='Player 1'
    document.getElementById('name-1').textContent='Player 2'
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')

    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')

    document.querySelector('.player-0-panel').classList.add('active')
    diceDom.style.display="none";
}



// шоог шидэх эвент листенер
document.querySelector('.btn-roll').addEventListener('click', function(){
 // 1-6-ийн хооронд санамсаргүй тоо гаргаж ирнэ    
    var diceNumber=Math.floor(Math.random()*6)+1;
    // шооны зургыг вэб дээр гаргаж ирнэ
    diceDom.style.display='block';
    // санамсаргүй буусан тоонд тохирох зургыг вэб дээр харуулна
    diceDom.src='dice-'+diceNumber+'.png';
    // буусан тоо 1-ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ
    if(diceNumber!==1){
        // 1--ээс ялгаатай тоо буусан тул буусан тоог тоглогчид нэмж өнгө
        roundscore=roundscore+diceNumber;
        document.getElementById('current-'+ activeplayer).textContent=roundscore;
    }
    else{
         // 1 буусан тул тоглогчийн ээлжийг солино. тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно
         switchnextPlayer();
    }
   
    //
})

// hold товчны эвент листенер
document.querySelector('.btn-hold').addEventListener('click',function(){
    //  уг тоглогчийн цуглуулсан ээлжний оноог глобаль оноон нь  дээр нэмж өгнө
    score[activeplayer]=score[activeplayer]+roundscore;
    // дэлгэц дээр оноог нь өөрчилнө
    document.getElementById('score-' + activeplayer).textContent=score[activeplayer];
    // хожсон эсэхийг шалгах 
    if(score[activeplayer]>=10){
        // нэрнийхэн оронд ялагч гэж гаргана
        document.getElementById('name-' + activeplayer).textContent='Winner!!!'
        document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner')
        document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active')
    } else{    
    // тоглогчийн ээлжийг солино
    switchnextPlayer();
    }
})

// энэ функц нь тоглох ээлжийг дараачийн тоглогч руу шилжүүлдэг
function switchnextPlayer (){
 // тоглогчийн ээлжийг солино
    roundscore=0;
    document.getElementById('current-'+ activeplayer).textContent=0;
    //   ээлж солих хэрэв идэвхтэй тоглтгч 0 байх юм бол 1 болгоно үгүй бол 0 болгоно
    activeplayer==0 ? (activeplayer=1) : (activeplayer=0);
    //  улаан цэгийг шилжүүлэх
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // шоог түр алга болгоно
    diceDom.style.display="none";
}
// new game буюу тоглоомыг шинээр эхлүүлэх товчны эвент листенер
document.querySelector('.btn-new').addEventListener('click', initgame)