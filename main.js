Webcam.set({
    height: 300,
    width: 350,
    image_format: 'jpeg',
    jpeg_quality: 180
});

camera = document.getElementById("camera");

Webcam.attach('camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_img" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version: ', ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Td7iSmaw8/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model Loaded!");
}