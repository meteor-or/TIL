let model;
let previousPen = "down";
let x, y;

//가장 중요한 변수

let strokePath;
let seedStrokes = [];

let canvas;

function preload() {
  model = ml5.sketchRNN("hand", modelReady);
}
function modelReady() {
  console.log("model is ready.");
}

function setup() {
  canvas = createCanvas(600, 400); //캔버스 만들어줌.
  canvas.mousePressed(resetDrawing);
  canvas.mouseReleased(startSketchRNN); //p5에서 진행하는 mouseReleased 함수  이는 마우스를 뗄때 실행되는 함수

  //const button = createButton('reset')// reset 버튼 생성
  //button.position(620,20)
  //button.mousePressed(resetDrawing)//버튼 눌렀을 경우

  background(234);

  model.generate(seedStrokes, gotStroke); //데이터를 기본으로 하되 이를 이어서 선을 생성해주어야한다.
}

function gotStroke(err, result) {
  strokePath = result;
}
//이를 만드는 이유는 전역변수가 있어야 다른 곳에서 쓸 수 있기 때문에

function resetDrawing() {
  //초기화 함수
  seedStrokes = [];
  model.reset();
}
function startSketchRNN() {
  x = mouseX;
  y = mouseY; //마지막 마우스 위치에서 그리기 시작하여라
  model.generate(seedStrokes, gotStroke);
}

//하이라이트 코드

function draw() {
  if (mouseIsPressed) {
    stroke(0, 225, 0);
    strokeWeight(6);
    line(pmouseX, pmouseY, mouseX, mouseY);

    const useStroke = {
      dx: mouseX - pmouseX,
      dy: mouseY - pmouseY,
      pen: "down",
    };
    seedStrokes.push(useStroke);
  }

  if (strokePath) {
    if (previousPen == "down") {
      stroke(0);
      strokeWeight(6);
      line(x, y, x + strokePath.dx, y + strokePath.dy); //현재 끝점이 시작점
    }

    x += strokePath.dx;
    y += strokePath.dy;
    previousPen = strokePath.pen;
    //끝난 부분을 기준점으로 펜의 상태를 옮기기기

    if (strokePath.pen !== "end") {
      strokePath = null;
      model.generate(gotStroke);
    }
  }
}
