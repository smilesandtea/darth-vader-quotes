const quotes = [
    "You underestimate the power of the dark side. If you will not fight, then you will meet your destiny.",
    "Your strength has returned, but the weakness still remains.",
    "I find your lack of faith disturbing.",
    "The Force is strong with this one.",
    "Be careful not to choke on your aspirations, Director.",
    "The ability to destroy a planet is insignificant next to the power of the Force.",
    "You were unwise to lower your defenses!",
    "There is no escape. Don’t make me destroy you.",
    "Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force.",
    "I Have You Now!",
    "I Am Altering The Deal. Pray I Don't Alter It Any Further!",
    "Your Destiny Lies With Me, Skywalker! Obi-Wan Knew This To Be True."
];

const quoteElement = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote');

newQuoteButton.addEventListener('click', () => {
    const randomNum = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomNum];
});