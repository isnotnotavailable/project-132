img="";
status="";

function preload() {
    img= loadImage('bottles.jpg')
}

function modelLoaded() {
    console.log("ModelLoaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error)
    }
    console.log(results)

}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects"
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill('#b700ff')
    text("purple bottle", 40, 75);
    noFill();
    stroke('#b700ff')
    rect(245.20456790924072, 145.8914577960968, 450, 350);

    fill('#15ff00')
    text("green bottle", 320, 75);
    noFill();
    stroke('#15ff00')
    rect(300, 50, 225, 350);

    fill('#000000')
    text("black bottle", 320, 75);
    noFill();
    stroke('#000000')
    rect(300, 50, 225, 350);

    fill('#ff00d9')
    text("pink bottle", 320, 75);
    noFill();
    stroke('#ff00d9')
    rect(300, 50, 225, 350);

    fill('#003cff')
    text("blue bottle", 320, 75);
    noFill();
    stroke('#003cff')
    rect(300, 50, 225, 350);
}