class Challenge1{
    constructor(){
this.bedroom=loadImage("bedroom challenge1.jpg");

this.lazyBoyImage=loadImage("challenge1 lazy boy.png");
var lazyBoy=createSprite(300,380,30,30);
lazyBoy.addImage(this.lazyBoyImage);
lazyBoy.scale=0.5;
clock1 = new Clock(125,350,10,10)
clock2 = new Clock(125,350,10,10)
clock3 = new Clock(125,350,10,10)
clock4 = new Clock(125,350,10,10)
clock5 = new Clock(125,350,10,10)
clock6 = new Clock(125,350,10,10)
clock7 = new Clock(125,350,10,10)
clock8 = new Clock(125,350,10,10)


    }
    display(){
        background(this.bedroom);
       drawSprites();

       clock1.display();
       clock2.display();
       clock3.display();
       clock4.display();
       clock5.display();
       clock6.display();
       clock7.display();
       clock8.display();
       
       

    }

    
}


