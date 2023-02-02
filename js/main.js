const quantity = document.getElementById('quantity')
const nameGen = document.getElementById('nameGen')
const newBr = document.createElement('br')

let i = 0

function genCount() {
    if (quantity.value > 10 || quantity.value < 1) {
        console.log('Please enter a value between 1 and 10')
        return
    }

    for (let i = 0; i < quantity.value; i++) {
        const newLabel = document.createElement('label')
        newLabel.setAttribute('for', 'Name')
        newLabel.innerHTML = 'Player Name:'
        
        const newInput = document.createElement('input')
        newInput.setAttribute('type', 'text')
        newInput.setAttribute('id', `name${i+1}`)
        newInput.setAttribute('name', 'name')
        newInput.setAttribute('placeholder', 'FirstName')


        newLabel.appendChild(newInput)
        newInput.appendChild(newBr)
        document.getElementById('nameForm').prepend(newLabel)
    }

    document.getElementById('countGen').classList.add('hide')
    nameGen.classList.remove('hide')
}

let playerArr = []

function genPlayers() {
    
    for (let i = 0; i < quantity.value; i++) {
        
        const names = document.getElementById(`name${i+1}`).value

        if (!names) {
            console.log('name required in field')
            return
        }

        //create or init new player obj

        playerArr.push(player)
    }
    console.log(playerArr)
    nameGen.classList.add('hide')
    document.getElementById('betGen').classList.remove('hide')

    playerArr.forEach(player => {
        const nameTag = document.createElement('p')
        nameTag.innerHTML = player.name

        const newLabel = document.createElement('label')
        newLabel.setAttribute('for', 'bets')
        newLabel.innerHTML = player.bets
        
        const newInput = document.createElement('input')
        newInput.setAttribute('type', 'text')
        newInput.setAttribute('id', `name${i+1}`)
        newInput.setAttribute('name', 'name')
        newInput.setAttribute('placeholder', 'Bet Number')

        nameTag.appendChild(newLabel)
        newLabel.appendChild(newInput)

        document.getElementById('betForm').prepend(nameTag)
        
    })
}

function genBet() {
    document.getElementById('gameBoard').classList.remove('hide')
}

function endDay() {

}

let arr = [1, 1, 1, 1]

let sum = 0

//calculate outcome at end of day
function calculate() {
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
}

function main() {
    calculate()
}

main()