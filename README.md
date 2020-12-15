## Overview

Lightweight module to get language info by: code, hex code or decimal code;

Also allows to receive all know languages as an array, a map, or a hex codes list;

## Methods

All methods of `LangInform` are static and can be called directly.

- `LangInform.langByCode(code)` - returns `Lang` object for language by it's code(string expected). Watch examples section for use cases.

- `LangInform.langByHex(code)` - returns `Lang` object for language by it's hex code (string expected). Watch examples section for use cases.

- `LangInform.langByDec(code)` - returns `Lang` object for language by it's decimal code(string or number expected). Watch examples section for use cases.

- `LangInform.list()` - returns all known languages as an array of pure objects (not a Lang objects).

- `LangInform.map()` - returns all known languages as an map of pure objects (not a Lang objects), where key is a hex code of language.

- `LangInform.codes()` - returns all known hex codes as an array


## `Lang` object methods

- `Lang.name()` - returns language short name as a `string`;
- `Lang.fullName()` - returns language full name as a `string`;
- `Lang.code()` - returns language code as a `string`;
- `Lang.hex()` - returns language hex code as a `string`;
- `Lang.dec()` - returns language decimal code as a `string`;
- `Lang.locale()` - returns language locale as a `string`;

## Examples

`LangInform.langByCode()` method exampels: 

```js
    LangInform.langByCode("es-US").name(); //"Spanish"
    LangInform.langByCode("es-US").code(); //"es-US"
    LangInform.langByCode("es-US").fullName(); //"Spanish – United States"
    LangInform.langByCode("es-US").hex(); //"540A"
    LangInform.langByCode("es-US").dec(); //"21514"
    LangInform.langByCode("es-US").locale(); //"es"
```

`LangInform.` method examples:

```js
    LangInform.langByHex("540A").name(); //"Spanish"
    LangInform.langByHex("540A").code(); //"es-US"
    LangInform.langByHex("540A").fullName(); //"Spanish – United States"
    LangInform.langByHex("540A").hex(); //"540A"
    LangInform.langByHex("540A").dec(); //"21514"
    LangInform.langByHex("540A").locale(); //"es"
```

`LangInform.` method examples:

```js
    LangInform.langByDec("21514").name(); //"Spanish"
    LangInform.langByDec(21514).code(); //"es-US"
    LangInform.langByDec("21514").fullName(); //"Spanish – United States"
    LangInform.langByDec(21514).hex(); //"540A"
    LangInform.langByDec("21514").dec(); //"21514"
    LangInform.langByDec(21514).locale(); //"es"
```
