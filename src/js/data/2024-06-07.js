dataSetVersion = "2024-06-07"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by faction",
    key: "faction",
    tooltip: "Check this to restrict to characters from certain faction.",
    checked: false,
    sub: [
      { name: "Astral Express", key: "ae" },
      { name: "Stellaron Hunters", key: "sh" },
      { name: "Herta Space Station", key: "hss" },
      { name: "Belobog", key: "be" },
      { name: "Xianzhou Loufu", key: "xl" },
      { name: "Knights of Beauty", key: "kb" },
      { name: "Interastral Peace Corporation", key: "ipc" },
      { name: "Genius Society", key: "gs" },
      { name: "Intelligentsia Guild", key: "ig" },
      { name: "Garden of Recollection", key: "gr" },
      { name: "Masked Fools", key: "mf" },
      { name: "Penacony", key: "pn" },
      { name: "Galaxy Ranger", key: "galr" }
    ]
  },
  {
    name: "Filter by rarity",
    key: "star",
    tooltip: "Check this to restrict to characters from certain rarity.",
    checked: false,
    sub: [
      { name: "5 stars", key: "5" },
      { name: "4 stars", key: "4" }
    ]
  },
  {
    name: "Filter by combat type",
    key: "ct",
    tooltip: "Check this to restrict to characters from certain combat type.",
    checked: false,
    sub: [
      { name: "Quantum", key: "quantum" },
      { name: "Physical", key: "physical" },
      { name: "Wind", key: "wind" },
      { name: "Fire", key: "fire" },
      { name: "Ice", key: "ice" },
      { name: "Lightning", key: "lightning" },
      { name: "Imaginary", key: "imaginary" }
    ]
  },
  {
    name: "Filter by Path",
    key: "path",
    tooltip: "Check this to restrict to characters from certain Path.",
    checked: false,
    sub: [
      { name: "The Destruction", key: "td" },
      { name: "The Preservation", key: "tp" },
      { name: "The Hunt", key: "thu" },
      { name: "The Erudition", key: "te" },
      { name: "The Harmony", key: "tha" },
      { name: "The Nihility", key: "tn" },
      { name: "The Abundance", key: "ta" }
    ]
  },
  {
    name: "Exclude males",
    key: "male",
    tooltip: "Check this to exclude males.",
    checked: false
  },
  {
    name: "Exclude females",
    key: "female",
    tooltip: "Check this to exclude females.",
    checked: false
  },
  {
    name: "Exclude upcoming characters",
    key: "upcoming",
    tooltip: "Check this to exclude upcoming/not yet playable characters.",
    checked: true
  },
  {
    name: "Exclude Trailblazer",
    key: "trailblazer",
    tooltip: "Check this to exclude Trailblazer.",
    checked: false
  },
  {
    name: "Exclude alters",
    key: "alter",
    tooltip: "Check this to exclude altered characters and only show the original version.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Stelle - The Destruction",
    img: "stelle1.png",
    opts: {
      faction: ['ae'],
      star: ['5'],
      ct: ['physical'],
      path: ['td'],
      female: true,
      trailblazer: true
    }
  },
  {
    name: "Caelus - The Destruction",
    img: "caelus1.png",
    opts: {
      faction: ['ae'],
      star: ['5'],
      ct: ['physical'],
      path: ['td'],
      male: true,
      trailblazer: true
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
    name: "Stelle - The Preservation",
    img: "stelle2.png",
    opts: {
      faction: ['ae'],
      star: ['5'],
      ct: ['fire'],
      path: ['tp'],
      female: true,
      trailblazer: true,
      thpath: true
    }
  },
  {
    name: "Caelus - The Preservation",
    img: "caelus2.png",
    opts: {
      faction: ['ae'],
      star: ['5'],
      ct: ['fire'],
      path: ['tp'],
      male: true,
      trailblazer: true,
      thpath: true
    }
  },
  {
    name: "Kafka",
    img: "kafka.png",
    opts: {
      faction: ['sh'],
      female: true,
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
      female: true
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
      male: true
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
    }
  },
  {
    name: "Dan Heng - Imbibitor Lunae",
    img: "danheng2.png",
    opts: {
      faction: ['ae'],
      ct: ['imaginary'],
      path: ['td'],
      male: true,
      alter: true
    }
  },
  {
    name: "Lynx",
    img: "lynx.png",
    opts: {
      faction: ['be'],
      star: ['4'],
      ct: ['quantum'],
      path: ['ta'],
      female: true,
    }
  },
  {
    name: "Jingliu",
    img: "jingliu.png",
    opts: {
      faction: ['xl'],
      star: ['5'],
      ct: ['ice'],
      path: ['td'],
      female: true
    }
  },
  {
    name: "Topaz & Numby",
    img: "topaz.png",
    opts: {
      faction: ['ipc'],
      star: ['5'],
      ct: ['fire'],
      path: ['th'],
      female: true
    }
  },
  {
    name: "Guinaifen",
    img: "guinaifen.png",
    opts: {
      faction: ['xl'],
      star: ['4'],
      ct: ['fire'],
      path: ['tn'],
      female: true
    }
  },
  {
    name: "Huohuo",
    img: "huohuo.png",
    opts: {
      faction: ['xl'],
      star: ['5'],
      ct: ['wind'],
      path: ['ta'],
      female: true
    }
  },
  {
    name: "Argenti",
    img: "argenti.png",
    opts: {
      faction: ['kb'],
      star: ['5'],
      ct: ['physical'],
      path: ['te'],
      male: true
    }
  },
  {
    name: "Hanya",
    img: "hanya.png",
    opts: {
      faction: ['xl'],
      star: ['4'],
      ct: ['physical'],
      path: ['tha'],
      female: true
    }
  },
  {
    name: "Ruan Mei",
    img: "ruanmei.png",
    opts: {
      faction: ['gs'],
      star: ['5'],
      ct: ['ice'],
      path: ['tha'],
      female: true
    }
  },
  {
    name: "Dr. Ratio",
    img: "ratio.png",
    opts: {
      faction: ['ig'],
      star: ['5'],
      ct: ['imaginary'],
      path: ['th'],
      male: true
    }
  },
  {
    name: "Xueyi",
    img: "xueyi.png",
    opts: {
      faction: ['xl'],
      star: ['4'],
      ct: ['quantum'],
      path: ['td'],
      female: true
    }
  },
  {
    name: "Black Swan",
    img: "blackswan.png",
    opts: {
      faction: ['gr'],
      star: ['5'],
      ct: ['wind'],
      path: ['tn'],
      female: true
    }
  },
  {
    name: "Sparkle",
    img: "sparkle.png",
    opts: {
      faction: ['mf'],
      star: ['5'],
      ct: ['quantum'],
      path: ['tha'],
      female: true
    }
  },
  {
    name: "Misha",
    img: "misha.png",
    opts: {
      faction: ['pn'],
      star: ['4'],
      ct: ['ice'],
      path: ['td'],
      male: true
    }
  },
  {
    name: "Acheron",
    img: "acheron.png",
    opts: {
      faction: ['galr'],
      star: ['5'],
      ct: ['lightning'],
      path: ['tn'],
      female: true
    }
  },
  {
    name: "Aventurine",
    img: "aventurine.png",
    opts: {
      faction: ['ipc'],
      star: ['5'],
      ct: ['imaginary'],
      path: ['tp'],
      male: true
    }
  },
  {
    name: "Gallagher",
    img: "gallagher.png",
    opts: {
      faction: ['pn'],
      star: ['4'],
      ct: ['fire'],
      path: ['ta'],
      male: true
    }
  },
  {
    name: "Robin",
    img: "robin.png",
    opts: {
      faction: ['pn'],
      star: ['5'],
      ct: ['physical'],
      path: ['tha'],
      female: true
    }
  },
  {
    name: "Boothill",
    img: "boothill.png",
    opts: {
      faction: ['galr'],
      star: ['5'],
      ct: ['physical'],
      path: ['th'],
      male: true
    }
  },
  {
    name: "Firefly",
    img: "firefly.png",
    opts: {
      faction: ['sh'],
      star: ['5'],
      ct: ['fire'],
      path: ['td'],
      female: true,
      upcoming: true
    }
  },
  {
    name: "jade",
    img: "jade.png",
    opts: {
      faction: ['ipc'],
      star: ['5'],
      ct: ['quantum'],
      path: ['te'],
      female: true,
      upcoming: true
    }
  },
  {
    name: "Stelle - The Harmony",
    img: "stelle3.png",
    opts: {
      faction: ['ast'],
      star: ['5'],
      ct: ['imaginary'],
      path: ['th'],
      female: true
    }
  },
  {
    name: "Caelus - The Harmony",
    img: "caelus3.png",
    opts: {
      faction: ['ast'],
      star: ['5'],
      ct: ['imaginary'],
      path: ['th'],
      male: true
    }
  },
  {
    name: "Yunli",
    img: "yunli.png",
    opts: {
      faction: ['xl'],
      star: ['5'],
      ct: ['physical'],
      path: ['td'],
      female: true,
      upcoming: true
    }
  },
  {
    name: "Jiaoqiu",
    img: "jiaoqiu.png",
    opts: {
      faction: ['xl'],
      star: ['5'],
      ct: ['fire'],
      path: ['tn'],
      male: true,
      upcoming: true
    }
  },
]
