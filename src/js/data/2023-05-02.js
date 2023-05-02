dataSetVersion = "2023-05-02"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by faction",
    key: "faction",
    tooltip: "Check this to restrict to characters from certain faction.",
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
    name: "Filter by rarity",
    key: "star",
    tooltip: "Check this to restrict to characters from certain rarity.",
    checked: false,
    sub: [
      { name: "5 stars", key: "5" },
      { name: "4 stars", key: "4" },
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
