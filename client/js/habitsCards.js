// create and append the cards to the Habits List element
function createAndAppendCards(data, targetElem) {
  if (data.sleep_track) {
    const sleepCard = document.createElement('div')
    sleepCard.classList.add('habitsCard', 'habitsSleepCard')

    const sleepCardTitle = document.createElement('div')
    sleepCardTitle.classList.add('habitsCardTitle', 'habitsSleepCardTitle')
    sleepCardTitle.textContent = 'Sleep'
    sleepCard.append(sleepCardTitle)

    const sleepCardTarget = document.createElement('div')
    sleepCardTarget.classList.add('habitsCardTarget', 'habitsSleepCardTarget')
    sleepCardTarget.textContent = data.sleep_goal
    sleepCard.append(sleepCardTarget)

    const sleepCardBtn = document.createElement('div')
    sleepCardBtn.classList.add('habitsCardBtn', 'habitsSleepCardBtn')
    sleepCardBtn.innerHTML = '<i class="fa-solid fa-thumbs-down"></i>'
    sleepCardBtn.addEventListener('click', () =>
      toggleBtn(sleepCardBtn, 'sleep')
    )
    sleepCard.append(sleepCardBtn)

    targetElem.append(sleepCard)
  }

  if (data.exercise_track) {
    const exerciseCard = document.createElement('div')
    exerciseCard.classList.add('habitsCard', 'habitsExerciseCard')

    const exerciseCardTitle = document.createElement('div')
    exerciseCardTitle.classList.add(
      'habitsCardTitle',
      'habitsExerciseCardTitle'
    )
    exerciseCardTitle.textContent = 'Exercise'
    exerciseCard.append(exerciseCardTitle)

    const exerciseCardTarget = document.createElement('div')
    exerciseCardTarget.classList.add(
      'habitsCardTarget',
      'habitsExerciseCardTarget'
    )
    exerciseCardTarget.textContent = data.exercise_goal
    exerciseCard.append(exerciseCardTarget)

    const exerciseCardBtn = document.createElement('div')
    exerciseCardBtn.classList.add('habitsCardBtn', 'habitsExerciseCardBtn')
    exerciseCardBtn.innerHTML = '<i class="fa-solid fa-thumbs-down"></i>'
    exerciseCardBtn.addEventListener('click', () =>
      toggleBtn(exerciseCardBtn, 'exercise')
    )
    exerciseCard.append(exerciseCardBtn)

    targetElem.append(exerciseCard)
  }

  if (data.water_track) {
    const waterCard = document.createElement('div')
    waterCard.classList.add('habitsCard', 'habitsWaterCard')

    const waterCardTitle = document.createElement('div')
    waterCardTitle.classList.add('habitsCardTitle', 'habitsWaterCardTitle')
    waterCardTitle.textContent = 'Water'
    waterCard.append(waterCardTitle)

    const waterCardTarget = document.createElement('div')
    waterCardTarget.classList.add('habitsCardTarget', 'habitsWaterCardTarget')
    waterCardTarget.textContent = data.water_goal
    waterCard.append(waterCardTarget)

    const waterCardBtn = document.createElement('div')
    waterCardBtn.classList.add('habitsCardBtn', 'habitsWaterCardBtn')

    const waterBtnContainer = document.createElement('div')
    waterBtnContainer.classList.add('habitsBtnContainer')
    const waterMinusBtn = document.createElement('div')
    waterMinusBtn.classList.add('habitsMinusBtn')
    waterMinusBtn.textContent = '-'
    waterMinusBtn.addEventListener('click', () =>
      adjustCounter('water', 'decrease')
    )
    waterBtnContainer.append(waterMinusBtn)

    const waterCurrentBtn = document.createElement('div')
    waterCurrentBtn.classList.add('habitsCurrentBtn')
    // serverside: need the current water intake, need a JOIN with another table
    waterCurrentBtn.textContent = data.water_entry || 0
    waterBtnContainer.append(waterCurrentBtn)

    const waterPlusBtn = document.createElement('div')
    waterPlusBtn.classList.add('habitsPlusBtn')
    waterPlusBtn.textContent = '+'
    waterPlusBtn.addEventListener('click', () =>
      adjustCounter('water', 'increase')
    )
    waterBtnContainer.append(waterPlusBtn)

    waterCard.append(waterBtnContainer)
    targetElem.append(waterCard)
  }

  if (data.smoking_track) {
    const smokingCard = document.createElement('div')
    smokingCard.classList.add('habitsCard', 'habitsSmokingCard')

    const smokingCardTitle = document.createElement('div')
    smokingCardTitle.classList.add('habitsCardTitle', 'habitsSmokingCardTitle')
    smokingCardTitle.textContent = 'Smoking'
    smokingCard.append(smokingCardTitle)

    const smokingCardTarget = document.createElement('div')
    smokingCardTarget.classList.add(
      'habitsCardTarget',
      'habitsSmokingCardTarget'
    )
    smokingCardTarget.textContent = data.smoking_goal
    smokingCard.append(smokingCardTarget)

    const smokingCardBtn = document.createElement('div')
    smokingCardBtn.classList.add('habitsCardBtn', 'habitsSmokingCardBtn')

    const smokingBtnContainer = document.createElement('div')
    smokingBtnContainer.classList.add('habitsBtnContainer')
    const smokingMinusBtn = document.createElement('div')
    smokingMinusBtn.classList.add('habitsMinusBtn')
    smokingMinusBtn.textContent = '-'
    smokingMinusBtn.addEventListener('click', () =>
      adjustCounter('smoking', 'decrease')
    )
    smokingBtnContainer.append(smokingMinusBtn)

    const smokingCurrentBtn = document.createElement('div')
    smokingCurrentBtn.classList.add('habitsCurrentBtn')
    // serverside: need the current water intake, need a JOIN with another table
    smokingCurrentBtn.textContent = data.smoking_entry || 0
    smokingBtnContainer.append(smokingCurrentBtn)

    const smokingPlusBtn = document.createElement('div')
    smokingPlusBtn.classList.add('habitsPlusBtn')
    smokingPlusBtn.textContent = '+'
    smokingPlusBtn.addEventListener('click', () =>
      adjustCounter('smoking', 'increase')
    )
    smokingBtnContainer.append(smokingPlusBtn)

    smokingCard.append(smokingBtnContainer)
    targetElem.append(smokingCard)
  }

  if (data.money_track) {
    const moneyCard = document.createElement('div')
    moneyCard.classList.add('habitsCard', 'habitsMoneyCard')

    const moneyCardTitle = document.createElement('div')
    moneyCardTitle.classList.add('habitsCardTitle', 'habitsMoneyCardTitle')
    moneyCardTitle.textContent = 'Money'
    moneyCard.append(moneyCardTitle)

    const moneyCardTarget = document.createElement('div')
    moneyCardTarget.classList.add('habitsCardTarget', 'habitsMoneyCardTarget')
    moneyCardTarget.textContent = data.money_goal
    moneyCard.append(moneyCardTarget)

    const moneyCardBtn = document.createElement('div')
    moneyCardBtn.classList.add('habitsCardBtn', 'habitsMoneyCardBtn')

    const moneyBtnContainer = document.createElement('div')
    moneyBtnContainer.classList.add('habitsBtnContainer')
    const moneyMinusBtn = document.createElement('div')
    moneyMinusBtn.classList.add('habitsMinusBtn')
    moneyMinusBtn.textContent = 'REMOVE'
    moneyMinusBtn.addEventListener('click', () =>
      adjustCounter('money', 'decrease', moneyCurrentBtn.value)
    )
    moneyBtnContainer.append(moneyMinusBtn)

    const moneyCurrentBtn = document.createElement('input')
    moneyCurrentBtn.classList.add('habitsCurrentBtn')
    // serverside: need the current water intake, need a JOIN with another table
    moneyCurrentBtn.value = 0
    moneyBtnContainer.append(moneyCurrentBtn)

    const moneyPlusBtn = document.createElement('div')
    moneyPlusBtn.classList.add('habitsPlusBtn')
    moneyPlusBtn.textContent = 'ADD'
    moneyPlusBtn.addEventListener('click', () =>
      adjustCounter('money', 'increase', moneyCurrentBtn.value)
    )
    moneyBtnContainer.append(moneyPlusBtn)

    moneyCard.append(moneyBtnContainer)
    targetElem.append(moneyCard)
  }
}

// Utility functions ///////////////////

function toggleBtn(btnRef, activity) {
  console.log('btnRef -> ', btnRef)
  if (btnRef.innerHTML.match(/fa-thumbs-down/i)) {
    btnRef.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>'
    // send update to the server
    console.log(`do a fetch POST:  ${activity} has been marked as DONE`)

    // createHabitsWrapper()
  } else {
    btnRef.innerHTML = '<i class="fa-solid fa-thumbs-down"></i>'
    // send update to the server
    console.log(`do a fetch POST: ${activity} has been marked as UNDONE`)

    // createHabitsWrapper()
  }
}

function adjustCounter(activity, operation, amount = 1) {
  console.log('fetch POST ')
  console.log(
    `activity: ${activity}, operation: ${operation}, amount: ${amount}`
  )
  // call createHabitsWrapper to update the view and maintain
  // one Source of Truth
}