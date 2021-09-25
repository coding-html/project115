function setup() 
{
 canvas=createCanvas(300,300)
  canvas.center();
  canvas.position(300,200);
  camera=createCapture(VIDEO);
  camera.size(300,300);
  camera.hide();
  posenet=ml5.poseNet(camera,modelLoaded);
  posenet.on("pose",gotposses);
}
function modelLoaded()
  {
    console.log("model loaded")
  }
function gotposses(results)
{
  console.log(results);
  if (results.length>0)
  {
    console.log("x postion of nose="+results[0].pose.nose.x);
    console.log("y postion of nose="+results[0].pose.nose.y);
  }
}

function draw() {
image(camera,0,0,300,300)
}
function save()
{
  save("picture.jpg");
}
