function spoiler_desc() {
  var x = document.getElementById("spoiler_desc");
  if (x.innerHTML === "See Less..") {
    x.innerHTML = "See More..";
  } else {
    x.innerHTML = "See Less..";
  }
}

function spoiler_video() {
  var x = document.getElementById("spoiler_video");
  if (x.innerHTML === "See Less..") {
    x.innerHTML = "See More..";
  } else {
    x.innerHTML = "See Less..";
  }
}

function spoiler_link() {
  var x = document.getElementById("spoiler_link");
  if (x.innerHTML === "See Less..") {
    x.innerHTML = "See More..";
  } else {
    x.innerHTML = "See Less..";
  }
}

function BlockedTest() {
  alert("STOP RIGHT THERE \nini website design, beberapa fitur ga fungsional \n-Frontend Crystal");
}

function BlockedMagerTest() {
  alert("FrontEnd nya lagi mager \nbelum ada fiturnya. mintanya nanti saja \n-Frontend Crystal");
}

function BlockedNotifyMe() {
  alert("INI CONTOH NOTIFY ME \nbelum ada fiturnya. pokoknya nanti muncul kayak bacaan suruh allow gitu, urusan backend im not gonna touch this sh*t \n-Frontend Crystal");
}

var vid = document.getElementById("myVideo");
var vid2 = document.getElementById("myVideo1");

function playVid() {
  vid.play()
}

function playVid2() {
  vid2.play()
  vid2.muted = true;
}

function stopvid() {
  vid.pause();
}

function stopvid2() {
  vid2.pause();
}

function resetvid() {
  vid.pause();
  vid.currentTime = 0;
  vid.play();
}

function resetvid2() {
  vid2.pause();
  vid2.currentTime = 0;
  vid2.play();
}

$(window).on('load', function(){
  setTimeout(showImage, 2000); 
});
function showImage(){
    $( ".card-lbl-top" ).fadeOut(500, function() {
     $(".card-img").append('<img class="card-img" id="img-card" src="https://via.placeholder.com/700x400" alt="Card image cap">');
  });  
}