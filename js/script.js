/*
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
*/

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


const cardContainer = document.getElementById("cardContainer");





let cardTemplate="";
function stampaCard(element){
    cardTemplate +=`
        <div class="iconCard">
            <i style="color: ${element.color};" class="fa-solid ${element.prefix}${element.name}"></i>
            <span>${element.name}</span>
        </div>
    `
}

icons.forEach(stampaCard)
cardContainer.innerHTML = cardTemplate



const animali = icons.filter((tipo) => tipo.type === 'animal')
console.log(animali)
const user = icons.filter((tipo) => tipo.type === 'user')
console.log(user)
const vegetali = icons.filter((tipo) => tipo.type === 'vegetable')
console.log(vegetali)

const select = document.getElementById("icone");

select.addEventListener("change", ()=>{

    let flag = select.value;
    console.log(flag);
    switch(flag){
        case '1':{
            console.log(icons);
            cardTemplate="";
            icons.forEach(stampaCard)
            cardContainer.innerHTML = cardTemplate;
        }break;
        case '2':{
            console.log(animali);
            cardTemplate="";
            animali.forEach(stampaCard)
            cardContainer.innerHTML = cardTemplate;
        }break;
        case '3':{
            console.log(vegetali);
            cardTemplate="";
            vegetali.forEach(stampaCard)
            cardContainer.innerHTML = cardTemplate;
        }break;
        case '4':{
            console.log(user);
            cardTemplate="";
            user.forEach(stampaCard)
            cardContainer.innerHTML = cardTemplate;
        }break;
    }


})