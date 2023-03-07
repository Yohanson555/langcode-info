const LexToHex: { [key: string]: string } = {
  enEN: "0000",
  zhCHS: "0004",
  arSA: "0401",
  bgBG: "0402",
  caES: "0403",
  zhTW: "0404",
  csCZ: "0405",
  daDK: "0406",
  deDE: "0407",
  elGR: "0408",
  enUS: "0409",
  fiFI: "040B",
  frFR: "040C",
  heIL: "040D",
  huHU: "040E",
  isIS: "040F",
  itIT: "0410",
  jaJP: "0411",
  koKR: "0412",
  nlNL: "0413",
  nbNO: "0414",
  plPL: "0415",
  ptBR: "0416",
  rmCH: "0417",
  roRO: "0418",
  ruRU: "0419",
  hrHR: "041A",
  skSK: "041B",
  sqAL: "041C",
  svSE: "041D",
  thTH: "041E",
  trTR: "041F",
  urPK: "0420",
  idID: "0421",
  ukUA: "0422",
  beBY: "0423",
  slSI: "0424",
  etEE: "0425",
  lvLV: "0426",
  ltLT: "0427",
  tgCyrlTJ: "0428",
  faIR: "0429",
  viVN: "042A",
  hyAM: "042B",
  azLatnAZ: "042C",
  euES: "042D",
  hsbDE: "042E",
  mkMK: "042F",
  tnZA: "0432",
  xhZA: "0434",
  zuZA: "0435",
  afZA: "0436",
  kaGE: "0437",
  foFO: "0438",
  hiIN: "0439",
  mtMT: "043A",
  seNO: "043B",
  msMY: "043e",
  kkKZ: "043F",
  kyKG: "0440",
  swKE: "0441",
  tkTM: "0442",
  uzLatnUZ: "0443",
  ttRU: "0444",
  bnIN: "0445",
  paIN: "0446",
  guIN: "0447",
  orIN: "0448",
  taIN: "0449",
  teIN: "044A",
  knIN: "044B",
  mlIN: "044C",
  asIN: "044D",
  mrIN: "044E",
  saIN: "044F",
  mnMN: "0450",
  boCN: "0451",
  cyGB: "0452",
  kmKH: "0453",
  loLA: "0454",
  glES: "0456",
  kokIN: "0457",
  sdDevaIN: "0459",
  syrSY: "045A",
  siLK: "045B",
  chrCherUS: "045C",
  iuCansCA: "045D",
  amET: "045E",
  neNP: "0461",
  fyNL: "0462",
  psAF: "0463",
  filPH: "0464",
  dvMV: "0465",
  haLatnNG: "0468",
  yoNG: "046A",
  quzBO: "046B",
  nsoZA: "046C",
  baRU: "046D",
  lbLU: "046E",
  klGL: "046F",
  igNG: "0470",
  tiET: "0473",
  hawUS: "0475",
  iiCN: "0478",
  arnCL: "047A",
  mohCA: "047C",
  brFR: "047E",
  ugCN: "0480",
  miNZ: "0481",
  ocFR: "0482",
  coFR: "0483",
  gswFR: "0484",
  sahRU: "0485",
  qucLatnGT: "0486",
  rwRW: "0487",
  woSN: "0488",
  prsAF: "048C",
  gdGB: "0491",
  kuArabIQ: "0492",
  arIQ: "0801",
  caESvalencia: "0803",
  zhCN: "0804",
  deCH: "0807",
  enGB: "0809",
  esMX: "080A",
  frBE: "080C",
  itCH: "0810",
  nlBE: "0813",
  nnNO: "0814",
  ptPT: "0816",
  srLatnCS: "081A",
  svFI: "081D",
  urIN: "0820",
  azCyrlAZ: "082C",
  dsbDE: "082E",
  tnBW: "0832",
  seSE: "083B",
  gaIE: "083C",
  msBN: "083E",
  uzCyrlUZ: "0843",
  bnBD: "0845",
  paArabPK: "0846",
  taLK: "0849",
  mnMongCN: "0850",
  sdArabPK: "0859",
  iuLatnCA: "085D",
  tzmLatnDZ: "085F",
  ffLatnSN: "0867",
  quzEC: "086B",
  tiER: "0873",
  arEG: "0C01",
  zhHK: "0C04",
  deAT: "0C07",
  enAU: "0C09",
  esES: "0C0A",
  frCA: "0C0C",
  srCyrlCS: "0C1A",
  seFI: "0C3B",
  quzPE: "0C6B",
  arLY: "1001",
  zhSG: "1004",
  deLU: "1007",
  enCA: "1009",
  esGT: "100A",
  frCH: "100C",
  hrBA: "101A",
  smjNO: "103B",
  tzmTfngMA: "105F",
  arDZ: "1401",
  zhMO: "1404",
  deLI: "1407",
  enNZ: "1409",
  esCR: "140A",
  frLU: "140C",
  bsLatnBA: "141A",
  smjSE: "143B",
  arMA: "1801",
  enIE: "1809",
  esPA: "180A",
  frMC: "180C",
  srLatnBA: "181A",
  smaNO: "183B",
  arTN: "1C01",
  enZA: "1c09",
  esDO: "1C0A",
  srCyrlBA: "1C1A",
  smaSE: "1C3B",
  arOM: "2001",
  enJM: "2009",
  esVE: "200A",
  bsCyrlBA: "201A",
  smsFI: "203B",
  arYE: "2401",
  en029: "2409",
  esCO: "240A",
  srLatnRS: "241A",
  smnFI: "243B",
  arSY: "2801",
  enBZ: "2809",
  esPE: "280A",
  srCyrlRS: "281A",
  arJO: "2C01",
  enTT: "2C09",
  esAR: "2C0A",
  srLatnME: "2C1A",
  arLB: "3001",
  enZW: "3009",
  esEC: "300A",
  srCyrlME: "301A",
  arKW: "3401",
  enPH: "3409",
  esCL: "340A",
  arAE: "3801",
  esUY: "380A",
  arBH: "3C01",
  esPY: "3C0A",
  arQA: "4001",
  enIN: "4009",
  esBO: "400A",
  enMY: "4409",
  esSV: "440A",
  enSG: "4809",
  esHN: "480A",
  esNI: "4C0A",
  esPR: "500A",
  esUS: "540A",
  zhCHT: "7C04",
};

export default LexToHex;