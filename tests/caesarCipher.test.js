import caesarCipher from "../src/caesarCipher";

test("shifts lowercase letters", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("wraps from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("preserves letter case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("ignores punctuation and spaces", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});