const fontsDatabase = [
  {
    name: "Classic Console Neue",
    type: "Decorative",
    style: "Pixel",
    language: "Latin & Cyrillic",
    license: "Free for Personal and Commercial use",
    download: "https://fontesk.com/classic-console-neue-font/",
  },
  {
    name: "Atonic",
    type: "Antiqua",
    language: "Latin & Cyrillic",
    license: "Free for Personal and Commercial use",
    download: "https://fontesk.com/atonic-font/",
  },
  {
    name: "Old horror films",
    type: "Decorative",
    style: "Gothic",
    language: "Latin & Cyrillic",
    license: "Free for Personal and Commercial use",
    download: "https://fontesk.com/old-horror-films-font/",
  },
]

const mainContainer = document.querySelector(".main-function");

const mainFunction = (event) => {
  let continueSelecting = true;

  setTimeout(() => {
    continueSelecting = false;
  }, 3000);

  const pickingFontInterval = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * fontsDatabase.length);
    mainContainer.innerHTML = `<p class="main-function__picking-font" style="font-family: ${fontsDatabase[randomNumber].name};">${fontsDatabase[randomNumber].name}</p>`;
    mainContainer.style.margin = "40vh auto";
    mainContainer.style.textAlign = "center";

    if (!continueSelecting) {
      clearInterval(pickingFontInterval);
      mainContainer.style.margin = "0";
      mainContainer.style.padding = "0";
      mainContainer.style.textAlign = "start";

      let fontDescriptionPropertyNameHTML = "";
      let fontDescriptionPropertyValueHTML = "";
      let fontDescriptionPropertyWarningHTML = "";
      let fontDescriptionHTML = `<div class="picked-font__font-description font-description">`;

      for (const key in fontsDatabase[randomNumber]) {
        const fontPropertyValue = fontsDatabase[randomNumber][key];

        if (key == "download") {
          fontDescriptionHTML += `<div class="font-description__big-gap" style="opacity: 0%">0</div>`.repeat(3);
          fontDescriptionHTML += `<p class="font-description__property-name">${key}:</p>`;
          fontDescriptionHTML += `<a class="font-description__property-value font-description__link" href="${fontPropertyValue}" target="_blank" title="${fontPropertyValue}">Link</a>`;
        }
        else {
          fontDescriptionHTML += `<p class="font-description__property-name">${key}:</p>`;
          fontDescriptionHTML += `<p class="font-description__property-value">${fontPropertyValue}</p>`;
        }

        if (key == "license") {
          fontDescriptionHTML += `<div class="font-description__property-warning" title="Always check license before use. We cannot guarantee the accuracy of font information.">!</div>`
        }
        else if (key == "download") {
          fontDescriptionHTML += `<div class="font-description__property-warning" title="We give links only to font creator’s sites / Google Fonts / sites, that give credits to font author.">?</div>`
        }
        else {
          fontDescriptionHTML += `<div class="font-description__property-warning" style="opacity: 0%">0</div>`
        }
      }

      fontDescriptionHTML += `</div>`;

      mainContainer.innerHTML = `
      <div class="main-function__picked-font picked-font">
        <div class="picked-font__font">
          <h2 class="picked-font__font-name-decorated" style="font-family: ${fontsDatabase[randomNumber].name};">${fontsDatabase[randomNumber].name}</h2>
          <h3 class="picked-font__font-name-usual">[${fontsDatabase[randomNumber].name}]</h3>
        </div>
        <div class="picked-font__font-description font-description">
          ${fontDescriptionHTML}
        </div>
        <button class="picked-font__try-again">Try again</button>
        <p class="picked-font__sample" style="font-family: ${fontsDatabase[randomNumber].name};">Whereas recognition of the inherent dignity</p>
      </div>`;
    }
  }, 200);
}

document.addEventListener("click", event => {
  if (event.target.closest(".main-function__button") || event.target.closest(".picked-font__try-again"))
    mainFunction(event);
})