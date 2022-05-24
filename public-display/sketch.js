//Create the socket
let socket = io();
let screenDisplay;

let videoWidth = 1280;
let videoHeight = 720;

let create = false;

let time = 0;
let decrease = 0;

let time2 = 0;
let decrease2 = 0;

let count = 0;

//50 Particles
let green1 = 'rgba(0,255,0, 0.1)';
let green2 = 'rgba(0,255,0, 0.8)';

//100 Particles
let yellow1 = 'rgba(255,255,0, 0.25)';
let yellow2 = 'rgba(255,255,0, 0.8)';

//150 Particles
let red1 = 'rgba(255,0,0, 0.25)';
let red2 = 'rgba(255,0,0, 0.8)';


let sieteAm;
let sietePlay = false;

let diezAm;
let diezPlay = false;

let unaPm;
let unaPlay = false;

let cuatroPm;
let cuatroPlay = false;


function setup() {
    screenDisplay = 0;
    createCanvas(1500, 844);

    portada = loadImage('assets/Portada.png');
    font = loadFont('assets/Poppins-Light.ttf');

    verde = loadImage('assets/green.png');
    amarillo = loadImage('assets/yellow.png');
    rojo = loadImage('assets/red.png');

    sieteAm = createVideo(['assets/7-9.mov']);
    sieteAm.hide();



    diezAm = createVideo(['assets/10-12.mov']);
    diezAm.hide();


    unaPm = createVideo(['assets/1-3.mov']);
    unaPm.hide();


    cuatroPm = createVideo(['assets/4-6.mov']);
    cuatroPm.hide();


    particles = [];
    for (let i = 0; i < 50; i++) {
        if (i % 2 == 0) {
            particles.push(new Particle(green1, 1, 1));
        } else {
            particles.push(new Particle(green2, 2, 1));
        }

    }

}

function draw() {

    time = Math.floor(millis() / 1000) - decrease;
    console.log(time)
    background(0);
    switch (screenDisplay) {
        case 0:
            image(portada, 110, 0, videoWidth, videoHeight);
            break;
        case 1:
            dynamicCase1();
            playVideo(screenDisplay);
            image(sieteAm, 110, 0, videoWidth, videoHeight);
            for (let i = 0; i < particles.length; i++) {
                particles[i].draw();
                particles[i].move();

            }

            break;
        case 2:
            dynamicCase2();
            playVideo(screenDisplay);
            image(diezAm, 110, 0, videoWidth, videoHeight);
            for (let i = 0; i < particles.length; i++) {
                particles[i].draw();
                particles[i].move();

            }
            break;
        case 3:
            dynamicCase3()
            playVideo(screenDisplay);
            image(unaPm, 110, 0, videoWidth, videoHeight);
            for (let i = 0; i < particles.length; i++) {
                particles[i].draw();
                particles[i].move();

            }
            break;
        case 4:
            dynamicCase1();
            playVideo(screenDisplay);
            image(cuatroPm, 110, 0, videoWidth, videoHeight);
            for (let i = 0; i < particles.length; i++) {
                particles[i].draw();
                particles[i].move();

            }
            break;
    }
    if (time == 10) {
        decrease += 10;
    }

if (screenDisplay > 0) {
    switch (particles[0].getType()) {
        case 1:
            image(verde, 413, 615);
            break;
        case 2:
            image(amarillo, 413, 615);
            break;
        case 3:
            image(rojo, 413, 615);
            break;
    }
    switch (screenDisplay) {
        case 1:
            fill("#2B2A2A");
            noStroke();
            textSize(26);
            text('7am - 9am', 680, 655);122
            break;
        case 2:
            fill("#2B2A2A");
            noStroke();
            textSize(26);
            text('10am - 12pm', 675, 655);
            break;
        case 3:
            fill("#2B2A2A");
            noStroke();
            textSize(26);
            text('1pm - 3pm', 685, 655);
            break;
        case 4:
            fill("#2B2A2A");
            noStroke();
            textSize(26);
            text('4pm - 6pm', 680, 655);
            break;
    }
}
    
    //image(sieteAm, 0, 0, width, height);

    //collisions();
  /*  
    fill("#2B2A2A");
    noStroke();
    textFont(font);
    textSize(12);
    text(mouseX + " " + mouseY, mouseX, mouseY);*/
}


function playVideo(screen) {
    switch (screen) {
        case 1:

            if (sietePlay == false) {
                sieteAm.loop();
                sietePlay = true;

                diezPlay = false;
                diezAm.pause();

                unaPlay = false;
                unaPm.pause();

                cuatroPlay = false;
                cuatroPm.pause();
            }
            break;

        case 2:
            if (diezPlay == false) {
                diezAm.loop();
                diezPlay = true;

                sietePlay = false;
                sieteAm.pause();

                unaPlay = false;
                unaPm.pause();

                cuatroPlay = false;
                cuatroPm.pause();
            }

            break;

        case 3:
            if (unaPlay == false) {
                unaPm.loop();
                unaPlay = true;

                sietePlay = false;
                sieteAm.pause();

                diezPlay = false;
                diezAm.pause();

                cuatroPlay = false;
                cuatroPm.pause();
            }

            break;

        case 4:
            if (cuatroPlay == false) {
                cuatroPm.loop();
                cuatroPlay = true;

                sietePlay = false;
                sieteAm.pause();

                diezPlay = false;
                diezAm.pause();

                unaPlay = false;
                unaPm.pause();
            }

            break;
    }
}

function dynamicCase1() {
    if (time == 4) {
        for (let i = 0; i < particles.length; i++) {
            if (i % 2 == 0) {
                particles[i].changeParticle(yellow1, 2);
            } else {
                particles[i].changeParticle(yellow2, 2);
            }
        }

        if (particles.length < 51) {
            for (let i = 0; i < 50; i++) {
                if (i % 2 == 0) {
                    particles.push(new Particle(yellow1, 1, 2));
                } else {
                    particles.push(new Particle(yellow2, 2, 2));

                }
            }
        }

    }

    if (time == 7) {
        particles.splice(50, 50);
        for (let i = 0; i < particles.length; i++) {
            if (i % 2 == 0) {
                particles[i].changeParticle(green1, 1);
            } else {
                particles[i].changeParticle(green2, 1);
            }
        }
    }

}

function dynamicCase2() {

    if (time == 4) {
        particles.splice(50, 50);
        for (let i = 0; i < particles.length; i++) {
            if (i % 2 == 0) {
                particles[i].changeParticle(green1, 1);
            } else {
                particles[i].changeParticle(green2, 1);
            }
        }
    }

    if (time == 7) {
        for (let i = 0; i < particles.length; i++) {
            if (i % 2 == 0) {
                particles[i].changeParticle(yellow1, 2);
            } else {
                particles[i].changeParticle(yellow2, 2);
            }
        }

        if (particles.length < 51) {
            for (let i = 0; i < 50; i++) {
                if (i % 2 == 0) {
                    particles.push(new Particle(yellow1, 1, 2));
                } else {
                    particles.push(new Particle(yellow2, 2, 2));

                }
            }
        }

    }
}


function dynamicCase3() {

    if (time == 1) {
        for (let i = 0; i < particles.length; i++) {
            if (i % 2 == 0) {
                particles[i].changeParticle(red1, 3);
            } else {
                particles[i].changeParticle(red2, 3);
            }
        }

        if (particles.length < 51) {
            for (let i = 0; i < 100; i++) {
                if (i % 2 == 0) {
                    particles.push(new Particle(red1, 1, 3));
                } else {
                    particles.push(new Particle(red2, 2, 3));

                }
            }
        }

    }

    if (time == 4) {
        particles.splice(100, 50);
        for (let i = 0; i < particles.length; i++) {
            if (i % 2 == 0) {
                particles[i].changeParticle(yellow1, 2);
            } else {
                particles[i].changeParticle(yellow2, 2);
            }
        }
    }

    if (time == 7) {
        particles.splice(50, 50);
        for (let i = 0; i < particles.length; i++) {
            if (i % 2 == 0) {
                particles[i].changeParticle(green1, 1);
            } else {
                particles[i].changeParticle(green2, 1);
            }
        }
    }


}





function keyPressed() {
    switch (key) {
        case '1':
            screenDisplay = 1;
            particles = [];
            for (let i = 0; i < 50; i++) {
                if (i % 2 == 0) {
                    particles.push(new Particle(green1, 1, 1));
                } else {
                    particles.push(new Particle(green2, 2, 1));
                }

            }
            break;

        case '2':
            screenDisplay = 2;
            particles = [];
            for (let i = 0; i < 100; i++) {
                if (i % 2 == 0) {
                    particles.push(new Particle(yellow1, 1, 1));
                } else {
                    particles.push(new Particle(yellow2, 2, 1));
                }

            }
            break;
        case '3':
            screenDisplay = 3;
            particles = [];
            for (let i = 0; i < 150; i++) {
                if (i % 2 == 0) {
                    particles.push(new Particle(red1, 1, 3));
                } else {
                    particles.push(new Particle(red2, 2, 3));
                }

            }
            break;
        case '4':
            screenDisplay = 4;
            particles = [];
            for (let i = 0; i < 50; i++) {
                if (i % 2 == 0) {
                    particles.push(new Particle(green1, 1, 1));
                } else {
                    particles.push(new Particle(green2, 2, 1));
                }

            }

            break;
    }
}


function pressedButtonOutside(btn) {
    switch (btn) {
        case 1:
            screenDisplay = 1;
            particles = [];
            for (let i = 0; i < 50; i++) {
                if (i % 2 == 0) {
                    particles.push(new Particle(green1, 1, 1));
                } else {
                    particles.push(new Particle(green2, 2, 1));
                }

            }
            break;

        case 2:
            screenDisplay = 2;
            particles = [];
            for (let i = 0; i < 100; i++) {
                if (i % 2 == 0) {
                    particles.push(new Particle(yellow1, 1, 1));
                } else {
                    particles.push(new Particle(yellow2, 2, 1));
                }

            }
            break;
        case 3:
            screenDisplay = 3;
            particles = [];
            for (let i = 0; i < 150; i++) {
                if (i % 2 == 0) {
                    particles.push(new Particle(red1, 1, 3));
                } else {
                    particles.push(new Particle(red2, 2, 3));
                }

            }
            break;
        case 4:
            screenDisplay = 4;
            particles = [];
            for (let i = 0; i < 50; i++) {
                if (i % 2 == 0) {
                    particles.push(new Particle(green1, 1, 1));
                } else {
                    particles.push(new Particle(green2, 2, 1));
                }

            }

            break;
    }
}



socket.on('action1', () => {
    console.log('Entro1');
    pressedButtonOutside(1);
    //checkSound.play();

});

socket.on('action2', () => {
    console.log('Entro2');
    pressedButtonOutside(2);
});

socket.on('action3', () => {
    console.log('Entro3');
    pressedButtonOutside(3);
});

socket.on('action4', () => {
    console.log('Entro4');
    pressedButtonOutside(4);
});