// let burger = document.querySelector(".burger")
// let burgerDark = document.querySelector(".burger-dark")
// let menu = document.querySelector(".nav-menu")
// let burgerBlackout = document.querySelector(".burger-blackout")
// if(burger){
//     burger.addEventListener("click", function (){
//         if(burger.className === "burger burger_active"){
//             burger.className = "burger"
//             menu.className = "nav-menu"
//             burgerBlackout.className = "burger-blackout"
//         }else{
//             burger.className = "burger burger_active"
//             menu.className = "nav-menu nav-menu_burger"
//             burgerBlackout.className = "burger-blackout_active"
//         }
//     })
// }else{
//     burgerDark.addEventListener("click", function (){
//         if(burgerDark.className === "burger-dark burger-dark_active"){
//             burgerDark.className = "burger-dark"
//             menu.className = "nav-menu"
//             burgerBlackout.className = "burger-blackout"
//         }else{
//             burgerDark.className = "burger-dark burger-dark_active"
//             menu.className = "nav-menu nav-menu_burger"
//             burgerBlackout.className = "burger-blackout_active"
//         }
//     })
// }


const pets = [
    {
        "name": "Jennifer",
        "img": "assets/images/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "assets/images/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "assets/images/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "assets/images/pets-scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "assets/images/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "assets/images/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "assets/images/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "assets/images/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
];


class Pets {
    constructor({ name, img, type, breed, description, age, inoculations, parasites }) {
        this.name = name;
        this.img = img;
        this.type = type;
        this.breed = breed;
        this.description = description;
        this.age = age;
        this.inoculations = inoculations;
        this.parasites = parasites;
    }

    generateSliderCard() {
        let template = '';
        let sliderCard = document.createElement('div');
        sliderCard.className = 'pets-slider__card';
        sliderCard.setAttribute('name', this.name)

        template += `<img src=${this.img} alt = "pet"></img>`;

        template += `<p>${this.name}</p>`;
        template += `<button class="button-light">Learn more</button>`;

        sliderCard.innerHTML = template;
        return sliderCard
    }
}

class Modal {
    constructor(classes, { name, img, type, breed, description, age, inoculations, diseases, parasites }) {
        this.classes = classes;
        this.modal = '';
        this.modalContent = '';
        this.modalCloseBtn = '';
        this.overlay = '';

        //User Modal
        this.name = name;
        this.img = img;
        this.type = type;
        this.breed = breed;
        this.description = description;
        this.age = age;
        this.inoculations = inoculations;
        this.diseases = diseases;
        this.parasites = parasites;
    }

    buildModal(content) {
        //Overlay
        this.overlay = this.createDomNode(this.overlay, 'div', 'overlay');

        this.modal = this.createDomNode(this.modal, 'div', this.classes);
        this.modal.innerHTML = `<img src="${this.img}" class = "modal-img" alt="">`

        this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal-content');

        this.modalContent.innerHTML =  `    
        <h3 class="modal-content__title">${this.name}</h3>
        <h4 class="modal-content__subtitle">${this.type} - ${this.breed}</h4>
        <p class="modal-content__description">${this.description}</p>
        <ul class="modal-content__list">
            <li><span><b>Age:</b> ${this.age}</span></li>
            <li><span><b>Inoculations:</b> ${this.inoculations}</span></li>
            <li><span><b>Diseases:</b> ${this.diseases}</span></li>
            <li><span><b>Parasites:</b> ${this.parasites}</span></li>
        </ul>
        `

        this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'div', 'modal__close-icon');
        this.modalCloseBtn.innerHTML = '<img src="assets/icons/modal_close_button.png" class = "modal__close-icon-img" alt="">'
        //this.setContent(content);

        this.appendModalElements();

        this.bindEvents();

        this.openModal();
    }
    createDomNode(node, element, ...classes) {
        node = document.createElement(element);
        node.classList.add(...classes);
        return node
    }

    setContent(content) {
        if (typeof content === 'string') {
            this.modalContent.innerHTML = content;
        } else {
            this.modalContent.innerHTML = '';
            this.modalContent.appendChild(content);
        }
    }

    appendModalElements() {
        this.modal.append(this.modalCloseBtn);
        this.modal.append(this.modalContent);
        this.overlay.append(this.modal);
    }

    bindEvents() {
        this.modalCloseBtn.addEventListener('click', this.closeModal);
        this.overlay.addEventListener('click', this.closeModal);
    };


    openModal() {
        document.body.append(this.overlay)
        document.body.style.overflow = 'hidden';
        document.querySelector('.modal').classList.add('open')
    }
    
    closeModal(e) {
        let classes = e.target.classList;
        let overlay = document.querySelector('.overlay');
        if((classes.contains('overlay') || classes.contains('modal__close-icon-img')) && overlay) {
            document.querySelector('.modal').classList.remove('open')
            document.querySelector('.modal').classList.add('close') 
            document.querySelector('.close').addEventListener('animationend', () => {
                overlay.remove();
                document.body.style.overflow = 'visible';
            }) 
        }
    }
    // renderModal() {
    //     let content = this.buildModal();
    // }
}
let mediaQuery;
const mediaQueryLaptop = window.matchMedia('(max-width: 1279px)')
const mediaQueryTablet = window.matchMedia('(max-width: 767px)')
let carousel = document.querySelector(".slider-wrapper")


let randomValuesArrayStorage;

window.onload = function () {
    addButtonsClickHandler();

    renderPetsCardsToDom();

    addCardsClickHandler();
}

const renderPetsCardsToDom = (direction) => {
    let sliderWrapper = getSliderWrapper();
    if (direction === "left") {
        let divAfter = document.createElement("div")
        divAfter.className = "slider-item_left";
        sliderWrapper.append(divAfter);
        generateSliderCards(pets).forEach(card => {
            document.querySelector(".slider-item_left").append(card.generateSliderCard());
        });
    } else if (direction === "right") {
        let divBefore = document.createElement("div")
        divBefore.className = "slider-item_right";
        sliderWrapper.prepend(divBefore);
        generateSliderCards(pets).forEach(card => {
            document.querySelector(".slider-item_right").append(card.generateSliderCard());
        });
    } else {
        sliderWrapper = sliderWrapper.innerHTML += `<div class = "slider-item"></div>`
        generateSliderCards(pets).forEach(card => {
            document.querySelector(".slider-item").append(card.generateSliderCard());
        });

    }
}

const getSliderWrapper = () => {
    let petsSliderContainer = document.querySelector('.slider-wrapper');
    //petsSliderContainer.innerHTML = '';
    return petsSliderContainer;
}

const generateSliderCards = (pets) => {
    let cards = [];
    pets.forEach(card => {
        cards.push(new Pets(card))
    });
    return setRandomArrayToCards(cards);
}

const setRandomArrayToCards = (cards) => {
    return getRandomValuesArray(cards).map(e => {
        return cards[e];
    });
}


const getRandomValuesArray = (cards) => {
    const getRandomValue = () => {
        return Math.floor(Math.random() * pets.length);
    }
    let quantityArrayElements = 3;
    if(mediaQueryLaptop.matches){
        quantityArrayElements = 2;
    }else if(mediaQueryTablet.matches){
        quantityArrayElements = 1;
    }


    let randomValuesArray = [];
    while (randomValuesArray.length < quantityArrayElements) {
        console.log(quantityArrayElements)
        let randomValue = getRandomValue();
        if (randomValuesArray.length !== 0) {
            if (!randomValuesArray.includes(randomValue)) {
                randomValuesArray.push(randomValue);
            }

        } else {
            randomValuesArray.push(randomValue);
        }
    };

    if (randomValuesArrayStorage) {
        for (let i = 0; i < 3; i++) {
            if (randomValuesArrayStorage.includes(randomValuesArray[i])) {
                randomValuesArray = []
                while (randomValuesArray.length < quantityArrayElements) {
                    let randomValue = getRandomValue();
                    if (randomValuesArray.length !== 0) {
                        if (!randomValuesArray.includes(randomValue)) {
                            randomValuesArray.push(randomValue);
                        }

                    } else {
                        randomValuesArray.push(randomValue);
                    }
                }
                i = -1
            }
        }
    }
    randomValuesArrayStorage = randomValuesArray;
    return randomValuesArray;
}



const addButtonsClickHandler = () => {
    document.querySelector(".button-left").addEventListener('click', (e) => {
        carousel.classList.add("transition-left");
        renderPetsCardsToDom("left");
    });
    document.querySelector(".button-right").addEventListener('click', (e) => {
        carousel.classList.add("transition-right");
        renderPetsCardsToDom("right");
    });
    carousel.addEventListener("animationend", (animationEvent) => {
        if (animationEvent.animationName === "move-left") {
            carousel.classList.remove("transition-left");
            document.querySelector(".slider-item").innerHTML = document.querySelector(".slider-item_left").innerHTML;
            document.querySelector(".slider-item_left").remove();
        } else {
            carousel.classList.remove("transition-right");
            document.querySelector(".slider-item").innerHTML = document.querySelector(".slider-item_right").innerHTML;
            document.querySelector(".slider-item_right").remove();
        }
    });
}

const  renderModalWindow = (clickedCardData) => {
    let modal = new Modal('modal', clickedCardData);
    modal.buildModal();
}

const addCardsClickHandler = () => {
    document.querySelector('.slider-item').addEventListener('click', (e) => {
        if(e.target.closest('.pets-slider__card')){
            let clickedCardName = e.target.closest('.pets-slider__card').getAttribute('name');
            let clickedCardData = getClickedCardData(clickedCardName);
            renderModalWindow(clickedCardData)
        }
    })
}

const getClickedCardData = (name) => {
    return pets.find(e => e.name == name);
}
