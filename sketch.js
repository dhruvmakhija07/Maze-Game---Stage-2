var mazeoutline;
var mazeoutlinesprite;

var maze1;
var maze1sprite;

var player;
var playersprite;

var coin;
var coinsprite;

var coin2;
var coin2sprite;

var coin3;
var coin3sprite;

var coin4;
var coin4sprite;

var coin5;
var coin5sprite;

var diamond;
var diamondsprite;

var diamond2;
var diamond2sprite;

var banana;
var bananasprite;

var banana2;
var banana2sprite;

var apple;
var applesprite;

var apple2;
var apple2sprite;

var flag;
var flagsprite;

function preload(){
  mazeoutline = loadImage("assets/mazeoutline.png");
  maze1 = loadImage("assets/maze1.png");
  playersprite = loadImage("assets/smiley.png");
  coinsprite = loadImage("assets/coin.png");
  coin2sprite = loadImage("assets/coin.png");
  coin3sprite = loadImage("assets/coin.png");
  coin4sprite = loadImage("assets/coin.png");
  coin5sprite = loadImage("assets/coin.png");
  diamondsprite = loadImage("assets/diamond.png");
  diamond2sprite = loadImage("assets/diamond.png");
  bananasprite = loadImage("assets/banana.png");
  banana2sprite = loadImage("assets/banana.png");
  applesprite = loadImage("assets/apple.png");
  apple2sprite = loadImage("assets/apple.png");
  flagsprite = loadImage("assets/flag.png");
}

function setup(){
  createCanvas(700,700);
  mazeoutlinesprite = createSprite(350,350);
  mazeoutlinesprite.addImage("mazeoutline",mazeoutline);
  
  maze1sprite = createSprite(100,100);
  maze1sprite.addImage("maze",maze1);

  rewards = new Group()
  energy = new Group()
  
  var rewardsposition = [
    {x: 544, y: 497, image: coinsprite},
    {x: 220, y: 484, image: coinsprite},
    {x: 431, y: 278, image: coinsprite},
    {x: 180, y: 160, image: coinsprite},
    {x: 105, y: 598, image: coinsprite},
  ];

  this.addSprites(
    rewards,
    rewardsposition.length,
    coinsprite,
    0.04,
    rewardsposition
  );

  var rewardsposition2 = [
    {x: 295, y: 270, image: diamondsprite},
    {x: 180, y: 102, image: diamondsprite}
  ];

  this.addSprites(
    rewards,
    rewardsposition2.length,
    diamondsprite,
    0.08,
    rewardsposition2
  )

  var energyposition = [
    {x: 145, y: 100, image: bananasprite},
    {x: 543, y: 465, image: bananasprite}
  ];

  this.addSprites(
    energy,
    energyposition.length,
    bananasprite,
    0.11,
    energyposition
  );

  var energy2position = [
    {x: 270, y: 386, image: applesprite},
    {x: 157.5, y: 368, image: applesprite}
  ];

  this.addSprites(
    energy,
    energy2position.length,
    applesprite,
    0.045,
    energy2position
  );

  player = createSprite(239,112,20,20);
  player.addImage("runner",playersprite);

  flag = createSprite(515.5,619,20,20);
  flag.addImage("flag",flagsprite);

  player.scale = 0.055;
  flag.scale = 0.08;
  mazeoutlinesprite.scale = 1.5;
}

function draw(){
  background(83, 197, 127);
  
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);

  textSize(20);
  fill(94, 106, 10);
  strokeWeight(2);
  stroke(51);
  text("AdventureScape: Level 1",40,40);

  textSize(14);
  fill(94, 106, 10);
  strokeWeight(2);
  stroke(51);
  text("Score:",575,25);
  
  textSize(14);
  fill(94, 106, 10);
  strokeWeight(2);
  stroke(51);
  text("Energy:",575,50);

  if(keyIsDown(LEFT_ARROW)){
    player.x -= 4.5;
  }

  if(keyIsDown(RIGHT_ARROW)){
    player.x += 4.5;
  }

  if(keyIsDown(UP_ARROW)){
    player.y -= 4.5;
  }

  if(keyIsDown(DOWN_ARROW)){
    player.y += 4.5;
  }

  if(player.isTouching(maze1sprite)){
    player.x = 239;
    player.y = 112;
  }

  drawSprites();
}

function addSprites(spriteGroup, numberOfSprites, spriteImage, scale, positions = []) {
  for (var i = 0; i < numberOfSprites; i++) {
    var x, y;
    
    if (positions.length > 0) {
      x = positions[i].x;
      y = positions[i].y;
      spriteImage = positions[i].image;
    } else {
      x = random(width / 2 + 150, width / 2 - 150);
      y = random(-height * 4.5, height - 400);
    }
    var sprite = createSprite(x, y);
    sprite.addImage("sprite", spriteImage);

    sprite.scale = scale;
    spriteGroup.add(sprite);
  }
}