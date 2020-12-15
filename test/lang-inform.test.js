const LangInform = require("../src/LangInform");

test('LangInform.codes() test', () => {
    const codes = LangInform.codes();

    expect(codes.length > 200).toBe(true);
    expect(typeof codes[0] === 'string').toBe(true);
});

test('LangInform.list() test', () => {
    const list = LangInform.list();

    expect(list.length > 200).toBe(true);
    expect(typeof list[0] === 'object').toBe(true);
});

test('LangInform.map() test', () => {
    const map = LangInform.map();

    expect(typeof map === 'object').toBe(true);
    expect(typeof map["0409"] === 'object').toBe(true);
});

test("queue request by code", () => {
    expect(LangInform.langByCode("es-US").name()).toBe("Spanish");
    expect(LangInform.langByCode("es-US").code()).toBe("es-US");
    expect(LangInform.langByCode("es-US").fullName()).toBe("Spanish – United States");
    expect(LangInform.langByCode("es-US").hex()).toBe("540A");
    expect(LangInform.langByCode("es-US").dec()).toBe("21514");
    expect(LangInform.langByCode("es-US").locale()).toBe("es");
});

test("queue request by hex", () => {
    expect(LangInform.langByHex("540A").name()).toBe("Spanish");
    expect(LangInform.langByHex("540A").code()).toBe("es-US");
    expect(LangInform.langByHex("540A").fullName()).toBe("Spanish – United States");
    expect(LangInform.langByHex("540A").hex()).toBe("540A");
    expect(LangInform.langByHex("540A").dec()).toBe("21514");
    expect(LangInform.langByHex("540A").locale()).toBe("es");
});

test("queue request by dec as string", () => {
    expect(LangInform.langByDec("21514").name()).toBe("Spanish");
    expect(LangInform.langByDec("21514").code()).toBe("es-US");
    expect(LangInform.langByDec("21514").fullName()).toBe("Spanish – United States");
    expect(LangInform.langByDec("21514").hex()).toBe("540A");
    expect(LangInform.langByDec("21514").dec()).toBe("21514");
    expect(LangInform.langByDec("21514").locale()).toBe("es");
});

test("queue request by dec as number", () => {
    expect(LangInform.langByDec(21514).name()).toBe("Spanish");
    expect(LangInform.langByDec(21514).code()).toBe("es-US");
    expect(LangInform.langByDec(21514).fullName()).toBe("Spanish – United States");
    expect(LangInform.langByDec(21514).hex()).toBe("540A");
    expect(LangInform.langByDec(21514).dec()).toBe("21514");
    expect(LangInform.langByDec(21514).locale()).toBe("es");
});

//----------------------------------------------------------------

test("error testing - wrong value format given to langByCode", () => {
    expect(() => {
        const l = (LangInform.langByCode(1234));
    }).toThrow("Invalid language code provided: string expected");
});

test("error testing - wrong value given to langByCode", () => {
    expect(() => {
        const l = (LangInform.langByCode("test-TEST"));
    }).toThrow("Invalid language code provided: no hex value found for code: test-TEST");
});

//----------------------------------------------------------------

test("error testing - wrong value format given to langByHex", () => {
    expect(() => {
        const l = (LangInform.langByHex(1234));
    }).toThrow("Invalid language hex provided: string expected");
});

test("error testing - wrong value given to langByHex", () => {
    expect(() => {
        const l = (LangInform.langByHex("11111"));
    }).toThrow("Invalid language hex provided: no lang value found for code: 11111");
});

//----------------------------------------------------------------

test("error testing - wrong value format given to langByDec", () => {
    expect(() => {
        const l = (LangInform.langByDec(true));
    }).toThrow("Invalid language decimal provided: string or number expected");
});

test("error testing - wrong value given to langByDec", () => {
    expect(() => {
        const l = (LangInform.langByDec("11111"));
    }).toThrow("Invalid language decimal provided: no hex value found for decimal: 11111");
});

//----------------------------------------------------------------