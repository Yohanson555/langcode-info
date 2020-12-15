const Lang = require("../src/Lang");

const data = {
    "name": "Spanish – United States",
    "code": "es-US",
    "hex": "540A",
    "dec": "21514"
};

test('creating Lang object', () => {
    const l = new Lang(data);

    expect(typeof l === 'object').toBe(true);

    expect(l.name()).toBe("Spanish");
    expect(l.code()).toBe("es-US");
    expect(l.fullName()).toBe("Spanish – United States");
    expect(l.hex()).toBe("540A");
    expect(l.dec()).toBe("21514");
    expect(l.locale()).toBe("es");
});

test('creating with no data given', () => {
    expect(() => {
        const l = new Lang();
    }).toThrow("Lang data must be an object");
});

test('creating with null data given', () => {
    expect(() => {
        const l = new Lang(null);
    }).toThrow("Lang data must be an object");
});

test('creating with undefined data given', () => {
    expect(() => {
        const l = new Lang(undefined);
    }).toThrow("Lang data must be an object");
});

test('creating with string data given', () => {
    expect(() => {
        const l = new Lang("some string");
    }).toThrow("Lang data must be an object");
});

// ----------------------------------------------------------------

test('creating with wrong name data given #1 - number', () => {
    const data = { name: 123 };

    expect(() => {
        const l = new Lang(data);
    }).toThrow("Lang name must be a string");
});

test('creating with wrong name data given #2 - object', () => {
    const data = { name: { "prop": "value" } };

    expect(() => {
        const l = new Lang(data);
    }).toThrow("Lang name must be a string");
});

test('creating with wrong name data given #3 - boolean', () => {
    const data = { name: false };

    expect(() => {
        const l = new Lang(data);
    }).not.toThrow();
});

//----------------------------------------------------------------

test('creating with wrong code data given #1 - number', () => {
    const data = { code: 123 };

    expect(() => {
        const l = new Lang(data);
    }).toThrow("Lang code must be a string");
});

test('creating with wrong code data given #2 - object', () => {
    const data = { code: { "prop": "value" } };

    expect(() => {
        const l = new Lang(data);
    }).toThrow("Lang code must be a string");
});

test('creating with wrong code data given #3 - boolean', () => {
    const data = { code: false };

    expect(() => {
        const l = new Lang(data);
    }).not.toThrow();
});

//----------------------------------------------------------------

test('creating with wrong hex data given #1 - number', () => {
    const data = { hex: 123 };

    expect(() => {
        const l = new Lang(data);
    }).toThrow("Lang hex must be a string");
});

test('creating with wrong hex data given #2 - object', () => {
    const data = { hex: { "prop": "value" } };

    expect(() => {
        const l = new Lang(data);
    }).toThrow("Lang hex must be a string");
});

test('creating with wrong hex data given #3 - boolean', () => {
    const data = { hex: false };

    expect(() => {
        const l = new Lang(data);
    }).not.toThrow();
});

//----------------------------------------------------------------

test('creating with wrong dec data given #1 - object', () => {
    const data = { dec: { "prop": "value" } };

    expect(() => {
        const l = new Lang(data);
    }).toThrow("Lang dec must be a string");
});

test('creating with wrong dec data given #2 - boolean', () => {
    const data = { dec: false };

    expect(() => {
        const l = new Lang(data);
    }).not.toThrow();
});

//----------------------------------------------------------------


test('testing .name() getter #1', () => {
    const data = {
        "name": "English"
    };

    const l = new Lang(data);

    expect(l.name()).toBe("English");
    expect(l.fullName()).toBe("English");
});

test('testing .name() getter #2', () => {
    const data = {
        "name": "English – US"
    };

    const l = new Lang(data);

    expect(l.name()).toBe("English");
    expect(l.fullName()).toBe("English – US");
});

test('testing .name() getter #3', () => {
    const data = {
        "name": "English – US something – other"
    };

    const l = new Lang(data);

    expect(l.name()).toBe("English");
    expect(l.fullName()).toBe("English – US something – other");
});


test('testing .name() getter #4 – with non-trimmed value', () => {
    const data = {
        "name": " English  – US something – other "
    };

    const l = new Lang(data);

    expect(l.name()).toBe("English");
    expect(l.fullName()).toBe("English  – US something – other");
});

test('testing .dec() getter #1', () => {
    const data = {
        "dec": "1234"
    };

    const l = new Lang(data);

    expect(l.dec()).toBe("1234");
});

test('testing .dec() getter #2 - non trimmed value', () => {
    const data = {
        "dec": "  1234    "
    };

    const l = new Lang(data);

    expect(l.dec()).toBe("1234");
});

test('testing .dec() getter #3 - number value', () => {
    const data = {
        "dec": 1234
    };

    const l = new Lang(data);

    expect(l.dec()).toBe("1234");
});