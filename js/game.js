class Game{
    constructor(){}

    display(){
        background(sky);

        image(crustImg,0,500,displayWidth*3,2100);
        image(lithosphereImg,0,2600,displayWidth,900);
        image(astenosphereImg,0,3500,displayWidth*3,3000);
        image(mantleImg,0,6500,displayWidth*3,81000);
        image(outercoreImg,0,87500,displayWidth*3,63000);
        image(innercoreImg,0,150000,displayWidth*3,39000);
        image(outercoreImg,0,189000,displayWidth*3,63000);
      
        fill(48,3,3);
        rect(camera.position.x-110,500,80,player.distance+200);

        
        max_Engine-=10/state1.enginePower.value();
        if(max_Engine>40)
         fill(0,255,0)
        else
         fill(255,0,0);

        rect(camera.position.x-20,camera.position.y-300,max_Engine,30);
        

        
        if(max_Boost>0&&max_Boost<70){
         fill(255,0,0);
         rect(camera.position.x+displayWidth/3+40,camera.position.y-20,30,-(max_Boost));
        }
        
        else if(max_Boost>70){
         fill(0,255,0);
         rect(camera.position.x+displayWidth/3+40,camera.position.y-20,30,-(max_Boost));
        }


        if(player.distance<2100){
         fill(0);
         textSize(34);
         textStyle(BOLD);
         textFont('Showcard Gothlic');
         text("CRUST",0,camera.position.y+displayHeight/3);

         player.distance+=7;
      }
      
      else if(player.distance>2099&&player.distance<3000){
        fill(0);
        textSize(34);
        textStyle(BOLD);
        textFont('Showcard Gothlic');
        text("LITHOSPHERE",0,camera.position.y+displayHeight/3);

        player.distance+=7;
      }
      
      else if(player.distance>2999&&player.distance<6000){
        fill(0);
        textSize(34);
        textStyle(BOLD);
        textFont('Showcard Gothlic');
        text("ASTHENOSPHERE",0,camera.position.y+displayHeight/3);  

        player.distance+=6;
      }
      
      else if(player.distance>5999&&player.distance<87000){
        fill(0);
        textSize(34);
        textStyle(BOLD);
        textFont('Showcard Gothlic');
        text("MANTLE",0,camera.position.y+displayHeight/3);

        player.distance+=8;
      }
      
      else if(player.distance>86999&&player.distance<150000){
        fill(0);
        textSize(34);
        textStyle(BOLD);
        textFont('Showcard Gothlic');
        text("OUTER CORE",0,camera.position.y+displayHeight/3);  

        player.distance+=9;
      }
      
      else if(player.distance>149999&&player.distance<172500){
        fill(0);
        textSize(34);
        textStyle(BOLD);
        textFont('Showcard Gothlic');
        text("INNER CORE",0,camera.position.y+displayHeight/3); 

        player.distance+=10;
    }
    
     else if(player.distance>172499&&player.distance<195000){
        fill(0);
        textSize(34);
        textStyle(BOLD);
        textFont('Showcard Gothlic');
        text("INNER CORE",0,camera.position.y+displayHeight/3); 

        player.distance+=6;
    }
    
     else if(player.distance>194999&&player.distance<258000){
      fill(0);
      textSize(34);
      textStyle(BOLD);
      textFont('Showcard Gothlic');
      text("OUTER CORE",0,camera.position.y+displayHeight/3); 

      player.distance+=8;
  }
}
    control(){

    push();
     translate(displayWidth/2-70,player.distance+560);
     angleMode(DEGREES);
     rotate(mouseX);
     imageMode(CENTER);
     image(gun,0,0,50,100);
    pop();

    if(keyIsDown(37)){
        push();
        translate(displayWidth/4+100,300+player.distance);
        angleMode(DEGREES);
        rotate(60);
        image(character,30,-100);
        camera.position.x = displayWidth/2;
        camera.position.y = 450+player.distance;
        pop();
    }
    
    else if(keyIsDown(39)){
        push();
        translate(displayWidth/4-10,600+player.distance);
        angleMode(DEGREES);
        rotate(0);
        image(character,30,-100);
        camera.position.x = displayWidth/2;
        camera.position.y = 450+player.distance;
        pop();
    }
    
    else{
        push();
        translate(displayWidth/4,450+player.distance);
        angleMode(DEGREES);
        rotate(30);
        image(character,30,-100);
        camera.position.x = displayWidth/2;
        camera.position.y = 450+player.distance;
        pop();
    }

    if(keyIsDown(32)&&max_Boost>40){
      player.distance+=8;
    }

    if(keyIsDown(32)&&max_Boost>-10){
      max_Boost-=10;
    }
    }
}