// one-word-from-grandma — "One Word From Grandma".
// One original word, at most 30 characters: the word a grandma would
// text about AI. The program writes that word to /output/entry.txt.
//
// Why this word: "doohickey" is the classic grandma word for a gadget
// she cannot name — which is exactly what she would text about AI.
// She does not know what the thing is called, so she calls it a
// doohickey, and the bafflement is the joke: warm, a little lost, and
// funny in a single word with no caption needed. It is tied to
// machines, not to any subject at all — a doohickey is what you call
// a gadget, a remote, a robot, the blinking box on the counter —
// and it is fresh where "robot", "Skynet" or "Siri" would be the
// obvious picks. Nine letters, instantly readable, and it sounds
// like her thumb-typing it to a grandchild.
//
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The word, exactly as submitted. One word, no trailing newline in
// the output file.
const WORD = 'Doohickey';

// The gate allows 1 to 30 characters, so fail loudly rather than write
// an invalid entry if the word ever grows past the limit.
if (WORD.length < 1 || WORD.length > 30) {
  throw new Error(`entry word is ${WORD.length} characters, must be 1-30`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), WORD, 'utf8');
