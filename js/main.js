


const app = document.getElementById('container');

class Pokemon {
    constructor(name, type, color, img, id) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.img = img;
        this.id = id;
    }

    pkmnCard() {

        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML =

            `
                <div style =" background-color :${this.color}" width = "100%" height = "100%">
                <img src="${this.img}" width ="100%" height="200">
                <h2>${this.name}</h2>
                <p> Type : ${this.type}</p>
            `

        card.addEventListener('mouseover', () => {
            card.classList.add('animate')
        })

        card.addEventListener('mouseleave', () => {
            card.classList.remove('animate')
        })

        return card;
    }
}

class App {

    

    constructor(containerId) {

        this.container = document.getElementById(containerId)       
        this.pokemons = []
        this.fetchData()
    }


    async fetchData() {

        const dataPokemon = await fetch('js/pokemons.json').then(d => d.json())

        this.pokemons = dataPokemon.map(p => new Pokemon(p.name, p.type, p.color, p.img, p.id))

        this.renderStep()

    }

    renderStep() {
        this.container.innerHTML = ''; 

        switch (this.currentStep) {
            case 1:
                this.renderAll();
                magicText()
                break;

            case 2:
                this.renderFire(); 
                magicText()
                break;

            case 3:
                this.renderWater();
                magicText()
                break;

            case 4:
                this.renderStorm(); 
                magicText()
                break;
            case 5:
                this.renderPlant()
                magicText()
                break;

        }

        let btn1 = document.getElementById('btn1')
        let btn2 = document.getElementById('btn2')
        let btn3 = document.getElementById('btn3')
        let btn4 = document.getElementById('btn4')
        let btn5 = document.getElementById('btn5')

        btn1.addEventListener('click', () =>{
            this.currentStep = 1
            this.renderStep()

        })
        btn2.addEventListener('click', () =>{
            this.currentStep = 2
            this.renderStep()

        })

        btn3.addEventListener('click', () =>{
            this.currentStep = 3
            this.renderStep()

        })
        btn4.addEventListener('click', () =>{
            this.currentStep = 4
            this.renderStep()

        })

        btn5.addEventListener('click', () =>{
            this.currentStep = 5
            this.renderStep()

        })

    }

    renderAll(){

        const section = document.getElementById('app')
        const titleContainer = document.createElement('div')
        titleContainer.classList.add('title-container')
        section.appendChild(titleContainer)

        const titleChoice = document.createElement('h1')
        titleChoice.textContent = 'Tous les Pokémons';
        titleContainer.appendChild(titleChoice)

        const cardContainer = document.createElement('div')
        cardContainer.classList.add('card-container')
        section.appendChild(cardContainer)

        this.pokemons.forEach(pokemon => { 
            const card = pokemon.pkmnCard();
            cardContainer.appendChild(card);
            this.currentStep = 1
        })


    }

renderFire() {
    const section = document.getElementById('app');
    section.innerHTML = ''; 

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    section.appendChild(titleContainer);

    const titleChoice = document.createElement('h1');
    titleChoice.textContent = 'Pokémons de type Feu';
    titleContainer.appendChild(titleChoice);

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    section.appendChild(cardContainer);

    
    const firePokemons = this.pokemons.filter(pokemon => pokemon.id === 'fire');

    firePokemons.forEach(pokemon => {
        const card = pokemon.pkmnCard();
        cardContainer.appendChild(card);
    });

    this.currentStep = 2;
}

renderWater() {
    const section = document.getElementById('app');
    section.innerHTML = ''; 

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    section.appendChild(titleContainer);

    const titleChoice = document.createElement('h1');
    titleChoice.textContent = 'Pokémons de type Eau';
    titleContainer.appendChild(titleChoice);

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    section.appendChild(cardContainer);

    
    const firePokemons = this.pokemons.filter(pokemon => pokemon.id === 'water');

    firePokemons.forEach(pokemon => {
        const card = pokemon.pkmnCard();
        cardContainer.appendChild(card);
    });

    this.currentStep = 3;
}

renderStorm() {
    const section = document.getElementById('app');
    section.innerHTML = ''; 

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    section.appendChild(titleContainer);

    const titleChoice = document.createElement('h1');
    titleChoice.textContent = 'Pokémons de type Electrique';
    titleContainer.appendChild(titleChoice);

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    section.appendChild(cardContainer);

    
    const firePokemons = this.pokemons.filter(pokemon => pokemon.id === 'storm');

    firePokemons.forEach(pokemon => {
        const card = pokemon.pkmnCard();
        cardContainer.appendChild(card);
    });

    this.currentStep = 4;
}

renderPlant() {
    const section = document.getElementById('app');
    section.innerHTML = ''; 

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    section.appendChild(titleContainer);

    const titleChoice = document.createElement('h1');
    titleChoice.textContent = 'Pokémons de type Plante';
    titleContainer.appendChild(titleChoice);

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    section.appendChild(cardContainer);

    
    const firePokemons = this.pokemons.filter(pokemon => pokemon.id === 'plant');

    firePokemons.forEach(pokemon => {
        const card = pokemon.pkmnCard();
        cardContainer.appendChild(card);
    });

    this.currentStep = 5;
}


    }
    

    function magicText() {
    const text = document.querySelector("h1")
    if (!text) return; 

    const contenu = text.innerHTML;
    text.innerHTML = "";

    let index = 0;
    const timer = setInterval(function () {
        if (index < contenu.length) {
            text.innerHTML += contenu.charAt(index);
            index++;
        } else {
            clearInterval(timer)
        }
    }, 150)
}


new App('app');

function clearList() {

    const app = document.getElementById('container');
    app.innerHTML = '';

};


