var fontsize = g.getWidth()>200 ? 3 : 2;
var fontsizeTime = g.getWidth()>200 ? 4 : 4;

var fontheight = 10*fontsize;
var fontheightTime = 10*fontsizeTime;
var locale = require("locale");
var marginTop = 25;
var flag = false;

var storage = require('Storage');

const settings = storage.readJSON('setting.json',1) || { HID: false };

var sendHid, next, prev, toggle, up, down, profile;
var lasty = 0;
var lastx = 0;


let textCol = g.theme.dark ? "#0bd" : "#0bd";

function drawAll(){
  updateTime();
  updateRest(new Date());
}

function updateRest(now){
  writeLine(locale.dow(now),1);
  writeLine(locale.date(now,1),2);
}
function updateTime(){
  if (!Bangle.isLCDOn()) return;
  let now = new Date();
  writeLine(locale.time(now,1),0);
  writeLine(flag?" ":"_                     ",3);
  flag = !flag;
  if(now.getMinutes() == 0)
    updateRest(now);
}
function writeLineStart(line){
  if (line==0){
      g.drawString(">",0,marginTop+(line)*fontheight);
  } else {
      g.drawString(">",4,marginTop+(line-1)*fontheight + fontheightTime);

  }
}

function writeLine(str,line){
  if (line == 0){
  var y = marginTop+line*fontheightTime;
  g.setFont("6x8",fontsizeTime);
  g.setColor(textCol).setFontAlign(-1,-1);
  g.clearRect(0,y,((str.length+1)*40),y+fontheightTime-1);
  writeLineStart(line);
  g.drawString(str,25,y);
  } else {
      var y = marginTop+(line-1)*fontheight+fontheightTime;
  g.setFont("6x8",fontsize);
  g.setColor(textCol).setFontAlign(-1,-1);
  g.clearRect(0,y,((str.length+10)*40),y+fontheightTime-1);
  writeLineStart(line);
  g.drawString(str,25,y);
  }

}

g.clear();

Bangle.on('lcdPower',function(on) {
  if (on) drawAll();
});
var click = setInterval(updateTime, 1000);
Bangle.setUI("clockupdown", btn=>{
  drawAll();
});
Bangle.loadWidgets();
Bangle.drawWidgets();
drawAll();
