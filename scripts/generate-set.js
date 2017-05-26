var fs = require('fs');
var path = require('path');

const start = 4;

var total = `. This library sets the value at a specified store index
. with a specified value.
. Do not set anything below V004 with this script
. v0 is store index to set
. v1 is value to set at that index
N002 1
. v3 is counter
N003 ${start-1}
. check for index too low and halt if true
-
L003
L000
{?
H Cannot set store indexes lower than ${start}
}{
+ . reset run-up lever
L002
L002
}`;

for (let i = start; i < 1000; i++) {
	total += `
{?
. these blocks will run until it reaches the index it wants
+ . increment counter
L003
L002
S003
. subtract index from counter to see if negative
-
L003
L000
. if this was positive, you have found your set index
{?
. set indicated index with indicated value
*
L001
L002
S${i}
. do a negative calculation to set run up lever
-
L002
L003
}{
. reset the run-up lever if this wasn't your index
+
L002
L003
}
}`;
}

total += `
. comment to keep the chain from running off the engine`;

fs.writeFileSync(path.resolve('..', 'Library', 'get.ae'), total);
