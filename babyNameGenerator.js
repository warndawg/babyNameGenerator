
var el; 

var boyNames = [
'Jackson',
'Aiden',
'Liam',
'Lucas',
'Noah',
'Mason',
'Ethan',
'Caden',
'Jacob',
'Logan',
'Jayden',
'Elijah',
'Jack',
'Luke',
'Michael',
'Benjamin',
'Alexander',
'James',
'Jayce',
'Caleb',
'Connor',
'William',
'Carter',
'Ryan',
'Oliver',
'Matthew',
'Daniel',
'Gabriel',
'Henry',
'Owen',
'Grayson',
'Dylan',
'Landon',
'Isaac',
'Nicholas',
'Wyatt',
'Nathan',
'Andrew',
'Cameron',
'Dominic',
'Joshua',
'Eli',
'Sebastian',
'Hunter',
'Brayden',
'David',
'Samuel',
'Evan',
'Gavin',
'Christian',
'Max',
'Anthony',
'Joseph',
'Julian',
'John',
'Colton',
'Levi',
'Muhammad',
'Isaiah',
'Aaron',
'Tyler',
'Charlie',
'Adam',
'Parker',
'Austin',
'Thomas',
'Zachary',
'Nolan',
'Alex',
'Ian',
'Jonathan',
'Christopher',
'Cooper',
'Hudson',
'Miles',
'Adrian',
'Leo',
'Blake',
'Lincoln',
'Jordan',
'Tristan',
'Jason',
'Josiah',
'Xavier',
'Camden',
'Chase',
'Declan',
'Carson',
'Colin',
'Brody',
'Asher',
'Jeremiah',
'Micah',
'Easton',
'Xander',
'Ryder',
'Nathaniel',
'Elliot',
'Sean',
'Cole'
];

var girlNames = [
'Sophia',
'Emma',
'Olivia',
'Ava',
'Mia',
'Isabella',
'Zoe',
'Lily',
'Emily',
'Madison',
'Amelia',
'Riley',
'Madelyn',
'Charlotte',
'Chloe',
'Aubrey',
'Aria',
'Layla',
'Avery',
'Abigail',
'Harper',
'Kaylee',
'Aaliyah',
'Evelyn',
'Adalyn',
'Ella',
'Arianna',
'Hailey',
'Ellie',
'Nora',
'Hannah',
'Addison',
'Mackenzie',
'Brooklyn',
'Scarlett',
'Anna',
'Mila',
'Audrey',
'Isabelle',
'Elizabeth',
'Leah',
'Sarah',
'Lillian',
'Grace',
'Natalie',
'Kylie',
'Lucy',
'Makayla',
'Maya',
'Kaitlyn',
'Victoria',
'Elena',
'Lila',
'Maria',
'Savannah',
'Claire',
'Penelope',
'Alaina',
'Violet',
'Kennedy',
'Gabriella',
'Eliana',
'Skyler',
'Paisley',
'Camilla',
'Annabelle',
'Adeline',
'Stella',
'Allison',
'Alice',
'Alyssa',
'Liliana',
'Reagan',
'Charlie',
'Callie',
'Vivian',
'Jocelyn',
'Samantha',
'Caroline',
'Eleanor',
'Julia',
'Sophie',
'Sadie',
'Peyton',
'Cora',
'Juliana',
'Eva',
'Keira',
'Hazel',
'Kinsley',
'Clara',
'Katherine',
'Alexandra',
'Isla',
'London',
'Jordyn',
'Kayla',
'Bailey',
'Emery',
'Taylor'
];

var gender;

function clearName(hexColor){
	document.body.style.backgroundColor = hexColor;
	document.getElementById('babyName').innerHTML = "";
}

function getGender(){
	if (document.getElementById('boy').checked === true){
		gender = boy;
	} else {
		gender = girl;
	}
}

function displayName() {
	if (document.getElementById('boy').checked === false && document.getElementById('girl').checked === false){
		alert('You need to select a gender to generate a baby name.');
		return;
	}
	if (document.getElementById('lastName').value === '') {
		alert('In order to get the full effect of the baby name generator you need to fill in a last name.');
		return;
	}
	getGender();
	el = document.getElementById("babyName");
	el.innerHTML = generateName();

}

function generateName() {
	var randomIndexNumber = Math.floor(Math.random() * 100);
	var randomIndexNumberTwo = Math.floor(Math.random() * 100);
	var lastName = document.getElementById('lastName').value;
	if (gender === boy){
		return boyNames[randomIndexNumber] + " " + boyNames[randomIndexNumberTwo] + " " + lastName;
	} else {
		return girlNames[randomIndexNumber] + " " + girlNames[randomIndexNumberTwo] + " " +lastName;
	}
}
