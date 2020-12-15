const Languages = require("./data/lang.json");
const CodeToHex = require("./data/code-to-hex.json");
const DecToHex = require("./data/dec-to-hex.json");

const Lang = require("./Lang");

class LangInform {
    static langByCode(code) {
        if (!code || typeof code !== "string") {
            throw new Error("Invalid language code provided: string expected");
        }

        const hex = CodeToHex[code];

        if (!hex) {
            throw new Error("Invalid language code provided: no hex value found for code: " + code);
        }

        return new Lang(Languages[hex]);
    }

    static langByHex(hex) {
        if (!hex || typeof hex !== "string") {
            throw new Error("Invalid language hex provided: string expected");
        }

        const lang = Languages[hex];

        if (!lang) {
            throw new Error("Invalid language hex provided: no lang value found for code: " + hex);
        }

        return new Lang(lang);
    }

    static langByDec(dec) {
        if (!dec || (typeof dec !== "string" && typeof dec !== "number")) {
            throw new Error("Invalid language decimal provided: string or number expected");
        }

        const hex = DecToHex[dec.toString()];

        if (!hex) {
            throw new Error("Invalid language decimal provided: no hex value found for decimal: " + dec);
        }

        return new Lang(Languages[hex]);
    }

    static list() {
        return Object.values(Languages);
    }

    static map() {
        return Languages;
    }

    static codes() {
        return Object.keys(Languages);
    }
}

module.exports = LangInform;