let classifier;
let img;
let imgA;
let label;
let confidence;
let ImageModelURL = "https://teachablemachine.withgoogle.com/models/eHzq28N91/";


function preload() {
    classifier = ml5.imageClassifier(ImageModelURL + "model.json");
    img = loadImage("Imagenes/Debil01.jpg");
    imgA= loadImage("Imagenes/Cansancio.jpg");
  }
  
function setup() {

    createCanvas(800, 400);
    background(255,0,0);
    classifier.classify(img, gotResult);
    image(img,0,0)

  }
  
  function draw() {
    if (keyIsPressed === true) {
        if (key === 'w') {
            classifier.classify(img, gotResult);
            image(img,0,0)
        } else if (key === 's') {
            classifier.classify(imgA, gotResult);
            image(imgA,0,0)
        } else if (key === 'a') {
        print("etiqueta C");
        } else if (key === 'd') {
            print("etiqueta D");
        }
      } 
  }


  // Callback function for when classification has finished
function gotResult(results) {
    // The results are in an array ordered by confidence
    console.log(results);
      // Display the results on the canvas
    fill(255);
    stroke(0);
    textSize(18);

    label = "Label: " + results[0].label;
    confidence = "Confidence: " + nf(results[0].confidence, 0, 2);
    text(label, mouseX, mouseY);
    text(confidence, mouseX, mouseY -20);

    }


  