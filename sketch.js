var startBackgroundImg, startBackgroundImg2, sky, character, book, gun;
var form, state1, state, name, database, player, game;
var gamestate = 0;
var distanceTravelled = 0;
var time = 0;
var max_Boost = 200;
var max_Engine = 200;
var crustImg, lithosphereImg, astenosphereImg, mantleImg, outercoreImg, innercoreImg;
var volcanoZone, no, eruption0, eruption1, eruption2, eruption3, eruption4;
var amethystImg, coalImg, diamondImg, emeraldImg, goldImg, ironImg, rubyImg, sapphireImg;
var amethyst = [];
var coal = [];
var iron = [];
var gold = [];
var gold = [];
var amethyst = [];
var sapphire = [];
var ruby = [];
var emerald = [];
var diamond = [];
var isImg = true;
var randCoal;
var randIron;
var randGold;
var randAmethystSapphire;
var stormZone;
var smiley, danger;
var playerInfo = [];
var playerScore, playerName;
var isVeryHighlyProneToCyclones, isHighlyProneToCyclones,isModeratelyProneToCyclones,isLessProneToCyclones;

function preload(){
  frameRate(60);
  startBackgroundImg = loadImage("images/volcano.jpg");
  startBackgroundImg2 = loadImage("images/hurricane.jpg");

  crustImg = loadImage("images/crust.jpg");
  lithosphereImg = loadImage("images/lithosphere.jpg");
  astenosphereImg = loadImage("images/astenosphere.jpg");
  mantleImg = loadImage("images/mantle.jpg");
  outercoreImg = loadImage("images/outercore.jpg");
  innercoreImg = loadImage("images/innercore.jpg");

  sky = loadImage("images/sky.jpg");
  character = loadImage("images/character.png");
  book = loadImage("images/book.png");
  gun = loadImage("images/gun.png");

  no = loadImage("images/no.png");
  eruption0 = loadImage("images/eruption0.png");
  eruption1 = loadImage("images/eruption1.png");
  eruption2 = loadImage("images/eruption2.png");
  eruption3 = loadImage("images/eruption3.png");
  eruption4 = loadImage("images/eruption4.png");
  smiley = loadImage("images/smiley.png");
  danger = loadImage("images/danger.png");

  amethystImg = loadImage("images/amethyst.png");
  coalImg = loadImage("images/coal.png");
  diamondImg = loadImage("images/diamond.png");
  emeraldImg = loadImage("images/emerald.png");
  goldImg = loadImage("images/gold.png");
  ironImg = loadImage("images/iron.png");
  rubyImg = loadImage("images/ruby.png");
  sapphireImg = loadImage("images/sapphire.png");
}

function setup(){
  frameRate(60);
  createCanvas(displayWidth-10,displayHeight-120);

  database = firebase.database();

  player = new Player();
  form = new Form();
  state = new State();
  state1 = new State1();
  game = new Game();

  volcanoZone = new VolcanoZone();
  stormZone = new StormZone();
  stormZone.optionList();

  randCoal = round(random(20,30));
  randIron = round(random(15,24));
  randGold = round(random(70,100));
  randAmethystSapphire = round(random(80,110));
  randRubyEmerald = round(random(70,90));
  randDiamond = round(random(50,70));

  newMineralLocation(coal,randCoal,500,displayHeight*4);
  newMineralLocation(iron,randIron,displayHeight*2, displayHeight*6);
  newMineralLocation(gold,randGold,displayHeight*5, displayHeight*80);
  newMineralLocation(amethyst,randAmethystSapphire,displayHeight*50, displayHeight*150);
  newMineralLocation(sapphire,randAmethystSapphire,displayHeight*46, displayHeight*146);
  newMineralLocation(ruby,randRubyEmerald,displayHeight*125, displayHeight*170);
  newMineralLocation(emerald,randRubyEmerald,displayHeight*118, displayHeight*174);
  newMineralLocation(diamond,randDiamond,displayHeight*150, displayHeight*200);
}

function draw(){
  if(gamestate<1){
   frameRate(0.75)
   push();
   var rand = round(random(0,1));
   switch(rand){
    case 0 : background(startBackgroundImg);
    break;
    case 1 : background(startBackgroundImg2);
    break;
  }
  pop();
}

  if(max_Boost<200){
    max_Boost+=2;
  }

  player.update();
  player.getCount();

 if(gamestate===0){
  form.display1();
  volcanoZone.hide();
  state1.hide();
  stormZone.hide();
 }

 if(gamestate>0){
  frameRate(60);
  background(0);
  form.hide();
 }

 if(gamestate===1){
  volcanoZone.show();
  state1.show();
  stormZone.show();
  state1.display();
  volcanoZone.display();
  volcanoZone.checkLocality();
  stormZone.display();
  checkLocalityForCyclones();
 }

 if(gamestate === 2){
   state1.hide();
   volcanoZone.hide();
   stormZone.hide();
   //noCursor();
   var div = myDI

   if(max_Engine>0){
    game.display();
    game.control();
  } 
  else if(max_Engine<0.11){
   state.update(3);
   player.score = floor(((distanceTravelled/time)+distanceTravelled)/2);
  }

  if(frameCount%60 == 0){
   time+=1;
  }
 
   newMineral(coal,coalImg,randCoal);
   newMineral(iron, ironImg,randIron);
   newMineral(gold, goldImg,randGold);
   newMineral(diamond,diamondImg,randDiamond);
   newMineral(ruby,rubyImg,randRubyEmerald);
   newMineral(emerald,emeraldImg,randRubyEmerald);
   newMineral(amethyst,amethystImg,randAmethystSapphire);
   newMineral(sapphire,sapphireImg,randAmethystSapphire);

   distanceTravelled = player.distance/30;
   textSize(28);
   fill(0);
   text(floor(distanceTravelled)+' KM',200,camera.position.y-displayHeight/3);
 } 

 if(gamestate === 3){
  frameRate(60);
  background(255);
  //cursor(ARROW);
  leaderboard();
}

}

function showBook(){

}

function newMineral(mineral,mineralImg,rand){
  for(var i = 0; i<rand; i++){
   if(mineral[i].x > displayWidth/2-100&&mineral[i].x<displayWidth/2-40){
    
   }
   else{
    image(mineralImg, mineral[i].x, mineral[i].y, 40, 40);
   }
  }
}

function newMineralLocation(mineral,rand,firstY,secondY){
  for(var i = 0; i<rand; i++){
    mineral[i] = {
      x: getXRandomLocation(200,displayWidth-200),
      y: getXRandomLocation(firstY, secondY)
    };
  }
}

function getXRandomLocation(min,max){
  return round(random(min,max));
 }
 
function getYRandomLocation(min,max){
  return round(random(min,max));
 }

function leaderboard(){
  for(var i = 0; i< player.index; i++){
    var ind = i+1
    var ref = 'players/player'+ind+'/score';
    var ref2 = 'players/player'+ind+'/name';

    playerInfo[i] = {
      name: '',
      score: 0
    }

    database.ref(ref2).on("value",function(data){
      playerInfo[i].name = data.val(); 
    });

    database.ref(ref).on("value",function(data){
     playerInfo[i].score = data.val();
     fill(0,0,255);
     stroke(0);
     rectMode(CENTER);
     rect(displayWidth/2,player.distance+200+i*200,displayWidth,100);
     fill(255);
     textStyle(BOLD);
     textSize(20);
    if(playerInfo[i]!=undefined)
     text(playerInfo[i].name+' : '+ playerInfo[i].score,300,player.distance+220+i*200);

     if(keyIsDown(38)){
      if(camera.position.y>player.distance+50){
      camera.position.y-=5;
      }
    }
  
    if(keyIsDown(40)){
     camera.position.y+=5;
   }

   playerInfo.sort(function(a,b){
    return b.score-a.score
  });
  });
 }
}

