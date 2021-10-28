Bangle.loadWidgets();
Bangle.drawWidgets();

var W = g.getWidth(), H = g.getHeight();
var ENV = process.env;
var MEM = process.memory();
var s = require("Storage");

var img = atob("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");
var imgHeight = g.imageMetrics(img).height;
var imgScroll = Math.floor(Math.random()*imgHeight);

g.reset().setFont("6x15").setFontAlign(0,0);
g.drawString(ENV.VERSION + "  " + NRF.getAddress(), g.getWidth()/2, 171);
g.drawImage(img,0,24);

function getVersion(name,file) {
  var j = s.readJSON(file,1);
  var v = ("object"==typeof j)?j.version:false;
  return v?(name+" "+(v?"v"+v:"Unknown")):"NO "+name;
}

var versions = [
  getVersion("Bootloader","boot.info"),
  getVersion("Launcher","launch.info"),
  getVersion("Settings","setting.info")
];
var logo = E.toArrayBuffer(atob("PBwBAAAAAAAB/gAAAAAAAB/gAAAAAAAB/gAAAAAAAB/gAAAAAAAB/gAAAAAAAB/gAAAAAAAD/w+AAAAQAHA4hAAAAQAMAMhAAAAQAYBmhAAAAQAYBGiAAAAQAQCD/H74+R4wGDhoKJCSEwEDgoKJCT8wFDgoKJCSAwHDhoKJCSEQHj/H6I+R4YHmAAAACAAYEGAAABCAAMEMAAAA8AAHA4AAAAAAAD/wAAAAAAAB/gAAAAAAAB/gAAAAAAAB/gAAAAAAAB/gAAAAAAAB/gAAAAAAAB/g"));

var imageTop = 24;

function drawInfo() {
  g.reset().clearRect(Bangle.appRect);
  g.drawImage(logo,W-60,24);
  g.setFont("4x6").setFontAlign(0,0).drawString("BANGLEJS.COM",W-30,56);
  var h=8, y = 24-h;
  g.setFont("6x8").setFontAlign(-1,-1);
  g.drawString("Powered by Espruino",0,y+=4+h);
  g.drawString("Version "+ENV.VERSION,0,y+=h);
  g.drawString("Commit "+ENV.GIT_COMMIT,0,y+=h);

  getVersion("Bootloader","boot.info");
  getVersion("Launcher","launch.info");
  getVersion("Settings","setting.info");

  g.drawString(MEM.total+" JS Vars",0,y+=h);
  g.drawString("Storage: "+(require("Storage").getFree()>>10)+"k free",0,y+=h);
  if (ENV.STORAGE) g.drawString("         "+(ENV.STORAGE>>10)+"k total",0,y+=h);
  if (ENV.SPIFLASH) g.drawString("SPI Flash: "+(ENV.SPIFLASH>>10)+"k",0,y+=h);
  imageTop = y+h;
  imgScroll = imgHeight-imageTop;
  g.reset().setFont("6x15").setFontAlign(0,0);
  g.drawString(ENV.VERSION + "  " + NRF.getAddress(), g.getWidth()/2, 171);

  drawImage();
  setInterval(function() {
    drawImage();
    g.flip();
    imgScroll = (imgScroll+1) % imgHeight;
  }, 20);
}

function drawImage() {
  g.setClipRect(0,imageTop,W-1,H-14);
  g.drawImage(img,0,imageTop-imgScroll);
  g.drawImage(img,0,imageTop+imgHeight-imgScroll);
  g.setClipRect(0,0,W-1,H-1);
}

// TODO: a nice little animation before
setTimeout(drawInfo, 1000);
