const CodeToHex:{[key: string]: string} = {
    "en-EN": "0000",
    "zh-CHS": "0004",
    "ar-SA": "0401",
    "bg-BG": "0402",
    "ca-ES": "0403",
    "zh-TW": "0404",
    "cs-CZ": "0405",
    "da-DK": "0406",
    "de-DE": "0407",
    "el-GR": "0408",
    "en-US": "0409",
    "es-ES_tradnl": "040A",
    "fi-FI": "040B",
    "fr-FR": "040C",
    "he-IL": "040D",
    "hu-HU": "040E",
    "is-IS": "040F",
    "it-IT": "0410",
    "ja-JP": "0411",
    "ko-KR": "0412",
    "nl-NL": "0413",
    "nb-NO": "0414",
    "pl-PL": "0415",
    "pt-BR": "0416",
    "rm-CH": "0417",
    "ro-RO": "0418",
    "ru-RU": "0419",
    "hr-HR": "041A",
    "sk-SK": "041B",
    "sq-AL": "041C",
    "sv-SE": "041D",
    "th-TH": "041E",
    "tr-TR": "041F",
    "ur-PK": "0420",
    "id-ID": "0421",
    "uk-UA": "0422",
    "be-BY": "0423",
    "sl-SI": "0424",
    "et-EE": "0425",
    "lv-LV": "0426",
    "lt-LT": "0427",
    "tg-Cyrl-TJ": "0428",
    "fa-IR": "0429",
    "vi-VN": "042A",
    "hy-AM": "042B",
    "az-Latn-AZ": "042C",
    "eu-ES": "042D",
    "hsb-DE": "042E",
    "mk-MK": "042F",
    "tn-ZA": "0432",
    "xh-ZA": "0434",
    "zu-ZA": "0435",
    "af-ZA": "0436",
    "ka-GE": "0437",
    "fo-FO": "0438",
    "hi-IN": "0439",
    "mt-MT": "043A",
    "se-NO": "043B",
    "ms-MY": "043e",
    "kk-KZ": "043F",
    "ky-KG": "0440",
    "sw-KE": "0441",
    "tk-TM": "0442",
    "uz-Latn-UZ": "0443",
    "tt-RU": "0444",
    "bn-IN": "0445",
    "pa-IN": "0446",
    "gu-IN": "0447",
    "or-IN": "0448",
    "ta-IN": "0449",
    "te-IN": "044A",
    "kn-IN": "044B",
    "ml-IN": "044C",
    "as-IN": "044D",
    "mr-IN": "044E",
    "sa-IN": "044F",
    "mn-MN": "0450",
    "bo-CN": "0451",
    "cy-GB": "0452",
    "km-KH": "0453",
    "lo-LA": "0454",
    "gl-ES": "0456",
    "kok-IN": "0457",
    "sd-Deva-IN": "0459",
    "syr-SY": "045A",
    "si-LK": "045B",
    "chr-Cher-US": "045C",
    "iu-Cans-CA": "045D",
    "am-ET": "045E",
    "ne-NP": "0461",
    "fy-NL": "0462",
    "ps-AF": "0463",
    "fil-PH": "0464",
    "dv-MV": "0465",
    "ha-Latn-NG": "0468",
    "yo-NG": "046A",
    "quz-BO": "046B",
    "nso-ZA": "046C",
    "ba-RU": "046D",
    "lb-LU": "046E",
    "kl-GL": "046F",
    "ig-NG": "0470",
    "ti-ET": "0473",
    "haw-US": "0475",
    "ii-CN": "0478",
    "arn-CL": "047A",
    "moh-CA": "047C",
    "br-FR": "047E",
    "ug-CN": "0480",
    "mi-NZ": "0481",
    "oc-FR": "0482",
    "co-FR": "0483",
    "gsw-FR": "0484",
    "sah-RU": "0485",
    "quc-Latn-GT": "0486",
    "rw-RW": "0487",
    "wo-SN": "0488",
    "prs-AF": "048C",
    "gd-GB": "0491",
    "ku-Arab-IQ": "0492",
    "ar-IQ": "0801",
    "ca-ES-valencia": "0803",
    "zh-CN": "0804",
    "de-CH": "0807",
    "en-GB": "0809",
    "es-MX": "080A",
    "fr-BE": "080C",
    "it-CH": "0810",
    "nl-BE": "0813",
    "nn-NO": "0814",
    "pt-PT": "0816",
    "sr-Latn-CS": "081A",
    "sv-FI": "081D",
    "ur-IN": "0820",
    "az-Cyrl-AZ": "082C",
    "dsb-DE": "082E",
    "tn-BW": "0832",
    "se-SE": "083B",
    "ga-IE": "083C",
    "ms-BN": "083E",
    "uz-Cyrl-UZ": "0843",
    "bn-BD": "0845",
    "pa-Arab-PK": "0846",
    "ta-LK": "0849",
    "mn-Mong-CN": "0850",
    "sd-Arab-PK": "0859",
    "iu-Latn-CA": "085D",
    "tzm-Latn-DZ": "085F",
    "ff-Latn-SN": "0867",
    "quz-EC": "086B",
    "ti-ER": "0873",
    "ar-EG": "0C01",
    "zh-HK": "0C04",
    "de-AT": "0C07",
    "en-AU": "0C09",
    "es-ES": "0C0A",
    "fr-CA": "0C0C",
    "sr-Cyrl-CS": "0C1A",
    "se-FI": "0C3B",
    "quz-PE": "0C6B",
    "ar-LY": "1001",
    "zh-SG": "1004",
    "de-LU": "1007",
    "en-CA": "1009",
    "es-GT": "100A",
    "fr-CH": "100C",
    "hr-BA": "101A",
    "smj-NO": "103B",
    "tzm-Tfng-MA": "105F",
    "ar-DZ": "1401",
    "zh-MO": "1404",
    "de-LI": "1407",
    "en-NZ": "1409",
    "es-CR": "140A",
    "fr-LU": "140C",
    "bs-Latn-BA": "141A",
    "smj-SE": "143B",
    "ar-MA": "1801",
    "en-IE": "1809",
    "es-PA": "180A",
    "fr-MC": "180C",
    "sr-Latn-BA": "181A",
    "sma-NO": "183B",
    "ar-TN": "1C01",
    "en-ZA": "1c09",
    "es-DO": "1C0A",
    "sr-Cyrl-BA": "1C1A",
    "sma-SE": "1C3B",
    "ar-OM": "2001",
    "en-JM": "2009",
    "es-VE": "200A",
    "bs-Cyrl-BA": "201A",
    "sms-FI": "203B",
    "ar-YE": "2401",
    "en-029": "2409",
    "es-CO": "240A",
    "sr-Latn-RS": "241A",
    "smn-FI": "243B",
    "ar-SY": "2801",
    "en-BZ": "2809",
    "es-PE": "280A",
    "sr-Cyrl-RS": "281A",
    "ar-JO": "2C01",
    "en-TT": "2C09",
    "es-AR": "2C0A",
    "sr-Latn-ME": "2C1A",
    "ar-LB": "3001",
    "en-ZW": "3009",
    "es-EC": "300A",
    "sr-Cyrl-ME": "301A",
    "ar-KW": "3401",
    "en-PH": "3409",
    "es-CL": "340A",
    "ar-AE": "3801",
    "es-UY": "380A",
    "ar-BH": "3C01",
    "es-PY": "3C0A",
    "ar-QA": "4001",
    "en-IN": "4009",
    "es-BO": "400A",
    "en-MY": "4409",
    "es-SV": "440A",
    "en-SG": "4809",
    "es-HN": "480A",
    "es-NI": "4C0A",
    "es-PR": "500A",
    "es-US": "540A",
    "zh-CHT": "7C04"
}

export default CodeToHex;