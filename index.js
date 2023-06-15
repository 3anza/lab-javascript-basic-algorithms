//Iteration 1:

const hacker1 = "Aladdin";
console.log(`"The driver's name is ${hacker1}`);

const hacker2 = "Jasmin";
console.log(`"The navigator's name is ${hacker2}`);

//Iteration 2:

if (hacker1.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length}.`);
} else {
  `Wow, you both have equally long names, ${hacker1.length}!`;
}
console.log(`${hacker1} ${hacker1.length}`);

// Iteration 3.1:

const letters = hacker1.split("");
console.log(hacker1.toUpperCase().split("").join(" "));

// 3.2

let wordReversed = " ";
for (let i = hacker2.length - 1; i >= 0; i--) {
  const char = hacker2[i];
  wordReversed += char;
}

console.log(wordReversed);

// 3.3

let result1 = hacker1.localeCompare(hacker2);

if (result1 < 0) {
  console.log(`The driver's name goes first.`);
} else if (result1 > 0) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// Bonus 1.1:

// Bonus 1.2 :

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales interdum erat nec egestas. Nam accumsan sapien in nibh luctus vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi laoreet, tortor ac gravida rutrum, enim libero mattis lacus, eu venenatis leo ex sit amet turpis. Maecenas at volutpat est. Quisque blandit orci elit, ut elementum tellus ultrices ac. Suspendisse accumsan justo interdum est mollis auctor. In at luctus nunc.

Nullam finibus nisl sem, ac euismod purus venenatis non. Cras elementum at magna congue laoreet. Praesent cursus leo eget enim maximus consequat. Donec hendrerit lacus vel venenatis pretium. Nunc vel malesuada ligula. Vivamus ultrices magna et justo egestas vestibulum. Praesent erat lacus, tincidunt ut nulla ac, euismod suscipit sapien. Curabitur sagittis est nulla. Nunc congue tristique congue. In id iaculis odio. Nunc vehicula felis urna, eget lacinia ex dictum ac.

Donec lacinia purus metus, at lobortis justo euismod ac. Integer vitae tellus feugiat, auctor est et, laoreet metus. Maecenas non consequat lorem. Phasellus sed nibh non ipsum dapibus consectetur. Nullam vulputate turpis nec libero sagittis mollis id faucibus lectus. Sed eu bibendum sem. Donec lectus lectus, convallis imperdiet diam sit amet, ornare ornare tortor. Vestibulum at tellus ante. Nulla facilisi. Vivamus in accumsan leo, at euismod nisl. Quisque pharetra porttitor dui, vitae accumsan nunc interdum quis.`;

let total1 = 1;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    total1++;
  }
}

console.log("words: " + total1);

let total = 0;

for (let i = 0; i < longText.length; i++) {
  const twoChars = longText[i] + longText[i + 1];
  if (twoChars === "et") {
    total++;
  }
}

console.log("total: ", total);

// Bonus 2:


