const test = require('ava');
const fs = require('fs');
const path = require('path');

const AE = require('analytical-engine');

async function aeTestFromFiles(t, cardFile, printerFile, store) {
	const cards = fs.readFileSync(path.join('test', cardFile), 'utf8');
	const printer = fs.readFileSync(path.join('test', printerFile), 'utf8');
	await aeTest(t, cards, printer, store);
}

async function aeTest(t, cards, printer, store) {
	const eng = new AE.Interface();
	eng.submitProgram(cards);
	eng.runToCompletion();

	t.falsy(eng.annunciator.L_output);
	if (printer) {
		// startsWith gets rid of the trailing line
		t.true(printer.replace(/\r\n/g, '\n').startsWith(eng.printer.O_output));
	}
	if (store) {
		for (let property in store) {
			if (store.hasOwnProperty(property)) {
				t.is(eng.store.get(property).value, store[property]);
			}
		}
	}
}

test('lmc', aeTestFromFiles, 'lmctest.ae', 'lmcprint.txt', null);
test('printchar', aeTestFromFiles, 'printchartest.ae', 'printcharprint.txt', null);
test('printstring', aeTestFromFiles, 'printstringtest.ae', 'printstringprint.txt', null);
test('storestring', aeTestFromFiles, 'storestringtest.ae', 'storestringprint.txt', null);
test('setandget', aeTestFromFiles, 'setandgettest.ae', 'setandgetprint.txt', null);
