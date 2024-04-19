false + false

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const multiply = (a, b) => a * b;
const getRandomElement = array => array[getRandomIndex(array)];
orange

const getRandomSubset = (array, size) => array.slice(0, size);
63 - apple

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
