var e2d = require('../index');

var url = 'data:image/gif;base64,R0lGODlhEAAOALMAAOazToeHh0tLS/7LZv/0jvb29t/f3//Ub//ge8WSLf/rhf/3kdbW1mxsbP//mf///yH5BAAAAAAALAAAAAAQAA4AAARe8L1Ekyky67QZ1hLnjM5UUde0ECwLJoExKcppV0aCcGCmTIHEIUEqjgaORCMxIC6e0CcguWw6aFjsVMkkIr7g77ZKPJjPZqIyd7sJAgVGoEGv2xsBxqNgYPj/gAwXEQA7';

var img = new e2d.Img();
img.src = url;

var image = new Image();
image.src = url;

var x = 10, y = 10, width = 16, height = 14;
var sx = 8, sy = 7, sw = 8, sh = 8;

module.exports = [
  {
    name: "fillImage(img, sx, sy, sw, sh, x, y, width, height)  - this fails because of floating point math",
    width: 50, height: 50,
    commands: e2d.fillImage(img, sx, sy, sw, sh, x, y, width, height),
    cb: function(ctx) {
      ctx.drawImage(image, sx, sy, sw, sh, x, y, width, height);
    }
  },
  {
    name: "fillImage(img, x, y, width, height) - this fails because of floating point math",
    width: 50, height: 50,
    commands: e2d.fillImage(img, x, y, width * 2, height * 2),
    cb: function(ctx) {
      ctx.drawImage(image, x, y, width * 2, height * 2);
    }
  },
  {
    name: "fillImage(img, x, y)",
    width: 50, height: 50,
    commands: e2d.fillImage(img, x, y),
    cb: function(ctx) {
      ctx.drawImage(image, x, y, image.width, image.height);
    }
  },
  {
    name: "fillImage(img)",
    width: 50, height: 50,
    commands: e2d.fillImage(img),
    cb: function(ctx) {
      ctx.drawImage(image, 0, 0, image.width, image.height);
    }
  }
];