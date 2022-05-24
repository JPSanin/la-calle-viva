class Particle {

  constructor(color, movetype, type) {
    this.color = color;
    this.movetype = movetype;
    this.type = type;

    //this.size = Math.floor((Math.random() * 50) + 20);
    this.size = Math.floor((Math.random() * 50) + 20);
    this.position = createVector((Math.random() * 1280) + this.size+55, (Math.random() * 720) + this.size);
    this.velVal = 2 * (Math.round(Math.random()) ? 1 : -1)
    this.velocity = new p5.Vector(this.velVal, this.velVal);

    this.history = [];

  }


  move() {
    if(this.type ==1 ){
      this.position.x += random(-5, 5);
      this.position.y += random(-5, 5);
    } else if(this.type ==2 ){
      this.position.x += random(-10, 10);
      this.position.y += random(-10, 10);
    } else if(this.type ==3 ){
      this.position.x += random(-15, 15);
      this.position.y += random(-15, 15);
    }
    
  
    let v = createVector(this.position.x, this.position.y);
    this.history.push(v);
    this.bounce();

    if (this.history.length > 50) {
      this.history.splice(0, 1);
    }

  }

  draw() {


    fill(this.color);
    noStroke();
    ellipse(this.position.x, this.position.y, this.size, this.size);

    if(this.movetype == 1){

      for(let i=0; i<this.history.length;i++){
        let pos = this.history[i];
        ellipse(pos.x,pos.y, i, i);
      }
    }
    
    if(this.movetype == 2){
    noFill()
    stroke(this.color);
    strokeWeight(6);
    beginShape();
    for (let i = 0; i < this.history.length ; i++) {
      //console.log("yes");
      
        let pos = this.history[i];
        vertex(pos.x, pos.y);
      
      
    }
    endShape();

  }

  }

  bounce() {
    if (this.position.x > 1280+110 - this.size / 2) {
      this.position.x = (1280+110 - this.size / 2);
      this.velocity.x *= -1;
    } else if (this.position.x < this.size+150 / 2) {
      this.position.x = (this.size+150 / 2);
      this.velocity.x *= -1;
    } else if (this.position.y > 720 - this.size / 2) {
      this.position.y = 720- this.size / 2;
      this.velocity.y *= -1;
    } else if (this.position.y < this.size / 2) {
      this.position.y = this.size / 2;
      this.velocity.y *= -1;
    }
  }

  changeParticle(color, type){
    this.color = color;
    this.type = type;
  }

  getType(){
    return this.type;
  }
  

}