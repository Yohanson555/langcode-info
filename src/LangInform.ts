import { Lang, LangData } from "./Lang";
import Languages from "./data/lang";
import CodeToHex from "./data/code-to-hex";
import DecToHex from "./data/dec-to-hex";

class LangInform {
  static langByCode(code:string): Lang {
    if (!code || typeof code !== "string") {
      throw new Error("Invalid language code provided: string expected");
    }

    let hex = CodeToHex[code];
    
    if (!hex) {
      throw new Error(
        "Invalid language code provided: no hex value found for code: " + code
      );
    }

    return new Lang(Languages[hex]);
  }

  static langByHex(hex:string): Lang {
    if (!hex || typeof hex !== "string") {
      throw new Error("Invalid language hex provided: string expected");
    }

    const lang = Languages[hex];

    if (!lang) {
      throw new Error(
        "Invalid language hex provided: no lang value found for code: " + hex
      );
    }

    return new Lang(lang);
  }

  static langByDec(dec:string): Lang {
    if (!dec || (typeof dec !== "string" && typeof dec !== "number")) {
      throw new Error(
        "Invalid language decimal provided: string or number expected"
      );
    }

    const hex = DecToHex[dec.toString()];

    if (!hex) {
      throw new Error(
        "Invalid language decimal provided: no hex value found for decimal: " +
          dec
      );
    }

    return new Lang(Languages[hex]);
  }

  static list(): LangData[] {
    return Object.values(Languages);
  }

  static map() {
    return Languages;
  }

  static codes(): string[] {
    return Object.keys(Languages);
  }
}

export default LangInform;
