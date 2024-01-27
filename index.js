/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const cardParameters = [
    {
        size: 'length',
        unit_1 : 'meter',
        unit_2 :'feet',
        f_to_s : 3.281,
    },
    {
        size: 'volume',
        unit_1 : 'liter',
        unit_2 :'gallon',
        f_to_s : 0.264,
    },
    {
        size: 'mass',
        unit_1 : 'kilogram',
        unit_2 :'pound',
        f_to_s : 2.204,
    },
]

const buttonEl = document.getElementById('conversion')
const inputEl = document.getElementById('value-to-convert')
const cardLength = document.getElementById('length')
const cardVolume = document.getElementById('volume')
const cardMass = document.getElementById('mass')

// inputEl.value = '20'

// createCard(cardParameters[0], cardLength)
// createCard(cardParameters[1], cardVolume)
// createCard(cardParameters[2], cardMass)


buttonEl.addEventListener('click', () => {
    console.log('input: ' + inputEl.value)
    createCard(cardParameters[0], cardLength)
    createCard(cardParameters[1], cardVolume)
    createCard(cardParameters[2], cardMass)
})

function camelize(str) {
    return str.replace(str.charAt(0), str.charAt(0).toUpperCase())
}

function createCard(cardObject,cardId) {
    var title = document.createElement("h2");                 
    var textTitle = document.createTextNode(camelize(cardObject.size) + " (" + camelize(cardObject.unit_1) + '/' + camelize(cardObject.unit_2) + ')');         
    title.appendChild(textTitle);
    cardId.appendChild(title);  
    
    var paragraph = document.createElement("p");                 
    var textP = document.createTextNode(inputEl.value + ' meters = ' + (Number(inputEl.value)*cardObject.f_to_s).toFixed(3) + ' feet | ' + inputEl.value +  ' feet = ' + (Number(inputEl.value)/cardObject.f_to_s).toFixed(3) + ' meters');         
    paragraph.appendChild(textP);
    cardId.appendChild(paragraph);  
}
