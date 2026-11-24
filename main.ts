import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I fixed one typo by rewriting the service, deleting the tests, and renaming the outage 'a bold new direction'.";

const points = [...LINE];
if (points.length < 1 || points.length > 200) {
  throw new Error(`entry must be 1-200 code points, got ${points.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${points.length} code point(s) to /output/entry.txt`);
