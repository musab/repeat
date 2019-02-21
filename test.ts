import {
  assertEqual,
  test,
  runTests
} from "https://deno.land/x/testing/mod.ts";
import { repeat } from "mod.ts";

test({
  name: "repeat",
  fn: () => {
    assertEqual(repeat("foo", 1), "foo");
    assertEqual(
      repeat("foo-bar", 10),
      "foo-barfoo-barfoo-barfoo-barfoo-barfoo-barfoo-barfoo-barfoo-barfoo-bar"
    );
    assertEqual(repeat("foo", 9007199254740992), "foo");
    assertEqual(repeat("foo..bar", 2), "foo..barfoo..bar");
    assertEqual(
      repeat("  foo  bar  ", 3),
      "  foo  bar    foo  bar    foo  bar  "
    );
    assertEqual(repeat(" ", 3), "   ");
  }
});

test({
  name: "invalid inputs",
  fn: () => {
    // @ts-ignore
    assertEqual(repeat(2, 1), 2);
    // @ts-ignore
    assertEqual(repeat(undefined, 1), undefined);
    // @ts-ignore
    assertEqual(repeat(true, 10), true);
    // @ts-ignore
    assertEqual(repeat({}, 10), {});
  }
});

runTests();
