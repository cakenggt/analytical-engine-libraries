var fs = require('fs');
var path = require('path');

const start = 30;

var total = `. This library writes a character in annotation mode represented by the char code provided
. This library only prints characters with codes greater than or equal to 30 (control codes are absent).
. This library uses slot 0 for input.
. This library uses slots 1 and 2 for variables.

. v0 is the char code to write
N001 1
. v2 is the counter
N002 ${start-1}
. Make sure the run-up lever is reset
+
L001
L001
`;

for (let i = start; i < 128; i++) {
	total += `
{?
. these blocks will run until it reaches the index it wants
+ . increment counter
L002
L001
S002
. subtract index from counter to see if negative
-
L002
L000
. if this was positive, you have found your get index
{?
. print character
A write annotation ${String.fromCharCode(i)}
. do a negative calculation to set run up lever
-
L001
L002
}{
. reset the run-up lever if this wasn't your index
+
L001
L002
}
}`;
}

total += `
. comment to keep the chain from running off the engine`;

fs.writeFileSync(path.resolve('..', 'Library', 'printstr.ae'), total);
