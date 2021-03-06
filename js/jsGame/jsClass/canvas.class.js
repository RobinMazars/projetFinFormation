class Canvas {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.pen = new Pen()
  }
  drawLine(event) {

  }
  startDrawLine(event) {
    this.ctx.beginPath();
    this.ctx.lineWidth = this.pen.getWidth();
    this.ctx.strokeStyle = this.pen.getColor();
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    var pos = this.pen.getPos(event, this.canvas);
    console.log(pos);
    this.ctx.lineTo(pos.x, pos.y);
    this.ctx.stroke()
  }
  continueDrawLine(event) {
    var pos = this.pen.getPos(event,this.canvas);
    this.ctx.lineTo(pos.x, pos.y);
    this.ctx.stroke()

  }
  endDrawLine() {
    this.ctx.closePath()
  }
}
