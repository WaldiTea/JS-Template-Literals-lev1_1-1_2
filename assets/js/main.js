// -----lev1_1-----
console.log('-----lev1_1-----');

let firstName = 'Max';
let lastName = 'Mustermann';
let fullName = firstName + ' ' + lastName;
let age = 25;
let placeOfBirth = 'Germany';
let height = '1.75m';
let weight = '74kg';
let hobbies = 'playing guitar, reading books';
let computerGames = 'Battlefield, Call of Duty';
let food = 'Spaghetti';
let sports = 'Basketball';
let branding = 'Nike';
let season = 'Spring';
let holidayDestination = 'Mallorca';

console.log('Hi! My name is ' + firstName + ' ' + lastName + '. ' + 'I am ' + age + ' years old. ' + 'I was born in ' + placeOfBirth + ', I am ' + height + ' tall and I weigh ' + weight + '. My hobbies are ' + hobbies + '. My favorite food is ' + food + ' and I like playing ' + sports + '. My favorite branding is ' + branding + ', my favorite season is ' + season + ' and I like to spend my holidays in ' + holidayDestination + '.');

let out = document.getElementById('out');

out.innerHTML = `
  <p>Hi! My name is <span>${fullName}</span>.
  I am <span>${age}</span> years old.
  I was born in <span>${placeOfBirth}</span>.
  I am <span>${height}</span> tall and i weigh <span>${weight}</span>.
  My hobbies are <span>${hobbies}</span>.
  My favorite food is <span>${food}</span> and I like playing <span>${sports}</span>.
  My favorite branding is <span>${branding}</span>, my favorite season is <span>${season}</span> and I like to spend my holidays in <span>${holidayDestination}</span>.</p>
`


// -----lev1_2-----
console.log('-----lev1_2-----');

let lunatic = "lunatic is";
let darkSide = "I'll see you on the dark side of the moon";
let hall = "hall";
let head = "in my head";
let door = "You lock the door";
let paperboy = "paperboy";
let and = 'And';
let the = 'The';

console.log(the + " " + lunatic + " on the grass " + the + " " + lunatic + " on the grass Remembering games and daisy chains and laughs Got to keep the loonies on the path " + the + " " + lunatic + " in the " + hall + " " +  the + " lunatics are in my " + hall + " " +  the + " paper holds their folded faces to the floor " + and + " every day the " + paperboy + " brings more " + and + " if the dam breaks open many years too soon " + and + " if there is no room upon the hill " + and + " if your head explodes with dark forebodings too " + darkSide + " " +  the + " " + lunatic + " " + head + " " + the + " " + lunatic + " " + head + " You raise the blade, you make the change You rearrange me 'til I'm sane" + door + " " + and + " throw away the key Theres someone" + head + " but it's not me " + and + " if the cloud bursts, thunder in your ear You shout and no one seems to hear " + and + " if the band you're in starts playing different tunes " + darkSide);

let out2 = document.getElementById('out2');

out2.innerHTML = `
  <h1>Brain Damage Songtext</h1>
  <p>${the} ${lunatic} on the grass
  ${the} ${lunatic} on the grass
  Remembering games and daisy chains and laughs
  Got to keep the loonies on the path
  
  ${the} ${lunatic} in the ${hall}
  ${the} lunatics are in my ${hall}
  ${the} paper holds their folded faces to the floor
  ${and} every day the ${paperboy} brings more
  
  ${and} if the dam breaks open many years too soon
  ${and} if there is no room upon the hill
  ${and} if your head explodes with dark forebodings too
  ${darkSide}

  ${the} ${lunatic} ${head}
  ${the} ${lunatic} ${head}
  You raise the blade, you make the change
  You rearrange me 'til I'm sane
  ${door}
  ${and} throw away the key
  There's someone ${head} but it's not me

  ${and} if the cloud bursts, thunder in your ear
  You shout and no one seems to hear
  ${and} if the band you're in starts playing different tunes
  ${darkSide}</p>
`
