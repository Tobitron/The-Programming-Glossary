var glossaryEntriesData = []

var glossaryEntries = [
  {word: "Variable", definition: "First of all, forget the definition of variable you learned in high school. This is different. In programming, a variable is a placeholder for something else. Think of it like container that you can fill with whatever you want. You can add to it, take things out of it, replace things. It's basically an extremely versatile box."},
  {word: "String", definition: "A string is text. Best way to explain it is with an example: add these two strings together '10' + '10' = '1010'. Just like how adding 'cow' + 'cow' gives you 'cowcow'. Or take 't' * 't'. That's silly! You can't multiply the letter t by the letter t. Now go read about integers."},
  {word: "Integer", definition: "These are numbers! The same numbers you know from math class. 10 + 10 = 20.  5 * 2 = 10. Contrast this with strings. They're characters that can look an awful lot like numbers, but don't be fooled. They're text."},
  {word: "Float", definition: "Floats are like integers except they can have decimals. I'm actually not sure why there's a difference. At first glance it seems stupid that they exist. But some very serious bugs could result. Like finance stuff. That's right, the premise of office space would be impossible if floats didn't exist."},
  {word: "Function", definition: "One of the key concepts of programming, a function is chunk of code that runs other code. Think of them like a cute little factory with machines and assembly lines and factory robots. Give your tv factory the raw materials it needs to make a tv, and out pops a tv. Same thing with functions. Give it a length and width and it will multiple them together and spit out area all day long."},
  {word: "Method", definition: "A method is a function that acts on an object. It's essentially the same thing, but gets a different name based on context. It's like a fiddle. For the longest time I had no idea what the hell a fiddle was. I knew country musicians liked these strange devices, but they remained mysterious. Turns out a fiddle is literally just a violin! When you play classical music a violin is a violin. When you play country music/bluegrass/folk etc a violin magically becomes a fiddle. Same thing with methods. The functions you know and love are called methods when used in the context of objects. <br><br> <p>It's actually a bit more complicated, classes give methods some extra functionality that normal functions don't have, but that all has to do with classes and will make sense when you understand classes, so don't worry about it.</p>"},
  {word: "Parameter", definition: "Often when you creat a method you'll give it a parameter or many parameters. This is information that the method can use doing its thing, whatever that thing is. Quick example. <p><code>def area(length, width) " + "<br>" + " Length * height "  + "<br> "+ " End </code></p> An area calculating method is going to be in deep trouble if it doesn't have a length and width to calculate. Luckily parameters provides that information."},
  {word: "Argument", definition: "This is super subtle but it's important. Remember how you just read that methods can take a parameter? Well when you're actually using a method, and give it its parameter, it's now called an argument! That's right, parameters become arguments when they're put to use. Confusing and subtle but you'll hear it a lot so try to remember."},
  {word: "Pass", definition: "When you give a function it's paramater, you are said to pass an argument. I don't know why people use the verb 'pass', but they do, and that's what it means."},
  {word: "Invoke", definition: "When I hear invoke, I immediately think of wizards, and it turns out to be a good metaphor. Think of a function like a spell in your wizard arsenal. When you need a fireball, you invoke your fireball spell. When you need to capitalize a string, you invoke your capitalize function."},
  {word: "Call", definition: "As far as I can tell, call is the same thing as invoke. When you use a function, you call that function. There seems to be some disagreement here, see this " + '<a href="https://www.quora.com/What-is-the-difference-between-call-and-invoke">Quora thread</a>' + ". The guy with the most upvotes says they're the same, and he claims to be able to solve a Rubik's cube in 1 minute 28 seconds, so he must be an authority. In any case, if you're just starting out I think it's pretty safe to assume that call == invoke."},

  // {word: "", definition: ""},
]

for (var i = 0; i < glossaryEntries.length; i++) {
  glossaryEntriesData.push(
    "<div class='panel panel-default'>" +
      "<div class='panel-heading'>" +
        "<h4 class='panel-title'>" +
          "<a data-toggle='collapse' data-parent='#accordion' href='#collapse" + (i + 1) + "'>" + glossaryEntries[i].word + "</a>" +
        "</h4>" +
      "</div>" +
      "<div id='collapse" + (i + 1) +  "'" +  "class='panel-collapse collapse'>" +
        "<div class='panel-body'> " + glossaryEntries[i].definition + "</div>" +
      "</div>" +
    "</div>")
};


function createHTML() {
  var html = ""
  for (var i = 0; i < glossaryEntriesData.length; i++) {
    html += glossaryEntriesData[i];
  };
  return html;
}

$(".panel-group").append(createHTML());
