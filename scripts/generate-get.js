var fs = require('fs');
var path = require('path');

const start = 3;

var total = `. This library gets the value at a specified store index
. and stores it at V000.
. Do not get anything below V003 with this script

. v0 is store index to get from
N001 1
. v2 is counter
N002 ${start-1}
. check for index too low and halt if true
-
L002
L000
{?
H Cannot get store indexes lower than ${start}
}{
+ . reset run-up lever
L001
L001
}
`;

for (let i = start; i < 1000; i++) {
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
. migrate this index into v0
*
L${i}
L001
S000
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

fs.writeFileSync(path.resolve('..', 'Library', 'get.ae'), total);
