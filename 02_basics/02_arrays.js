const marvel_hero = ["thor", "iron man", "captian america", "spiderman"]
const dc_hero = ["superman", "flash", "shazam", "black adam"]

marvel_hero.push(dc_hero);
console.log(marvel_hero);

const allHeros =  marvel_hero.concat(dc_hero)
console.log(marvel_hero)

spread operator => used by ...

const all_new_heros = [...dc_hero,...marvel_hero]
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_anather_array = another_array.flat(Infinity);  //add all in single array
console.log(real_anather_array);


console.log(Array.isArray("Jaid"))
console.log(Array.from("Jaid"))
console.log(Array.from({name:"Jaid"}))      //interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2,score3))

