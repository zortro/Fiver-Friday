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
        const nameLi = document.createElement('li')

        const nameLabel = document.createElement('label')
        nameLabel.setAttribute('for', 'Name')
        nameLabel.innerHTML = `Player ${i + 1} Name:`
        
        const nameInput = document.createElement('input')
        nameInput.setAttribute('type', 'text')
        nameInput.setAttribute('id', `name${i+1}`)
        nameInput.setAttribute('name', 'name')
        nameInput.setAttribute('placeholder', 'FirstName')

        const cwLi = document.createElement('li')
        const obLi = document.createElement('li')
        const pcLi = document.createElement('li')
        const tlLi = document.createElement('li')
        const prLi = document.createElement('li')
        
        const chickenLabel = document.createElement('label')
        chickenLabel.setAttribute('for', 'chickenWashington')
        chickenLabel.innerHTML = `Player ${i+1} Chicken Washington:`
        
        const chickenInput = document.createElement('input')
        chickenInput.setAttribute('type', 'text')
        chickenInput.setAttribute('id', `chickenWashington${i+1}`)
        chickenInput.setAttribute('name', 'chickenWashington')
        chickenInput.setAttribute('placeholder', '1, 2 ,3...')

        const ossoLabel = document.createElement('label')
        ossoLabel.setAttribute('for', 'ossoBuko')
        ossoLabel.innerHTML = `Player ${i+1} Osso Buko:`
        
        const ossoInput = document.createElement('input')
        ossoInput.setAttribute('type', 'text')
        ossoInput.setAttribute('id', `ossoBuko${i+1}`)
        ossoInput.setAttribute('name', 'ossoBuko')
        ossoInput.setAttribute('placeholder', '1, 2 ,3...')

        const porkLabel = document.createElement('label')
        porkLabel.setAttribute('for', 'porkChop')
        porkLabel.innerHTML = `Player ${i+1} Pork Chop:`
        
        const porkInput = document.createElement('input')
        porkInput.setAttribute('type', 'text')
        porkInput.setAttribute('id', `porkChop${i+1}`)
        porkInput.setAttribute('name', 'porkChop')
        porkInput.setAttribute('placeholder', '1, 2 ,3...')

        const loinLabel = document.createElement('label')
        loinLabel.setAttribute('for', 'tenderloin')
        loinLabel.innerHTML = `Player ${i+1} Tenderloin:`
        
        const loinInput = document.createElement('input')
        loinInput.setAttribute('type', 'text')
        loinInput.setAttribute('id', `tenderloin${i+1}`)
        loinInput.setAttribute('name', 'tenderloin')
        loinInput.setAttribute('placeholder', '1, 2 ,3...')

        const primeLabel = document.createElement('label')
        primeLabel.setAttribute('for', 'primeRib')
        primeLabel.innerHTML = `Player ${i+1} Prime Rib:`
        
        const primeInput = document.createElement('input')
        primeInput.setAttribute('type', 'text')
        primeInput.setAttribute('id', `primeRib${i+1}`)
        primeInput.setAttribute('name', 'primeRib')
        primeInput.setAttribute('placeholder', '1, 2 ,3...')

        nameLi.appendChild(nameLabel)
        nameLabel.appendChild(nameInput)

        document.getElementById('betInputs').appendChild(cwLi)
        cwLi.appendChild(chickenLabel)
        chickenLabel.appendChild(chickenInput)

        document.getElementById('betInputs').appendChild(obLi)
        obLi.appendChild(ossoLabel)
        ossoLabel.appendChild(ossoInput)

        document.getElementById('betInputs').appendChild(pcLi)
        pcLi.appendChild(porkLabel)
        porkLabel.appendChild(porkInput)

        document.getElementById('betInputs').appendChild(tlLi)
        tlLi.appendChild(loinLabel)
        loinLabel.appendChild(loinInput)

        document.getElementById('betInputs').appendChild(prLi)
        prLi.appendChild(primeLabel)
        primeLabel.appendChild(primeInput)

        document.getElementById('nameForm').prepend(nameLi)
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

function calculate() {
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
}

function genPlayers() {
    
    for (let i = 0; i < quantity.value; i++) {
        
        const names = document.getElementById(`name${i+1}`).value
        const cwBet = document.getElementById(`chickenWashington${i+1}`).value
        const obBet = document.getElementById(`ossoBuko${i+1}`).value
        const pcBet = document.getElementById(`porkChop${i+1}`).value
        const tlBet = document.getElementById(`tenderloin${i+1}`).value
        const prBet = document.getElementById(`primeRib${i+1}`).value

        if (!names) {
            console.log('name required in field')
            return
        }

        //create or init new player obj
        const player = new playerObj(`${names}`, cwBet, obBet, pcBet, tlBet, prBet)

        playerArr.push(player)
    }

    nameGen.classList.add('hide')
    document.getElementById('gameBoard').classList.remove('hide')

    playerArr.forEach(player => {
        console.log(player.name)

        const nameLi = document.createElement('li')
        nameLi.innerHTML = player.name
        
        const chickLi = document.createElement('li')
        chickLi.innerHTML = player.cwBet
        
        const ossoLi = document.createElement('li')
        ossoLi.innerHTML = player.obBet

        const porkLi = document.createElement('li')
        porkLi.innerHTML = player.pcBet
        
        const loinLi = document.createElement('li')
        loinLi.innerHTML = player.tlBet

        const primeLi = document.createElement('li')
        primeLi.innerHTML = player.prBet

        const scoreLi = document.createElement('li')
        scoreLi.innerHTML = calculate

        document.getElementById('scoreBoard').appendChild(nameLi)

        nameLi.appendChild(chickLi)
        chickLi.appendChild(ossoLi)
        ossoLi.appendChild(porkLi)
        porkLi.appendChild(loinLi)
        loinLi.appendChild(primeLi)

        console.log(player)
    })

    //display inputs for end of day
}

function genBet() {
    document.getElementById('gameBoard').classList.remove('hide')
}

function endDay() {

}