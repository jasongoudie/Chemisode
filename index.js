//grab some things
const section = document.querySelector("section");
const section2 = document.querySelector("section2");
const playerLivesCount = document.querySelector("span");

//Link text


//Generate the data
const getData = () => [
    {imgSrc: "./images/GB1.png", name: "Trans But-2-en-1-ol"},
    {imgSrc: "./images/GB2.png", name: "2 amino ethanoic acid"},
    {imgSrc: "./images/GB3.png", name: "Methyl Propane"},
    {imgSrc: "./images/GB4.png", name: "2 chloro but-2-ene"},
    {imgSrc: "./images/GB5.png", name: "Methanamine"},
    {imgSrc: "./images/GB6.png", name: "Propene"},
    {imgSrc: "./images/GB7.png", name: "2 amino propanoic acid"},
    {imgSrc: "./images/GB8.png", name: "2 bromopropane"},
    {imgSrc: "./images/GM1.png", name: "3 bromopropene"},
    {imgSrc: "./images/GM2.png", name: "diflouro ethanoic acid"},
    {imgSrc: "./images/GM3.png", name: "methane"},
    {imgSrc: "./images/GM4.png", name: "2 chloropropane"},
    {imgSrc: "./images/GM5.png", name: "Propane"},
    {imgSrc: "./images/GM6.png", name: "Ethanoic acid"},
    {imgSrc: "./images/GM7.png", name: "Butan-2-ol"},
    {imgSrc: "./images/GM8.png", name: "Propan-2-ol"},
    {imgSrc: "./images/GT1.png", name: "cis pent-2-ene"},
    {imgSrc: "./images/GT2.png", name: "3 hydroxy butanoic acid"},
    {imgSrc: "./images/GT3.png", name: "2 amino ethanol"},
    {imgSrc: "./images/GT4.png", name: "Propanone"},
    {imgSrc: "./images/GT5.png", name: "fluoromethane"},
    {imgSrc: "./images/GT6.png", name: "Methyl butane"},
    {imgSrc: "./images/GT7.png", name: "Ethanal"},
    {imgSrc: "./images/GT8.png", name: "1 bromo 2 chloroethene"},
    ];

//card generator
const cardGenerator = () => { 
    const cardData = getData();
    //generate the HTML
    cardData.forEach(item => {
        const card = document.createElement("div");
        const back = document.createElement("img");
        const face = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        //attach the info to the cards
        back.src = item.imgSrc;
        //attach the cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click',(e) => {
            card.classList.toggle('toggleCard'); 
        })
    });
};

const randomize = () => {
    randomCard=getData();
    randomCard.sort(() => Math.random() - 0.5);
    return randomCard;
};
const playerCard = () => {
    const randomCard = randomize();    
    console.log(randomCard[1].name);


const playerCardImage = document.createElement('img');
const playerCardName = randomCard[1].name;
playerCardImage.classList = "playerCardImage";
playerCardImage.src = randomCard[1].imgSrc;
section2.appendChild(playerCardImage);
console.log(playerCardName)

playerLivesCount.textContent = playerCardName;}


cardGenerator();
playerCard();
