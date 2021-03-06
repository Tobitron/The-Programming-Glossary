var glossaryEntriesData = []

var glossaryEntries = [
  {word: "Variable", definition: "First of all, forget the definition of variable you learned in high school. This is different. In programming, a variable is a placeholder for something else. To conceptualize how you'd use it, think of it like a container that you can fill with whatever you want. You can add to it, take things out of it, replace things. It's like an an extremely versatile box."},
  {word: "Declare", definition: "When first creating a variable, you are said to 'declare' it. I do declare that <code>var drink = 'Sweat Tea'</code>"},
  {word: "Variable Assignment", definition: "Assignment is the act of telling a variable to be something. Let's say you declare a variable: <code>var king  = 'Robert'</code>. Well let's say Robert is killed by a boar and we now need to reassign the variable to <code>king = 'Joffrey'</code>. There you go, king is now Joffrey. Variable assignment."},
  {word: "String", definition: "A string is text. Best way to explain it is with an example: add these two strings together '10' + '10' = '1010'. Just like how adding 'cow' + 'cow' gives you 'cowcow'. Or take 't' * 't'. That's silly! You can't multiply the letter t by the letter t. Now go read about integers."},
  {word: "Integer", definition: "These are numbers! The same numbers you know from math class. 10 + 10 = 20.  5 * 2 = 10. Contrast this with strings. They're characters that can look an awful lot like numbers, but don't be fooled. They're text."},
  {word: "Float", definition: "Floats are like integers except they can have decimals. I'm working on a good explanation of why they're necessary, in the meantime checkout this <a href='http://stackoverflow.com/questions/2100490/floating-point-inaccuracy-examples'>SO thread</a>."},
  {word: "Function", definition: "One of the key concepts of programming, a function is chunk of code that runs other code. Think of them like a cute little factory with machines and assembly lines and factory robots. Give your tv factory the raw materials it needs to make a tv, and out pops a tv. Same thing with functions. Give it a length and width and it will multiple them together and spit out area all day long."},
  {word: "Method", definition: "A method is a function that acts on an object. It's essentially the same thing, but gets a different name based on context. It's like a fiddle. For the longest time I had no idea what the hell a fiddle was. I knew country musicians liked these strange devices, but they remained mysterious. Turns out a fiddle is literally just a violin! When you play classical music a violin is a violin. When you play country music/bluegrass/folk etc a violin magically becomes a fiddle. Same thing with methods. The functions you know and love are called methods when used in the context of objects. <br><br> <p>It's actually a bit more complicated, classes give methods some extra functionality that normal functions don't have, but that all has to do with classes and will make sense when you understand classes, so don't worry about it.</p>"},
  {word: "Parameter", definition: "Often when you creat a method you'll give it a parameter or many parameters. This is information that the method can use doing its thing, whatever that thing is. Quick example. <p><code>def area(length, width) " + "<br>" + " Length * height "  + "<br> "+ " End </code></p> An area calculating method is going to be in deep trouble if it doesn't have a length and width to calculate. Luckily parameters provides that information."},
  {word: "Argument", definition: "This is super subtle but it's important. Remember how you just read that methods can take a parameter? Well when you're actually using a method, and give it its parameter, it's now called an argument! That's right, parameters become arguments when they're put to use. Confusing and subtle but you'll hear it a lot so try to remember."},
  {word: "Pass", definition: "When you give a function it's paramater, you are said to pass an argument. I don't know why people use the verb 'pass', but they do, and that's what it means."},
  {word: "Invoke", definition: "When I hear invoke, I immediately think of wizards, and it turns out to be a good metaphor. Think of a function like a spell in your wizard arsenal. When you need a fireball, you invoke your fireball spell. When you need to capitalize a string, you invoke your capitalize function."},
  {word: "Call", definition: "As far as I can tell, call is the same thing as invoke. When you use a function, you call that function. There seems to be some disagreement here, see this " + '<a href="https://www.quora.com/What-is-the-difference-between-call-and-invoke">Quora thread</a>' + ". The guy with the most upvotes says they're the same, and he claims to be able to solve a Rubik's cube in 1 minute 28 seconds, so he must be an authority. In any case, if you're just starting out I think it's pretty safe to assume that call == invoke."},
  {word: "Callback", definition: "I'm going to reprint an answer from Stack Overflow because it's awesome. <br><br>I am going to try to keep this dead simple. A 'callback' is any function that is called by another function which takes the first function as a parameter. A lot of the time, a 'callback' is a function that is called when something happens. That something can be called an 'event' in programmer-speak. <br><br>Imagine this scenario: You are expecting a package in a couple of days. The package is a gift for your neighbor. Therefore, once you get the package, you want it brought over to the neighbors. You are out of town, and so you leave instructions for your spouse. You could tell them to get the package and bring it to the neighbors. <br><br>If your spouse was as stupid as a computer, they would sit at the door and wait for the package until it came (NOT DOING ANYTHING ELSE) and then once it came they would bring it over to the neighbors. But there's a better way. Tell your spouse that ONCE they receive the package, they should bring it over the neighbors. Then, they can go about life normally UNTIL she receives the package. <br><br>In our example, the receiving of the package is the 'event' and the bringing it to the neighbors is the 'callback'. Your spouse 'runs' your instructions to bring the package over only when the package arrives. Much better!"},
  {word: "Boolean", definition: "A boolean is a data type that can only have two data types: true or false. They're usually used within the context of conditionals i.e. if true, do this thing. If false, do this other thing."},
  {word: "Comparison Operators", definition: "Do you remember x > y from math class? Great, you've used comparison operators! It's often necessary to compare two values: foo == baz, bar != foo, a >= b. These are all comaprisons, the thing doing the comparing is the 'comparison operator.'"}
  {word: "Client/Server", definition: "You'll probably encounter client and server in the context of web development. It exists in other contexts too with the same basic relationship. Essentially, the server is a computer with some sort of a resource that waits to be called by a client. When the client needs a resource, it requests it from the server. On the web a person's web browser is the client, the server is whatever computer is receiving calls from the client and sending instructions back using HTTP. <br/> <br/> Consider this example. Two friends, Clint and Servio, are cooking a cake together. Clint is mixing the ingredients together, hands covered in flour, eggs, and sugar. He's ready for the next step so he calls out 'What next?' to Servio. Servio looks in the cookbook and tells him what to do next. Servio could have called his mom, he could have run to the other room for a different cookbook, watched a video. Clint doesn't really care, all he wants is the information he needs to move forward and complete the next step. How Servio got it is irrelevant to him. I hope by this point you figured out that Clint represents the Client and Servio represents the server."},
  {word: "Ternary", definition: "Basically a fancy way of saying conditional. You may come across ternary expression or ternary operator. Some languages allow you to write conditonals using shorthand with the ternary operator. Here it is in Javascript: condition ? expr1 : expr2. English translation: If condition is true, do expr1, if it's false, do expr2."}
  {word: "Populate", definition: "Populate means fill with data. If you populate a database you're putting data into a database that was previously empty. If you populate an object you're assigning values to the object's fields."},
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
