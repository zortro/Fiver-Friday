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
        const nameLabel = document.createElement('label')
        nameLabel.setAttribute('for', 'Name')
        nameLabel.innerHTML = `Player ${i + 1} Name:`
        
        const nameInput = document.createElement('input')
        nameInput.setAttribute('type', 'text')
        nameInput.setAttribute('id', `name${i+1}`)
        nameInput.setAttribute('name', 'name')
        nameInput.setAttribute('placeholder', 'FirstName')

        //get labels for all bets to display on call
        const chickenLabel = document.createElement('label')
        chickenLabel.setAttribute('for', 'chickenWashington')
        chickenLabel.innerHTML = 'Chicken Washington:'
        
        const chickenInput = document.createElement('input')
        chickenInput.setAttribute('type', 'text')
        chickenInput.setAttribute('id', `chickenWashington${i+1}`)
        chickenInput.setAttribute('name', 'chickenWashington')
        chickenInput.setAttribute('placeholder', '1, 2 ,3...')

        nameLabel.appendChild(nameInput)
        nameInput.appendChild(newBr)
        chickenLabel.appendChild(newBr)
        chickenInput.appendChild(chickenLabel)
        document.getElementById('nameForm').prepend(nameLabel)
    }

    document.getElementById('countGen').classList.add('hide')
    nameGen.classList.remove('hide')
}

let playerArr = []

function playerObj(name, cwBet, obBet, pcBet, tlBet, prBet) {
    this.name = name,
    this.cwBet =cwBet,
    this.obBet = obBet,
    this.pcBet = pcBet,
    this.tlBet = tlBet,
    this.prBet = prBet
}

function genPlayers() {
    
    for (let i = 0; i < quantity.value; i++) {
        
        const names = document.getElementById(`name${i+1}`).value
/*         const cwBet = document.getElementById(`name${i+1}`).value
        const obBet = document.getElementById(`name${i+1}`).value
        const pcBet = document.getElementById(`name${i+1}`).value
        const tlBet = document.getElementById(`name${i+1}`).value
        const prBet = document.getElementById(`name${i+1}`).value */

        if (!names) {
            console.log('name required in field')
            return
        }

        //create or init new player obj
        const player = new playerObj(`${names}`, 1, 2, 3, 4, 5)
        

        playerArr.push(player)
    }
    console.log(playerArr)
    nameGen.classList.add('hide')
    document.getElementById('betGen').classList.remove('hide')

/*     playerArr.forEach(player => {
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
        
    }) */
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