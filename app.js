document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        
        {
            name: 'bear',
            img: 'images/bear.png'
        },

        {
            name: 'bear',
            img: 'images/bear.png'
        },
        
        {
            name: 'bee',
            img: 'images/bee.jpg'
        },

        {
            name: 'bee',
            img: 'images/bee.jpg'
        },

        {
            name: 'bird',
            img: 'images/bird.jpg'
        },
        
        {
            name: 'bird',
            img: 'images/bird.jpg'
        },

        {
            name: 'elephant',
            img: 'images/elephant.jpg'
        },
        
        {
            name: 'elephant',
            img: 'images/elephant.jpg'
        },
        
        {
            name: 'fish',
            img: 'images/fish.jpg'
        },

        {
            name: 'fish',
            img: 'images/fish.jpg'
        },
        
        {
            name: 'monkey',
            img: 'images/monkey.jpg'
        },

        {
            name: 'monkey',
            img: 'images/monkey.jpg'
        }
        

    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    //create board
    function createBoard() {
        for ( let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/cardBack.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkforMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('you found a match')
            cards[optionOneId].setAttribute('src', 'images/blank.jpg')
            cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
            cardsWon.push(cardsChosen)
        }
        else {
            cards[optionOneId].setAttribute('src', 'images/cardBack.png')
            cards[optionTwoId].setAttribute('src', 'images/cardBack.png')
            alert('sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length

        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'congratulations you win'
        }
    }

    //flip cards
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkforMatch, 500)
        }
    }


    createBoard()
    

    
})