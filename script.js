console.log("welcome");

let title = document.getElementById("title");
let myButton = document.getElementById ("mybutton");
let myText = document.getElementById("container");

myText.style.margin="25%";

myText.style.fontFamily="helvetica"
myText.style.fontSize="2em";
title.style.color="orange";

myButton.style.color= "purple";
myButton.style.borderRadius="10px";
myButton.addEventListener("click",function colorchange() {
    myButton.style.color= "blue";
})

// myText.style.backgroundColor="green";





var start,middle,end;
start = ["ball", "clock", "dancer", "rock", "boy", "tea"];
middle = ["poured", "said", "made", "whipped", "talked", "rolled", "painted", "breathed", "wrote", "coded"];
end = ["you", "money", "art", "toys", "cloth", "music", "gold", "magic", "titan", "javascript"];

function sentence() {
    var num1 = Math.floor(Math.random() * 6);
    var num2 = Math.floor(Math.random() * 10);
    var num3 = Math.floor(Math.random() * 10);

    var content = "The " + start[num1] + " " + middle[num2] + " " + end[num3] + ".";
  document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";
};

// let sentence= document.getElementById="sentence";

sentence();

