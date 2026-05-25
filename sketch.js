let plantas = [];
let chuva = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 8; i++) {
    plantas.push({
      x: 120 + i * 120,
      altura: 50
    });
  }
}

function draw() {
  background(135, 206, 235);

  // sol
  fill(255, 204, 0);
  noStroke();
  ellipse(100, 100, 100);

  // chão
  fill(90, 180, 75);
  rect(0, height - 200, width, 200);

  // mensagem
  fill(0);
  textSize(28);
  textAlign(CENTER);
  text("Projeto Agrinho - Campo Sustentável", width / 2, 50);

  // plantas
  for (let planta of plantas) {

    // caule
    stroke(0, 120, 0);
    strokeWeight(8);
    line(
      planta.x,
      height - 200,
      planta.x,
      height - 200 - planta.altura
    );

    // folha
    fill(0, 180, 0);
    noStroke();
    ellipse(
      planta.x - 10,
      height - 220 - planta.altura,
      30
    );

    ellipse(
      planta.x + 10,
      height - 240 - planta.altura,
      30
    );

    // crescimento
    if (chuva && planta.altura < 180) {
      planta.altura += 0.2;
    }
  }

  // chuva
  if (chuva) {
    for (let i = 0; i < 200; i++) {
      stroke(0, 100, 255);
      line(
        random(width),
        random(height),
        random(width),
        random(height) + 10
      );
    }

    fill(255);
    noStroke();
    textSize(22);
    text("A chuva ajuda as plantações a crescer!", width / 2, 90);
  }

  // instrução
  fill(0);
  textSize(20);
  text("Clique para fazer chover", width / 2, height - 30);
}

function mousePressed() {
  chuva = !chuva;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}