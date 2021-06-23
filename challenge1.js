class Challenge1{
    constructor(){
this.bedroom=loadImage("bedroom challenge1.jpg");

this.lazyBoyImage=loadImage("challenge1 lazy boy.png");
var lazyBoy=createSprite(300,380,30,30);
lazyBoy.addImage(this.lazyBoyImage);
lazyBoy.scale=0.5;

this.alarmImage=loadImage("alarm clock.png");
alarmClock1.addImage(this.alarmImage);
alarmClock2.addImage(this.alarmImage);
alarmClock3.addImage(this.alarmImage);
alarmClock4.addImage(this.alarmImage);
alarmClock5.addImage(this.alarmImage);
alarmClock6.addImage(this.alarmImage);
alarmClock7.addImage(this.alarmImage);
alarmClock8.addImage(this.alarmImage);
alarmClock1.scale=0.02;
alarmClock2.scale=0.02;
alarmClock3.scale=0.02;
alarmClock4.scale=0.02;
alarmClock5.scale=0.02;
alarmClock6.scale=0.02;
alarmClock7.scale=0.02;
alarmClock8.scale=0.02;
    }
    display(){
        background(this.bedroom);
       drawSprites();
       if(mousePressedOver(alarmClock1)){
           console.log("works")
alarmClock1.x=625;
alarmClock1.y=320;
alarmClock1.scale=0.6;
 }
    }
}