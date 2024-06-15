DROP TABLE IF EXISTS cards;
DROP TABLE IF EXISTS decks;

CREATE TABLE decks (
    id INTEGER PRIMARY KEY,
    name TEXT,
    -- use userId from Authkit to the index into the list of decks
    userid TEXT
);

CREATE TABLE cards (
    id INTEGER PRIMARY KEY,
    deckId INTEGER,
    pokemonId INTEGER,
    name TEXT,
    image TEXT
);