class Lang {
    constructor(data) {
        if (!data || typeof data !== "object") {
            throw new Error("Lang data must be an object");
        }

        const { name, code, hex, dec } = data;

        if (name && typeof name === "string") {
            this._name = name;
        } else if (name) {
            throw new Error("Lang name must be a string");
        }

        if (code && typeof code === "string") {
            this._code = code;
        } else if (code) {
            throw new Error("Lang code must be a string");
        }

        if (hex && typeof hex === "string") {
            this._hex = hex;
        } else if (hex) {
            throw new Error("Lang hex must be a string");
        }

        if (dec && (typeof dec === "string" || typeof dec === "number")) {
            this._dec = dec;
        } else if (dec) {
            throw new Error("Lang dec must be a string or number");
        }
    }

    code() {
        return this._code;
    }

    name() {
        const arr = this._name.split(" – ");

        return String(arr[0]).trim();
    }

    fullName() {
        return String(this._name).trim();
    }

    hex() {
        return String(this._hex).trim();
    }

    dec() {
        return String(this._dec).trim();
    }

    locale() {
        const arr = this._code.split("-");

        return String(arr[0]).trim();
    }
}

module.exports = Lang;