// Spotlight @crisxai5: AI & Crypto Expert on X — make.fun entry (Node 22, stdlib only).
//
// main.ts prints the intro post text for @crisxai5, then copies POST.json from
// the repository root to /output/POST.json, where the house gate reads it.
// The entry is the X post itself: post the text below (with an original image
// or short video attached) from a public X account, then put the post's address
// in POST.json before submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const INTRO =
  'Stop scrolling — @crisxai5 is the AI & crypto expert your feed is missing. ' +
  'Sharp takes on AI agents, crypto insights & Web3 innovation, every day. ' +
  'Follow now. https://x.com/crisxai5 #AI #Crypto #AIAgents #Web3 makefun-skate-hawk-timber';

console.log(INTRO);

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
