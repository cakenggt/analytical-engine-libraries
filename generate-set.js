var fs = require('fs');

var start = `. This library sets the value at a specified store index
. with a specified value.
. Do not set anything below V003 with this script
. v0 is store index to set
. v1 is value to set at that index
N002 1`;

var end = `
. something to keep the chain from going off the end
N002 1`;

for (let i = 0; i < 1000; i++) {
	start += `
- . decrement index
L000
L002
S000
{?`;

	end = `
}{
*
L002
L001
S${i}
}` + end;
}

fs.writeFileSync('set.ae', start+end);
