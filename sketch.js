const Engine= Engine.world;
const Bodies= Bodies.world;
const World= Matter.body;

var challenge1;
var forms;
var gameState=0;
var alarmClock1=createSprite(1150,560,30,30);
var alarmClock2=createSprite(270,170,30,30);
var alarmClock3=createSprite(895,300,30,30);
var alarmClock4=createSprite(1340,625,30,30);
var alarmClock5=createSprite(360,330,30,30);
var alarmClock6=createSprite(685,450,30,30);
var alarmClock7=createSprite(450,65,30,30);
var alarmClock8=createSprite(550,550,30,30);
function preload(){

}
function setup(){
createCanvas(1350,640);
form=new Form();
challenge1=new Challenge1()
}
function draw(){
background("white");
if(gameState===0){
    form.display();
}else if(gameState===1){
    challenge1.display();
}
}