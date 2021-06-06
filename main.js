Webcam.set({
    width = 350,
    height = 300,
    image_format = "png",
    png_guality = 90
});
camera = document.getElementById("camera").value;

function take_snapshot() {
    webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '">';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js', modelLoaded);