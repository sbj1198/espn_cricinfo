function footerJS() {
  let footerData1 = [
    {
      p: "Key Series",
    },

    {
      p: "Asia Cup QLF",
    },

    {
      p: "Asia Cup",
    },

    {
      p: "England v South Africa",
    },

    {
      p: "australia v Zimbabwe",
    },

    {
      p: "NZ-A in IND",
    },

    {
      p: "The Hundred (M)",
    },

    {
      p: "The Hundred (W)",
    },

    {
      p: "County Div1",
    },

    {
      p: "County Div2",
    },

    {
      p: "6IXTY (M)",
    },

    {
      p: "6IXTY (W)",
    },

    {
      p: "Women's Championship",
    },

    {
      p: "World Championship",
    },

    {
      p: "World Cup Super League",
    },
  ];

  let footerdiv1 = document.createElement("div");

  footerData1.map(function (ele) {
    let p = document.createElement("p");

    p.innerText = ele.p;

    footerdiv1.append(p);
  });

  let footerData2 = [
    {
      p: "Quick Links",
    },

    {
      p: "T2 Time Out",
    },

    {
      p: "T20 Time Out Hindi",
    },

    {
      p: "ICC Rankings",
    },

    {
      p: "Fantasy Pick",
    },

    {
      p: "Haan ya Naa",
    },
  ];

  let footerdiv2 = document.createElement("div");

  footerData2.map(function (ele) {
    let p = document.createElement("p");

    p.innerText = ele.p;

    footerdiv2.append(p);
  });

  let footerData3 = [
    {
      p: "ESPNcricinfo Apps",
    },

    {
      p: "Android App",
    },

    {
      p: "iOS App",
    },
  ];

  let footerdiv3 = document.createElement("div");

  footerData3.map(function (ele) {
    let p = document.createElement("p");

    p.innerText = ele.p;

    footerdiv3.append(p);
  });

  let footerData4 = [
    {
      p: "Follow ESPNcricinfo",
    },

    {
      p: "Instagram",
    },

    {
      p: "Twitter",
    },

    {
      p: "Facebook",
    },

    {
      p: "Youtube",
    },
  ];

  let footerdiv4 = document.createElement("div");

  footerData4.map(function (ele) {
    let p = document.createElement("p");

    p.innerText = ele.p;

    footerdiv4.append(p);
  });

  let footerData5 = [
    {
      p: "ESPN Sites",
    },

    {
      p: "The Cricket Monthly",
    },

    {
      p: "ESPN",
    },
  ];

  let footerdiv5 = document.createElement("div");

  footerData5.map(function (ele) {
    let p = document.createElement("p");

    p.innerText = ele.p;

    footerdiv5.append(p);
  });

  document
    .querySelector("#footer")
    .append(footerdiv1, footerdiv2, footerdiv3, footerdiv4, footerdiv5);
}

export default footerJS;
