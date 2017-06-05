var fs = require('fs');
var path = require('path');

const limit = 23;

var total = `. This library compresses a string so it can be stored in a single column.
. It can only take in strings up to 23 chars long.
. The string is stored as a base-128 number.

. v0 is the length of the string
. v1-23 are the characters of the string
. v24 is constant ${limit+1}
. v25 is constant 1
N024 ${limit+1}
N025 1
-
L000
L024
{?
H cannot store strings longer than ${limit} chars
}
. reset run up lever
+
L025
L025
`;

for (let i = 0; i < limit; i++) {
	total += `
`;
}

total += `
. comment to keep the chain from running off the engine`;

fs.writeFileSync(path.resolve('..', 'Library', 'compressstring.ae'), total);
