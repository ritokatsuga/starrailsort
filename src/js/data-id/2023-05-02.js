dataSetVersion = "2023-05-02"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Saring berdasarkan faksi",
    key: "faction",
    tooltip: "Centang ini untuk membatasi karakter dari faksi tertentu.",
    checked: false,
    sub: [
      { name: "Trailblazer", key: "tb" },
      { name: "Astral Express", key: "ae" },
      { name: "Stellaron Hunters", key: "sh"},
      { name: "Herta Space Station", key: "hss" },
      { name: "Belobog", key: "be" },
      { name: "Xianzhou: The Loufu", key: "xtl" },
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
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Stelle",
    img: "stelle.jpg",
    opts: {
      faction: ['tb'],
      star: ['5'],
      female: true
    }
  },
  {
    name: "Caeulus",
    img: "caeulus.jpg",
    opts: {
      faction: ['tb'],
      star: ['5'],
      male: true
    }
  },
  {
    name: "March 7th",
    img: "march7th.jpg",
    opts: {
      faction: ['ae'],
      star: ['4'],
      female: true
    }
  },
  {
    name: "Dan Heng",
    img: "danheng.jpg",
    opts: {
      faction: ['ae'],
      star: ['4'],
      male: true
    }
  },
  {
    name: "Himeko",
    img: "himeko.jpg",
    opts: {
      faction: ['ae'],
      star: ['5'],
      female: true
    }
  },
  {
    name: "Welt",
    img: "welt.jpg",
    opts: {
      faction: ['ae'],
      star: ['5'],
      male: true
    }
  },
  {
    name: "Kafka",
    img: "kafka.jpg",
    opts: {
      faction: ['sh'],
      female: true,
      upcoming: true
    }
  },
  {
    name: "Silver Wolf",
    img: "silverwolf.jpg",
    opts: {
      faction: ['sh'],
      male: true,
      upcoming: true
    }
  },
  {
    name: "Arlan",
    img: "arlan.jpg",
    opts: {
      faction: ['hss'],
      star: ['4'],
      male: true
    }
  },
  {
    name: "Asta",
    img: "asta.jpg",
    opts: {
      faction: ['hss'],
      star: ['4'],
      female: true
    }
  },
  {
    name: "Herta",
    img: "herta.jpg",
    opts: {
      faction: ['hss'],
      star: ['4'],
      female: true
    }
  },
  {
    name: "Bronya",
    img: "bronya.jpg",
    opts: {
      faction: ['be'],
      star: ['5'],
      female: true
    }
  },
  {
    name: "Seele",
    img: "seele.jpg",
    opts: {
      faction: ['be'],
      star: ['5'],
      female: true
    }
  },
  {
    name: "Gepard",
    img: "gepard.jpg",
    opts: {
      faction: ['be'],
      star: ['5'],
      male: true
    }
  },
  {
    name: "Clara",
    img: "clara.jpg",
    opts: {
      faction: ['be'],
      star: ['5'],
      female: true
    }
  },
  {
    name: "Serval",
    img: "serval.jpg",
    opts: {
      faction: ['be'],
      star: ['4'],
      female: true
    }
  },
  {
    name: "Natasha",
    img: "natasha.jpg",
    opts: {
      faction: ['be'],
      star: ['4'],
      female: true
    }
  },
  {
    name: "Pela",
    img: "pela.jpg",
    opts: {
      faction: ['be'],
      star: ['4'],
      female: true
    }
  },
  {
    name: "Sampo",
    img: "sampo.jpg",
    opts: {
      faction: ['be'],
      star: ['4'],
      male: true
    }
  },
  {
    name: "Hook",
    img: "hook.jpg",
    opts: {
      faction: ['be'],
      star: ['4'],
      female: true
    }
  },
  {
    name: "Bailu",
    img: "bailu.jpg",
    opts: {
      faction: ['xtl'],
      star: ['5'],
      female: true
    }
  },
  {
    name: "Yanqing",
    img: "yanqing.jpg",
    opts: {
      faction: ['xtl'],
      star: ['5'],
      male: true
    }
  },
  {
    name: "Jingyuan",
    img: "jingyuan.jpg",
    opts: {
      faction: ['xtl'],
      star: ['5'],
      upcoming: true,
      male: true
    }
  },
  {
    name: "Qingque",
    img: "qingque.jpg",
    opts: {
      faction: ['xtl'],
      star: ['4'],
      female: true
    }
  },
  {
    name: "Tingyun",
    img: "tingyun.jpg",
    opts: {
      faction: ['xtl'],
      star: ['4'],
      female: true
    }
  },
  {
    name: "Sushang",
    img: "sushang.jpg",
    opts: {
      faction: ['xtl'],
      star: ['4'],
      female: true
    }
  },
]
