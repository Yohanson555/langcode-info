import { Lang } from "../dist/Lang";

const data = {
  name: "Spanish – United States",
  code: "es-US",
  hex: "540A",
  dec: "21514",
};

test("creating Lang object", () => {
  const l = new Lang(data);

  expect(typeof l === "object").toBe(true);

  expect(l.name()).toBe("Spanish");
  expect(l.code()).toBe("es-US");
  expect(l.fullName()).toBe("Spanish – United States");
  expect(l.hex()).toBe("540A");
  expect(l.dec()).toBe("21514");
  expect(l.locale()).toBe("es");
});

test("testing .name() getter #1", () => {
  const data = {
    name: "English",
    hex: "",
    code: "",
    dec: "",
  };

  const l = new Lang(data);

  expect(l.name()).toBe("English");
  expect(l.fullName()).toBe("English");
});

test("testing .name() getter #2", () => {
  const data = {
    name: "English – US",
    hex: "",
    code: "",
    dec: "",
  };

  const l = new Lang(data);

  expect(l.name()).toBe("English");
  expect(l.fullName()).toBe("English – US");
});

test("testing .name() getter #3", () => {
  const data = {
    name: "English – US something – other",
    hex: "",
    code: "",
    dec: "",
  };

  const l = new Lang(data);

  expect(l.name()).toBe("English");
  expect(l.fullName()).toBe("English – US something – other");
});

test("testing .name() getter #4 – with non-trimmed value", () => {
  const data = {
    name: " English  – US something – other ",
    hex: "",
    code: "",
    dec: "",
  };

  const l = new Lang(data);

  expect(l.name()).toBe("English");
  expect(l.fullName()).toBe("English  – US something – other");
});

test("testing .dec() getter #1", () => {
  const data = {
    dec: "1234",
    hex: "",
    code: "",
    name: "",
  };

  const l = new Lang(data);

  expect(l.dec()).toBe("1234");
});

test("testing .dec() getter #2 - non trimmed value", () => {
  const data = {
    dec: "  1234    ",
    hex: "",
    code: "",
    name: "",
  };

  const l = new Lang(data);

  expect(l.dec()).toBe("1234");
});

test("testing .lex() getter #1", () => {
  const l = new Lang({ code: "en-EN", dec: "", hex: "", name: "" });

  expect(l.lex()).toBe("enEN");
});
