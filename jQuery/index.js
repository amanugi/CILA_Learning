// Styles using jQuery
$("h1").addClass("heading");
$("button").addClass("btn");

// Manipulating text using jQuery
// $("button").text("Yes Click Me");
// $("button").html("<em>Hey</em>");   // html is just like innerhtml in vanilla javascript

// Manipulating attributes using jQuery
console.log($("img").attr("src"));  // getting attributes
$("a").attr("href", "http://algoexpert.io");     // setting the attribute

// Adding EventListeners to jQuery
$("button").click(function(){
  $("h1").css("color", "purple");
});

$("h1").on("mouseover", function(){
  $("h1").css("color", "brown");
});


// $("input").keypress(function(event){
//   console.log(event.key);
// });

$("body").keypress(function(event){
  $("h1").html(event.key);
});

// Animations in jQuery
$("button").on("click", function(){
  $("h1").slideUp().slideDown().animate({opacity : 0.5});
});
