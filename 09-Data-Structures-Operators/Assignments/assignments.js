"use strict";
const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// Assignment #10
// 10.1
const getFirstKeyword = function (book) {
  return book.keywords?.[0];
};

console.log(getFirstKeyword(books[0]));

// Assignment #9
//9.1
const bookData = [
  ["title", "Computer Networking: A Top-Down Approach"],
  ["author", ["James F. Kurose", "Keith W. Ross"]],
  ["publisher", "Addison Wesley"],
];

// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};
// 9.2
const pages = 880;

const newBook2 = {
  title: "The C Programming Language",
  author: ["Brian W. Kernighan", "Dennis M. Ritchie"],
  // ...
  pages,
};

// Assignment #8
// 8.1
let pagesSum = 0;
for (const book of books) {
  pagesSum += book.pages;
}
console.log(pagesSum);

// 8.2
const allAuthors = [];
for (const book of books) {
  if (typeof book.author === "string") {
    allAuthors.push(book.author);
  } else {
    for (const author of book.author) {
      allAuthors.push(author);
    }
  }
}

// 8.3
for (const [i, author] of allAuthors.entries()) {
  console.log(`${i + 1}: ${author}`);
}
// Assignment #7

// 7.1
for (let i = 0; i < books.length; i++) {
  // code
  console.log((books[i].edition ||= 1));
}

// 7.2
for (let i = 0; i < books.length; i++) {
  // code
  console.log(
    (books[i].highlighted &&= !books[i].thirdParty.goodreads.rating < 4.2)
  );
} 


// Assignment #6
//6.1
for (let i = 0; i < books.length; i++) {
  // code
  books[i].onlineContent ??
    console.log(`"${books[i].title}" 
      Provides no data about its online content`);
}

// Assignment #5

//5.1
const hasExampleJava = function (book) {
  return book.programmingLanguage === "Java" || "No data available";
};
console.log(hasExampleJava(books[2]));
// 5.2
for (let i = 0; i < books.length; i++) {
  // code
  books[i].onlineContent &&
    console.log(`"${books[i].title}" Provides online content`);
}
// Assignment #4

// 4.1
const [mainKeyWord, ...rest] = books[0].keywords;
console.log(mainKeyWord, rest);
// 4.2
const { publicationDate: bookPuplisher, ...restOftheBook } = books[1];
console.log(bookPuplisher);
// 4.3
const printBookAuthorsCount = function (title, ...authors) {
  console.log(
    `The Book "${title}" has ${authors.length} Authors. They are "${authors}"`
  );
};
printBookAuthorsCount("Algorithms", "Robert Sedgewick", " Kevin Wayne");

// Assignment #3

//3.1
const bookAuthors = [...books[0].author, ...books[1].author];
//3.2

function spellWord(word) {
  console.log(...word);
}

// Assignment #2

//2.1
const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);
//2.2
let { keywords: tags } = books[0];
console.log(tags);
//2.3
const { language, programmingLanguage = "UNKNOWN" } = books[6];
console.log(language, programmingLanguage);
//2.4
let bookTitle = "unknown";
let bookAuthor = "unknown";
// Reassign them
({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor);
//2.5
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
console.log(bookRating);
//2.6
function printBookInfo({ title, author, year = "And year unkown" }) {
  console.log(`${title} by ${author}, ${year}`);
}
printBookInfo({
  title: "Algorithms",
  author: "Robert Sedgewick",
  year: "2011",
});
printBookInfo({
  title: "Algorithms",
  author: "Robert Sedgewick",
});

// Assignment #1
//1.1
const [first, second, third, fourth] = books;
console.log(first, second, third, fourth);
//1.2
const ratings = [
  ["rating", 4.19],
  ["ratingsCount", 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);
// 1.3
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRating, threeStarRating = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRating, threeStarRating);

// Material of coding challenges
const game = {
  team1: "liverPool",
  team2: "ManCity",
  players: [
    [
      "Alisson Becker",
      "Trent Alexander-Arnold",
      "Virgil van Dijk",
      "Andy Robertson",
      "Fabinho",
      "Thiago Alcantara",
      "Jordan Henderson",
      "Mohamed Salah",
      "Sadio Mane",
      "Roberto Firmino",
      "Diogo Jota",
    ],
    [
      "Ederson",
      "Kyle Walker",
      "Ruben Dias",
      "John Stones",
      "Joao Cancelo",
      "Rodri",
      "Kevin De Bruyne",
      "Ilkay Gundogan",
      "Bernardo Silva",
      "Raheem Sterling",
      "Erling Haaland",
    ],
  ],
  score: "4:0",
  scored: [
    "Mohamed Salah",
    "Roberto Firmino",
    "Virgil van Dijk",
    "Mohamed Salah",
  ],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

// Challange #3

// 1 Create an array 'events' of the different game events that happened (no duplicates);
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log
// console.log(gameEvents.get(64));
gameEvents.delete(64);

/* 3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes) */

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

for (const [time, event] of gameEvents) {
  const half = time <= 45 ? 'First' : 'Second';
  console.log(`${half} Half in minute ${time}: ${event}`);
}
// Coding Challenge #2

// 1
for (const [index, name] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${name}`);
}
//2
let avrage = 0;
const values = Object.values(game.odds);
for (const value of values) avrage += value;
avrage /= values.length;
console.log(avrage);

// 3
for (const [key, value] of Object.entries(game.odds)) {
  let str = key === "x" ? "Draw" : `victory ${game[key]}`;
  console.log(`Odd of ${str}: ${value}`);
}

// BOUNS 4
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
// Coding Challenge #1
// 1.
/* const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, "Thiago", "Coutinho", "Periscic"];

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win"); */
