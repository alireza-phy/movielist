import React from 'react'

import Redemption from './images/The shawshank redemption.jpg'
import GodFather from './images/Godfather.jpg'
import GodFatherII from './images/Godfather II.jpg'
import DarkKnight from './images/The dark knight.jpg'
import AngryMen from './images/12 angry men.jpg'
import SchindlersList from './images/Schindlers list.jpg'
import LordOfTheRings from './images/Lord of the rings.jpg'
import PulpFiction from './images/Pulp foction.jpg'
import TheGoodTheBadTheUgly from './images/Rhe good the bad the ugly.jpg'
import FightClub from './images/Fight club.jpg'


const moviesData = [
    {
        image: Redemption,
        id: 1,
        title: "The Shawshank Redemption",
        Director: "Frank Darabont",
        genre: "Drama",
        ImdbRate: 9.2,
        publishDate: 1994,
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        liked: true
    },
    {
        image: GodFather,
        id: 2,
        title: "The Godfather",
        Director: "Francis Ford Coppola",
        genre:"Drama",
        ImdbRate: 9.1,
        publishDate: 1972,
        description: "The Godfather follows Vito Corleone, Don of the Corleone family, as he passes the mantel to his unwilling son, Michael.",
        liked: false
    },
    {
        image: GodFatherII,
        id: 3,
        title: "The Godfather II",
        Director: "Francis Ford Coppola",
        genre:"Drama",
        ImdbRate: 9.0,
        publishDate: 1974,
        description: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
        liked: true
    },
    {
        image: DarkKnight,
        id: 4,
        title: "The Dark Knight",
        Director: "Christopher Nolan",
        genre:"Action",
        ImdbRate: 9.0,
        publishDate: 2008,
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice",
        liked: false
    },
    {
        image: AngryMen,
        id: 5,
        title: "12 Angry Men",
        Director: "Sidney Lumet",
        genre:"Action",
        ImdbRate: 8.9,
        publishDate: 1957,
        description: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
        liked: false
    },
    {
        image: SchindlersList,
        id: 6,
        title: "Schindler's List",
        Director: "Steven Spielberg",
        genre:"Drama",
        ImdbRate: 8.9,
        publishDate: 1993,
        description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        liked: false
    },
    {
        image: LordOfTheRings,
        id: 7,
        title: "The Lord of the Rings: The Return of the King",
        Director: "Peter Jackson",
        genre:"Adventure",
        ImdbRate: 8.9,
        publishDate: 2003,
        description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        liked: false
    },
    {
        image: PulpFiction,
        id: 8,
        title: "Pulp Fiction",
        Director: "Quentin Tarantino",
        genre:"Drama",
        ImdbRate: 8.8,
        publishDate: 1994,
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        liked: false
    },
    {
        image: TheGoodTheBadTheUgly,
        id: 9,
        title: "The Good, the Bad and the Ugly",
        Director: "Sergio Leone",
        genre:"Adventure",
        ImdbRate: 8.8,
        publishDate: 1966,
        description: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
        liked: false
    },
    {
        image: FightClub,
        id: 10,
        title: "Fight Club",
        Director: "David Fincher",
        genre:"Action",
        ImdbRate: 8.7,
        publishDate: 1999,
        description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        liked: false
    }
];

export default moviesData