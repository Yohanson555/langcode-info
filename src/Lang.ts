export type LangData = {
  name?: string;
  code?: string;
  hex?: string;
  dec?: string;
};

export class Lang {
  private _name: string;
  private _code: string;
  private _hex: string;
  private _dec: string;

  constructor(l: LangData) {
    this._name = l.name || '';
    this._code = l.code || '';
    this._hex = l.hex || '';
    this._dec = l.dec || '';
  }

  code(): string {
    return this._code;
  }

  lex(): string {
    return this._code.replace(/\W|\s/g, "");
  }

  name(): string {
    const arr = this._name.split(" – ");

    return String(arr[0]).trim();
  }

  fullName(): string {
    return String(this._name).trim();
  }

  hex(): string {
    return String(this._hex).trim();
  }

  dec(): string {
    return String(this._dec).trim();
  }

  locale(): string {
    const arr = this._code.split("-");

    return String(arr[0]).trim();
  }
}
