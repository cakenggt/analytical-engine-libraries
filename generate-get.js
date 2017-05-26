var fs = require('fs');

var start = `. This library gets the value at a specified store index
. and stores it at V000.
. Do not get anything below V003 with this script

. v0 is store index to get from
N001 1
* . move index to V2
L000
L001
S002
- . decrement index
L002
L001
S002`;

var end = '';

for (let i = 1; i < 1000; i++) {
	start += `
{?
* . store value at index ${i} in V0
L${i}
L001
S000
- . decrement index
L002
L001
S002`;

	end += `
}`;
}

end += `
. something to keep the chain from going off the end
N001 0`;

fs.writeFileSync('get.ae', start+end);
