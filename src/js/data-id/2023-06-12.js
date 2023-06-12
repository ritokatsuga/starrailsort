dataSetVersion = "2023-06-12"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Saring berdasarkan faksi",
    key: "faction",
    tooltip: "Centang ini untuk membatasi karakter dari faksi tertentu.",
    checked: false,
    sub: [
      { name: "Astral Express", key: "ae" },
      { name: "Stellaron Hunters", key: "sh"},
      { name: "Herta Space Station", key: "hss" },
      { name: "Belobog", key: "be" },
      { name: "Xianzhou Loufu", key: "xl" },
    ]
  },
  {
    name: "Saring berdasarkan rarity",
    key: "star",
    tooltip: "Centang ini untuk membatasi karakter dari rarity tertentu.",
    checked: false,
    sub: [
      { name: "Bintang 5", key: "5" },
      { name: "Bintang 4", key: "4" },
    ]
  },
  {
    name: "Saring berdasarkan tipe bertarung",
    key: "ct",
    tooltip: "Centang ini untuk membatasi karakter dari tipe bertarung tertentu.",
    checked: false,
    sub: [
      { name: "Quantum", key: "quantum" },
      { name: "Physical", key: "physical" },
      { name: "Wind", key: "wind" },
      { name: "Fire", key: "fire" },
      { name: "Ice", key: "ice" },
      { name: "Lightning", key: "lightning" },
      { name: "Imaginary", key: "imaginary" },
    ]
  },
  {
    name: "Saring berdasarkan Path",
    key: "path",
    tooltip: "Centang ini untuk membatasi karakter dari rarity Path tertentu.",
    checked: false,
    sub: [
      { name: "The Destruction", key: "td" },
      { name: "The Preservation", key: "tp" },
      { name: "The Hunt", key: "thu" },
      { name: "The Erudition", key: "te" },
      { name: "The Harmony", key: "tha" },
      { name: "The Nihility", key: "tn" },
      { name: "The Abundance", key: "ta" },
    ]
  },
  {
    name: "Kecualikan laki-laki",
    key: "male",
    tooltip: "Centang ini untuk mengecualikan laki-laki.",
    checked: false
  },
  {
    name: "Kecualikan perempuan",
    key: "female",
    tooltip: "Centang ini untuk mengecualikan perempuan.",
    checked: false
  },
  {
    name: "Kecualikan karakter mendatang",
    key: "upcoming",
    tooltip: "Centang ini untuk mengecualikan karakter mendatang/masih belum dapat dimainkan.",
    checked: true
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Trailblazer - the Destruction",
    img: "tb1.png",
    opts: {
      faction: ['ae'],
      star: ['5'],
      ct: ['physical'],
      path: ['td'],
      female: true,
      male: true
    }
  },
  {
    name: "March 7th",
    img: "march.png",
    opts: {
      faction: ['ae'],
      star: ['4'],
      ct: ['ice'],
      path: ['tp'],
      female: true
    }
  },
  {
    name: "Dan Heng",
    img: "danheng.png",
    opts: {
      faction: ['ae'],
      star: ['4'],
      ct: ['wind'],
      path: ['th'],
      male: true
    }
  },
  {
    name: "Himeko",
    img: "himeko.png",
    opts: {
      faction: ['ae'],
      star: ['5'],
      ct: ['fire'],
      path: ['te'],
      female: true
    }
  },
  {
    name: "Welt",
    img: "welt.png",
    opts: {
      faction: ['ae'],
      star: ['5'],
      ct: ['imaginary'],
      path: ['tn'],
      male: true
    }
  },
  {
    name: "Trailblazer - the Preservation",
    img: "tb2.png",
    opts: {
      faction: ['ae'],
      star: ['5'],
      ct: ['fire'],
      path: ['tp'],
      female: true
    }
  },
  {
    name: "Kafka",
    img: "kafka.png",
    opts: {
      faction: ['sh'],
      female: true,
      upcoming: true
    }
  },
  {
    name: "Silver Wolf",
    img: "silverwolf.png",
    opts: {
      faction: ['sh'],
      star: ['5'],
      ct: ['quantum'],
      path: ['tn'],
      female: true,
    }
  },
  {
    name: "Blade",
    img: "blade.png",
    opts: {
      faction: ['sh'],
      star: ['5'],
      ct: ['wind'],
      path: ['td'],
      male: true,
      upcoming: true
    }
  },
  {
    name: "Arlan",
    img: "arlan.png",
    opts: {
      faction: ['hss'],
      star: ['4'],
      ct: ['lightning'],
      path: ['td'],
      male: true
    }
  },
  {
    name: "Asta",
    img: "asta.png",
    opts: {
      faction: ['hss'],
      star: ['4'],
      ct: ['fire'],
      path: ['th'],
      female: true
    }
  },
  {
    name: "Herta",
    img: "herta.png",
    opts: {
      faction: ['hss'],
      star: ['4'],
      ct: ['ice'],
      path: ['te'],
      female: true
    }
  },
  {
    name: "Bronya",
    img: "bronya.png",
    opts: {
      faction: ['be'],
      star: ['5'],
      ct: ['wind'],
      path: ['tha'],
      female: true
    }
  },
  {
    name: "Seele",
    img: "seele.png",
    opts: {
      faction: ['be'],
      star: ['5'],
      ct: ['quantum'],
      path: ['th'],
      female: true
    }
  },
  {
    name: "Gepard",
    img: "gepard.png",
    opts: {
      faction: ['be'],
      star: ['5'],
      ct: ['ice'],
      path: ['tp'],
      male: true
    }
  },
  {
    name: "Clara",
    img: "clara.png",
    opts: {
      faction: ['be'],
      star: ['5'],
      ct: ['physical'],
      path: ['td'],
      female: true
    }
  },
  {
    name: "Serval",
    img: "serval.png",
    opts: {
      faction: ['be'],
      star: ['4'],
      ct: ['lightning'],
      path: ['te'],
      female: true
    }
  },
  {
    name: "Natasha",
    img: "natasha.png",
    opts: {
      faction: ['be'],
      star: ['4'],
      ct: ['physical'],
      path: ['ta'],
      female: true
    }
  },
  {
    name: "Pela",
    img: "pela.png",
    opts: {
      faction: ['be'],
      star: ['4'],
      ct: ['ice'],
      path: ['tn'],
      female: true
    }
  },
  {
    name: "Sampo",
    img: "sampo.png",
    opts: {
      faction: ['be'],
      star: ['4'],
      ct: ['wind'],
      path: ['tn'],
      male: true
    }
  },
  {
    name: "Hook",
    img: "hook.png",
    opts: {
      faction: ['be'],
      star: ['4'],
      ct: ['fire'],
      path: ['td'],
      female: true
    }
  },
  {
    name: "Luka",
    img: "luka.png",
    opts: {
      faction: ['be'],
      star: ['4'],
      ct: ['physical'],
      path: ['tn'],
      male: true,
      upcoming: true
    }
  },
  {
    name: "Bailu",
    img: "bailu.png",
    opts: {
      faction: ['xl'],
      star: ['5'],
      ct: ['lightning'],
      path: ['ta'],
      female: true
    }
  },
  {
    name: "Yanqing",
    img: "yanqing.png",
    opts: {
      faction: ['xl'],
      star: ['5'],
      ct: ['ice'],
      path: ['th'],
      male: true
    }
  },
  {
    name: "Jingyuan",
    img: "jingyuan.png",
    opts: {
      faction: ['xl'],
      star: ['5'],
      ct: ['lightning'],
      path: ['te'],
      male: true
    }
  },
  {
    name: "Qingque",
    img: "qingque.png",
    opts: {
      faction: ['xl'],
      star: ['4'],
      ct: ['quantum'],
      path: ['te'],
      female: true
    }
  },
  {
    name: "Tingyun",
    img: "tingyun.png",
    opts: {
      faction: ['xtl'],
      star: ['4'],
      ct: ['lightning'],
      path: ['th'],
      female: true
    }
  },
  {
    name: "Sushang",
    img: "sushang.png",
    opts: {
      faction: ['xl'],
      star: ['4'],
      ct: ['physical'],
      path: ['th'],
      female: true
    }
  },
  {
    name: "Yukong",
    img: "yukong.png",
    opts: {
      faction: ['xl'],
      star: ['4'],
      ct: ['imaginary'],
      path: ['th'],
      female: true,
      upcoming: true
    }
  },
  {
    name: "Luocha",
    img: "luocha.png",
    opts: {
      faction: ['xl'],
      star: ['5'],
      ct: ['imaginary'],
      path: ['ta'],
      male: true,
      upcoming: true
    }
  },
  {
    name: "Yukong",
    img: "yukong.png",
    opts: {
      faction: ['xl'],
      star: ['4'],
      ct: ['imaginary'],
      path: ['th'],
      female: true,
      upcoming: true
    }
  },
  {
    name: "Fu Xuan",
    img: "fuxuan.png",
    opts: {
      faction: ['xl'],
      ct: ['quantum'],
      path: ['tp'],
      female: true,
      upcoming: true
    }
  }
]
