let xbolinha = 300;
let ybolinha = 200;
let diametro = 20;
let raio = diametro/2;

let VelocidadexBolinha = 6;
let VelocidadeyBolinha = 6;

let xRaquete = 10;
let yRaquete = 155;
let larguraRaquete = 10;
let alturaRaquete = 90;

let xRaqueteOponente = 580;
let yRaqueteOponente = 155;

let meuPlacar = 0;
let placarOponente = 0;

let trilha;
let ponto;
let raquetada;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  desenhabolinha();
  movimentaBolinha();
  verificaBorda();
  desenhaRaquete(xRaquete, yRaquete);
  desenhaRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaquete();
  movimentaraqueteoponente();
  colisaoRaquete();
  mostraPlacar();
  contaPlacar();
  }

function desenhabolinha(){
  circle(xbolinha, ybolinha, diametro);
}

function movimentaBolinha(){
  xbolinha += VelocidadexBolinha
  ybolinha += VelocidadeyBolinha 
}

function verificaBorda (){
    if (xbolinha + raio > width || xbolinha - raio < 0){
      VelocidadexBolinha *= -1;
    }
  
  if (ybolinha + raio > height || ybolinha - raio < 0){
    VelocidadeyBolinha *= -1;
  }
}

function desenhaRaquete(x, y){
 rect(x, y, larguraRaquete, alturaRaquete) 
}

function movimentaRaquete (){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function movimentaraqueteoponente (){
  if (keyIsDown(87))
    yRaqueteOponente -= 10;
  if (keyIsDown(83))
    yRaqueteOponente += 10;
}

function colisaoRaquete(){
  if(xbolinha - raio <= xRaquete + larguraRaquete &&
    ybolinha + raio >= yRaquete &&
    ybolinha - raio <= yRaquete + alturaRaquete){
    VelocidadexBolinha *= -1;
  }  
  
  if(xbolinha + raio >= xRaqueteOponente &&
    ybolinha + raio >= yRaqueteOponente &&
    ybolinha - raio <= yRaqueteOponente + alturaRaquete){
    VelocidadexBolinha *= -1;
  }
}

function mostraPlacar(){
  fill('orange');
  rect(130, 5, 40, 25);
  rect(430, 5, 40, 25);
  fill(255);
  textSize(22);
  textAlign(CENTER);
  text(meuPlacar, 150, 25);
  text(placarOponente, 450, 25);
 }

function contaPlacar(){
//   contabeliza placar do oponente
  if(xbolinha - raio <= 0){
    placarOponente += 1
  }
//  contabiliza meu placar
  if(xbolinha + raio >= width){
    meuPlacar +=1;
  }
}

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}
