// ripple effect animation

jQuery(document).ready(function() {
    "use strict";
  
    $(".intro").ripples({
      dropRadius: 30,
      perturbance: 0.75,
      interactive: true,
      resolution: 300
    });
  
    $(".intro").ripples("updateSize");
  });

  //toggles between pages of the site, from title page to alignment chart
  
  $(".chart").hide();
  $(".title-swap").hide();
  $("#explanation").hide();
  $(".subtitle").click(chartShow);
  $("#button").mouseenter(buttonChange);
  $("#button").mouseleave(buttonChangeBack);
  $("#button").click(chartHide);
  $("#x").click(chartHide);
  $(".title").hover(changetoParagraph);
  
  
  function chartShow() {
    $(".maintext").fadeOut(800);
    $(".title-swap").fadeOut(800);
    $("#explanation").delay(500).fadeIn(800).delay(3500).fadeOut(800);
    $(".chart").delay(4800).fadeIn(800);
  }

  function chartHide() {
      $(".chart").fadeOut(800);
      $(".maintext").delay(500).fadeIn(800);
      $(".title-swap").hide();
  }

  function buttonChange() {
      $("#button").css("background-color", "white");
      $("#x").css("color", "darkslateblue");
    // $("#button").css("opacity", "1");
  }

  function buttonChangeBack() {
      $("#button").css("background", "none");
      $("#x").css("color", "white");
    // $("#button").css("opacity", "0.5");
  }

  function changetoParagraph() {
      $(".title").delay(1200).fadeOut(500);
      $(".title-swap").delay(1700).fadeIn(800);
  }
  
  function poetryEvent1() {
    // var x = event.clientX;
    // var y = event.clientY;
    // var coords = "A man, brushing your shoulder on the subway, " + x + " + " + y;
    var newpoetry = "jostling into other people while taking the subway";
    document.getElementById("poetry").innerHTML = newpoetry;
  }
  
  function poetryEvent2() {
    var newpoetry = "hugging a friend you haven't seen in a while";
    document.getElementById("poetry").innerHTML = newpoetry;
  }
  
  function poetryEvent3() {
    var newpoetry = "brushing up against your partner while cooking together";
    document.getElementById("poetry").innerHTML = newpoetry;
  }
  
  function poetryEvent4() {
    var newpoetry = "shaking hands after an interview";
    document.getElementById("poetry").innerHTML = newpoetry;
  }
  
  function poetryEvent5() {
    var newpoetry = "a soft brush against someone you just met";
    document.getElementById("poetry").innerHTML = newpoetry;
  }
  
  function poetryEvent6() {
    var newpoetry = "a gentle kiss on a child's forehead";
    document.getElementById("poetry").innerHTML = newpoetry;
  }
  
  function poetryEvent7() {
    var newpoetry = "touching a date's arm while walking side by side";
    document.getElementById("poetry").innerHTML = newpoetry;
  }
  
  function poetryEvent8() {
    var newpoetry = "cuddling with a roommate on the couch";
    document.getElementById("poetry").innerHTML = newpoetry;
  }
  
  function poetryEvent9() {
    var newpoetry = "an affectionate caress of their skin, in the middle of a movie";
    document.getElementById("poetry").innerHTML = newpoetry;
  }
  
  $(".rectangle1").click(poetryEvent1);
  $(".rectangle2").click(poetryEvent2);
  $(".rectangle3").click(poetryEvent3);
  $(".rectangle4").click(poetryEvent4);
  $(".rectangle5").click(poetryEvent5);
  $(".rectangle6").click(poetryEvent6);
  $(".rectangle7").click(poetryEvent7);
  $(".rectangle8").click(poetryEvent8);
  $(".rectangle9").click(poetryEvent9);