songList = 0;
song0 = "";
song1 = "";
song2 = "";
song3 = "";
song4 = "";

var number = 0;

function preload()
{
 song0 = loadSound("./songs/music.mp3")
 song1 = loadSound("./songs/Bay.mp3")
 song2 = loadSound("./songs/North.mp3")
 song3 = loadSound("./songs/Space.mp3")
 song4 = loadSound("./songs/Travel.mp3")
}

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.position(700, 400);

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results){
	if(results.length > 0){

		// console.log(results);

		scoreRightWrist =  results[0].pose.keypoints[10].score;
		scoreLeftWrist =  results[0].pose.keypoints[9].score;

		leftWristX = results[0].pose.leftWrist.x;
		leftWristY = results[0].pose.leftWrist.y;

		// console.log("leftWrist X = " + leftWristX + " leftWrist y = " + leftWristY)

		rightWristX = results[0].pose.rightWrist.x;
		rightWristY = results[0].pose.rightWrist.y;

		// console.log("rightWrist X: " + rightWristX + " rightWrist Y: " + rightWristY)

		// document.getElementById("speed").innerHTML = "X = " + leftWristX.toFixed(0) + " Y = " + leftWristY.toFixed(0);
		// document.getElementById("volume").innerHTML = "X = " + rightWristX.toFixed(0) + " Y = " + rightWristY.toFixed(0);
	}
}

function draw() {
	image(video, 0, 0, 600, 500);

	fill("#FF0000");
	stroke("#FF0000");

	circle(rightWristX,rightWristY,20);

	 if (rightWristY > 400 && rightWristY <=500){
		previous();
	}

	if (scoreLeftWrist > 0.2)
	{
		circle(leftWristX,leftWristY,20);
		
		next();
	}

}

function next()
{
	if (songList != 4) {
		songList = songList+1;
		console.log(songList);	
	}
	else{
		console.log(songList);	
		songList = 0;
	}
	play();
}
function previous()
{
	if (songList != 0) {
		songList = songList - 1;	
	}
	else{
		songList = 4;
	}
	play();
}

function play(){
 if (songList == 0){
	 
	 song0.stop();
	 song1.stop();
	 song2.stop();
	 song3.stop();
	 song4.stop();
	

	song0.play();
	song0.setVolume(1);
	song0.rate(1);
	
 }
 else if (songList == 1){
	song0.stop();
	 song1.stop();
	 song2.stop();
	 song3.stop();
	 song4.stop();
	

	song1.play();
	song1.setVolume(1);
	song1.rate(1);
 }
 else if (songList == 2){

	song0.stop();
	 song1.stop();
	 song2.stop();
	 song3.stop();
	 song4.stop();
	

	song2.play();
	song2.setVolume(1);
	song2.rate(1);
 }
 else if (songList == 3){

	song0.stop();
	song1.stop();
	song2.stop();
	song3.stop();
	song4.stop();
	

	song3.play();
	song3.setVolume(1);
	song3.rate(1);
 }
 else if (songList == 4){

	song0.stop();
	song1.stop();
	song2.stop();
	song3.stop();
	song4.stop();
	

	song4.play();
	song4.setVolume(1);
	song4.rate(1);
 }
}