function preload() {}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 100, 100, 440, 310);
    fill(0, 0, 250);
    stroke(0, 0, 250);
    rect(30, 15, 550, 50);

    fill(0, 0, 250);
    stroke(0, 0, 250);
    rect(25, 15, 50, 430);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(50, 40, 70);

    fill(0, 0, 250);
    stroke(0, 0, 250);
    rect(555, 15, 50, 430);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(580, 40, 70);

    fill(0, 0, 250);
    stroke(0, 0, 250);
    rect(30, 420, 550, 50);

  

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(50, 440, 70);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(580, 440, 70);

}

function take_snapshot() {
    save('Student_name.png');
}