let compteur = document.querySelector(".compteur");
let accordDo = document.querySelector(".boutonDo");
let accordSol = document.querySelector(".boutonSol");
let accordRe = document.querySelector(".boutonRe");
let accordLa = document.querySelector(".boutonLa");
let accordMi = document.querySelector(".boutonMi");
let accordSi = document.querySelector(".boutonSi");
let accordFa = document.querySelector(".boutonFa");
let accordFadiese = document.querySelector(".boutonFadiese");
let accordRebem = document.querySelector(".boutonRebem");
let accordLabem = document.querySelector(".boutonLabem");
let accordMibem = document.querySelector(".boutonMibem");
let accordSibem = document.querySelector(".boutonSibem");
let suite = document.querySelector(".suite");
let rondUn = document.querySelector(".rondUn");
let rondDeux = document.querySelector(".rondDeux");
let rondTrois = document.querySelector(".rondTrois");
let rondQuatre = document.querySelector(".rondQuatre");
let rondCinq = document.querySelector(".rondCinq");
let rondSix = document.querySelector(".rondSix");
let rondSept = document.querySelector(".rondSept");
const accordMaj = [
  "C",
  "G",
  "D",
  "A",
  "E",
  "B",
  "F#",
  "Db",
  "Ab",
  "Eb",
  "Bb",
  "F",
  "C",
  "G",
  "D",
];
const accordMin = [
  "Am",
  "Em",
  "Bm",
  "F#m",
  "C#m",
  "G#m",
  "D#m",
  "Bbm",
  "Fm",
  "Cm",
  "Gm",
  "Dm",
  "Am",
  "Em",
  "Bm",
];
let i = 0;
let score = 0;
let pouet = true;
accordDo.addEventListener("click", () => {
  console.log(accordMaj);
  console.log(accordMin);

  i = 12;
  suite.textContent = `La Suite pour ${accordMaj[i]} est ${accordMaj[i]}, ${
    accordMin[i - 1]
  }, ${accordMin[i + 1]},${accordMaj[i - 1]}, ${accordMaj[i + 1]}, ${
    accordMin[1]
  } et B diminué`;
  rondUn.textContent = `${accordMaj[i]}`;
  rondDeux.textContent = `${accordMin[i - 1]}`;
  rondTrois.textContent = `${accordMin[i + 1]}`;
  rondQuatre.textContent = `${accordMaj[i - 1]}`;
  rondCinq.textContent = `${accordMaj[i + 1]}`;
  rondSix.textContent = `${accordMin[i]}`;
  rondSept.textContent = `B°`;
});
accordSol.addEventListener("click", () => {
  i = 1;
  suite.textContent = `La Suite pour ${accordMaj[i]} est ${accordMaj[i]}, ${
    accordMin[i - 1]
  }, ${accordMin[i + 1]},${accordMaj[i - 1]}, ${accordMaj[i + 1]}, ${
    accordMin[1]
  } et F# diminué`;
  rondUn.textContent = `${accordMaj[i]}`;
  rondDeux.textContent = `${accordMin[i - 1]}`;
  rondTrois.textContent = `${accordMin[i + 1]}`;
  rondQuatre.textContent = `${accordMaj[i - 1]}`;
  rondCinq.textContent = `${accordMaj[i + 1]}`;
  rondSix.textContent = `${accordMin[i]}`;
  rondSept.textContent = `F#°`;
});
accordRe.addEventListener("click", () => {
  i = 2;
  suite.textContent = `La Suite pour ${accordMaj[i]} est ${accordMaj[i]}, ${
    accordMin[i - 1]
  }, ${accordMin[i + 1]},${accordMaj[i - 1]}, ${accordMaj[i + 1]}, ${
    accordMin[1]
  } et Db diminué`;
  rondUn.textContent = `${accordMaj[i]}`;
  rondDeux.textContent = `${accordMin[i - 1]}`;
  rondTrois.textContent = `${accordMin[i + 1]}`;
  rondQuatre.textContent = `${accordMaj[i - 1]}`;
  rondCinq.textContent = `${accordMaj[i + 1]}`;
  rondSix.textContent = `${accordMin[i]}`;
  rondSept.textContent = `Db°`;
});
accordLa.addEventListener("click", () => {
  i = 3;
  suite.textContent = `La Suite pour ${accordMaj[i]} est ${accordMaj[i]}, ${
    accordMin[i - 1]
  }, ${accordMin[i + 1]},${accordMaj[i - 1]}, ${accordMaj[i + 1]}, ${
    accordMin[1]
  } et Ab diminué`;
  rondUn.textContent = `${accordMaj[i]}`;
  rondDeux.textContent = `${accordMin[i - 1]}`;
  rondTrois.textContent = `${accordMin[i + 1]}`;
  rondQuatre.textContent = `${accordMaj[i - 1]}`;
  rondCinq.textContent = `${accordMaj[i + 1]}`;
  rondSix.textContent = `${accordMin[i]}`;
  rondSept.textContent = `Ab°`;
});
accordMi.addEventListener("click", () => {
  i = 4;
  suite.textContent = `La Suite pour ${accordMaj[i]} est ${accordMaj[i]}, ${
    accordMin[i - 1]
  }, ${accordMin[i + 1]},${accordMaj[i - 1]}, ${accordMaj[i + 1]}, ${
    accordMin[1]
  } et Eb diminué`;
  rondUn.textContent = `${accordMaj[i]}`;
  rondDeux.textContent = `${accordMin[i - 1]}`;
  rondTrois.textContent = `${accordMin[i + 1]}`;
  rondQuatre.textContent = `${accordMaj[i - 1]}`;
  rondCinq.textContent = `${accordMaj[i + 1]}`;
  rondSix.textContent = `${accordMin[i]}`;
  rondSept.textContent = `Eb°`;
});
accordSi.addEventListener("click", () => {
  i = 5;
  suite.textContent = `La Suite pour ${accordMaj[i]} est ${accordMaj[i]}, ${
    accordMin[i - 1]
  }, ${accordMin[i + 1]},${accordMaj[i - 1]}, ${accordMaj[i + 1]}, ${
    accordMin[1]
  } et Bb diminué`;
  rondUn.textContent = `${accordMaj[i]}`;
  rondDeux.textContent = `${accordMin[i - 1]}`;
  rondTrois.textContent = `${accordMin[i + 1]}`;
  rondQuatre.textContent = `${accordMaj[i - 1]}`;
  rondCinq.textContent = `${accordMaj[i + 1]}`;
  rondSix.textContent = `${accordMin[i]}`;
  rondSept.textContent = `Bb°`;
});
accordFadiese.addEventListener("click", () => {
  i = 6;
  suite.textContent = `La Suite pour ${accordMaj[i]} est ${accordMaj[i]}, ${
    accordMin[i - 1]
  }, ${accordMin[i + 1]},${accordMaj[i - 1]}, ${accordMaj[i + 1]}, ${
    accordMin[1]
  } et F diminué`;
  rondUn.textContent = `${accordMaj[i]}`;
  rondDeux.textContent = `${accordMin[i - 1]}`;
  rondTrois.textContent = `${accordMin[i + 1]}`;
  rondQuatre.textContent = `${accordMaj[i - 1]}`;
  rondCinq.textContent = `${accordMaj[i + 1]}`;
  rondSix.textContent = `${accordMin[i]}`;
  rondSept.textContent = `F°`;
});
accordRebem.addEventListener("click", () => {
  i = 7;
  suite.textContent = `La Suite pour ${accordMaj[i]} est ${accordMaj[i]}, ${
    accordMin[i - 1]
  }, ${accordMin[i + 1]},${accordMaj[i - 1]}, ${accordMaj[i + 1]}, ${
    accordMin[1]
  } et C diminué`;
  rondUn.textContent = `${accordMaj[i]}`;
  rondDeux.textContent = `${accordMin[i - 1]}`;
  rondTrois.textContent = `${accordMin[i + 1]}`;
  rondQuatre.textContent = `${accordMaj[i - 1]}`;
  rondCinq.textContent = `${accordMaj[i + 1]}`;
  rondSix.textContent = `${accordMin[i]}`;
  rondSept.textContent = `C°`;
});
accordLabem.addEventListener("click", () => {
  i = 8;
  suite.textContent = `La Suite pour ${accordMaj[i]} est ${accordMaj[i]}, ${
    accordMin[i - 1]
  }, ${accordMin[i + 1]},${accordMaj[i - 1]}, ${accordMaj[i + 1]}, ${
    accordMin[1]
  } et G diminué`;
  rondUn.textContent = `${accordMaj[i]}`;
  rondDeux.textContent = `${accordMin[i - 1]}`;
  rondTrois.textContent = `${accordMin[i + 1]}`;
  rondQuatre.textContent = `${accordMaj[i - 1]}`;
  rondCinq.textContent = `${accordMaj[i + 1]}`;
  rondSix.textContent = `${accordMin[i]}`;
  rondSept.textContent = `G°`;
});
accordMibem.addEventListener("click", () => {
  i = 9;
  suite.textContent = `La Suite pour ${accordMaj[i]} est ${accordMaj[i]}, ${
    accordMin[i - 1]
  }, ${accordMin[i + 1]},${accordMaj[i - 1]}, ${accordMaj[i + 1]}, ${
    accordMin[1]
  } et D diminué`;
  rondUn.textContent = `${accordMaj[i]}`;
  rondDeux.textContent = `${accordMin[i - 1]}`;
  rondTrois.textContent = `${accordMin[i + 1]}`;
  rondQuatre.textContent = `${accordMaj[i - 1]}`;
  rondCinq.textContent = `${accordMaj[i + 1]}`;
  rondSix.textContent = `${accordMin[i]}`;
  rondSept.textContent = `D°`;
});
accordSibem.addEventListener("click", () => {
  i = 10;
  suite.textContent = `La Suite pour ${accordMaj[i]} est ${accordMaj[i]}, ${
    accordMin[i - 1]
  }, ${accordMin[i + 1]},${accordMaj[i - 1]}, ${accordMaj[i + 1]}, ${
    accordMin[1]
  } et A diminué`;
  rondUn.textContent = `${accordMaj[i]}`;
  rondDeux.textContent = `${accordMin[i - 1]}`;
  rondTrois.textContent = `${accordMin[i + 1]}`;
  rondQuatre.textContent = `${accordMaj[i - 1]}`;
  rondCinq.textContent = `${accordMaj[i + 1]}`;
  rondSix.textContent = `${accordMin[i]}`;
  rondSept.textContent = `A°`;
});
accordFa.addEventListener("click", () => {
  i = 11;
  suite.textContent = `La Suite pour ${accordMaj[i]} est ${accordMaj[i]}, ${
    accordMin[i - 1]
  }, ${accordMin[i + 1]},${accordMaj[i - 1]}, ${accordMaj[i + 1]}, ${
    accordMin[1]
  } et E diminué`;
  rondUn.textContent = `${accordMaj[i]}`;
  rondDeux.textContent = `${accordMin[i - 1]}`;
  rondTrois.textContent = `${accordMin[i + 1]}`;
  rondQuatre.textContent = `${accordMaj[i - 1]}`;
  rondCinq.textContent = `${accordMaj[i + 1]}`;
  rondSix.textContent = `${accordMin[i]}`;
  rondSept.textContent = `E°`;
});

while ((pouet = true && score < 100)) {
  setInterval(() => {}, interval);
  compteur.textContent = score++;
}
