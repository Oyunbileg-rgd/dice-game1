//  тоглогчийн  ээлжийг хадгалах хувьсагч нэгдүнээр тоглогчийг 0 хоёрдугаар тоглогчийг 1 гэж тэмдэглэнэ
var activeplayer = 1;
// тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var score=[0, 0];
// тоглогчийн ээлжиндээ цуглуулж байгаа оноогоо хадгалах хувьсагч
var roundscore = 0;
//шоо аль талаараа буусныг хадгалах хувьсагч 1-6ийн хоорогд энэ хувьсагчид санамсаргүй хадгалж өгнө
// var diceNumber = Math.floor(Math.random()*6)+1;
window.document.getElementById('score-0').textContent="0";
document.getElementById('score-1').textContent="0";
document.getElementById('current-0').textContent="0";
document.getElementById('current-1').textContent="0";
var diceDom=document.querySelector('.dice');
diceDom.style.display="none";
document.querySelector('.btn-roll').addEventListener('click', function(){
    var diceNumber=Math.floor(Math.random()*6)+1;
    diceDom.style.display='block';
    diceDom.src='dice-'+diceNumber+'.png';
})