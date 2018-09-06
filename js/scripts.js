$(document).ready(function(){
    $("button#meow").click(function() {
      $("ul#Cats").prepend("<li>Meow!</li>");
      $("ul#Dogs").prepend("<li>Woof!</li");

  });
  $("button#whoof").click(function() {
    $("ul#Cats").prepend("<li>rawr!</li>");
    $("ul#Dogs").prepend("<li>Bark Bark!</li");
  });
  $("button#pet").click(function() {
    $("ul#Cats").prepend("<li>Purr!</li>");
    $("ul#Dogs").prepend("<li>Whoof!!</li");
  });
});
