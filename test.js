const { VILLAGERS, UNIVERSAL_LOVED_NOTE } = require("./data.js");

let pass = 0;
let fail = 0;

function assert(cond, msg) {
  if (cond) {
    pass++;
  } else {
    fail++;
    console.error("FAIL: " + msg);
  }
}

function findVillager(name) {
  return VILLAGERS.find((c) => c.name === name);
}

assert(VILLAGERS.length === 53, `villager count should be 53, got ${VILLAGERS.length}`);

const aaliyah = findVillager("Aaliyah");
assert(!!aaliyah, "Aaliyah should exist");
assert(aaliyah.loved.includes("Hummus"), "Aaliyah loved includes Hummus");
assert(aaliyah.loved.includes("Luwak Coffee"), "Aaliyah loved includes Luwak Coffee");
assert(aaliyah.loved.includes("White Hibiscus"), "Aaliyah loved includes White Hibiscus");

const yuri = findVillager("Yuri");
assert(!!yuri, "Yuri should exist");
assert(yuri.loved.some((g) => g.toLowerCase().includes("pink diamond")), "Yuri loved includes Pink Diamond directly");

const jim = findVillager("Jim");
assert(!!jim, "Jim should exist");

assert(typeof UNIVERSAL_LOVED_NOTE === "string" && UNIVERSAL_LOVED_NOTE.length > 0,
  "the Pink Diamond universal claim is disclosed as a note, not silently merged into every list");

for (const c of VILLAGERS) {
  assert(typeof c.name === "string" && c.name.length > 0, `villager has a name: ${JSON.stringify(c)}`);
  assert(Array.isArray(c.loved) && c.loved.length > 0, `villager ${c.name} has a non-empty loved list`);
}

console.log(`${pass} passed, ${fail} failed`);
process.exit(fail > 0 ? 1 : 0);
