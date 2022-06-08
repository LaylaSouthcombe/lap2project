function createMetricsWrapper() {
  // wipe the habits page
  metricspage.innerHTML = ''

  // HARDCODED USER
  const user = 'igormirowski'

  createHabitsSelectionBar(metricspage, user)
  createCalendar(metricspage)

  // will pass it the metrics when available as a second argument
}

function createCalendar(targetElement) {
  const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const { numberOfDays, dayOfLastMonth, dayOfWeekLastMonthNumber } =
    getNumberOfDaysLastMonth()
  // console.log(numberOfDays)
  // console.log(dayOfLastMonth)
  const now = new Date()
  const today = now.getDate()
  const thisMonth = getMonthString()

  const calendarWrapper = document.createElement('div')
  calendarWrapper.classList.add('calendar-wrapper')

  const calendarMonth = document.createElement('div')
  calendarMonth.classList.add('calendar-month')
  calendarMonth.textContent = thisMonth
  calendarWrapper.append(calendarMonth)

  const calendarDaysWrapper = document.createElement('div')
  calendarDaysWrapper.classList.add('calendar-days-wrapper')
  daysOfTheWeek.forEach((nameOfDay) => {
    const day = document.createElement('div')
    day.classList.add('calendar-day-name', 'calendar-day')
    day.textContent = nameOfDay
    calendarDaysWrapper.append(day)
  })

  let j = dayOfLastMonth
  // console.log('dayOfLastMonth ', dayOfLastMonth)
  for (let i = 1; i <= 35; i++) {
    // console.log('j ', j)
    const day = document.createElement('div')
    day.classList.add('calendar-day-number', 'calendar-day')

    // console.log('aaaaaa ', dayOfWeekLastMonthNumber)
    if (j > numberOfDays) j = 1

    if (i > dayOfWeekLastMonthNumber + 1 && i <= dayOfLastMonth + 28) {
      // console.log('****', 28 + dayOfWeekLastMonthNumber)
      if (j === today) day.style.fontWeight = 'bold'
      day.textContent = j++
    }

    calendarDaysWrapper.append(day)
  }

  calendarWrapper.append(calendarDaysWrapper)
  targetElement.append(calendarWrapper)
}

function getNumberOfDaysLastMonth() {
  const now = new Date()
  const month = now.getMonth()
  // console.log(month)

  const year = now.getFullYear()
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

  let numberOfDays
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      numberOfDays = 31
      break
    case 4:
    case 6:
    case 9:
    case 11:
      numberOfDays = 30
      break
    case 2:
      if (isLeapYear) {
        numberOfDays = 29
      } else {
        numberOfDays = 28
      }
    default:
      console.log('Something went wrong getting the days of the month...')
  }

  const { dayOfLastMonth, dayOfWeekLastMonthNumber } = getLastMonthDay()

  return {
    numberOfDays,
    dayOfLastMonth,
    dayOfWeekLastMonthNumber,
  }
}

function getLastMonthDay(date = new Date()) {
  const lastMonth = new Date(date.getTime())
  lastMonth.setDate(date.getDate() - 28)
  const dayOfLastMonth = lastMonth.getDate() + 1
  const dayOfWeekLastMonthNumber = lastMonth.getDay()
  return { dayOfLastMonth, dayOfWeekLastMonthNumber }
}

function getMonthString() {
  const now = new Date()
  const month = now.getMonth() + 1

  switch (month) {
    case 1:
      return 'January'
      break
    case 2:
      return 'February'
      break
    case 3:
      return 'March'
      break
    case 4:
      return 'April'
      break
    case 5:
      return 'May'
      break
    case 6:
      return 'June'
      break
    case 7:
      return 'July'
      break
    case 8:
      return 'August'
      break
    case 9:
      return 'September'
      break
    case 10:
      return 'October'
      break
    case 11:
      return 'November'
      break
    case 12:
      return 'December'
      break
    default:
      console.log('Something went wrong getting the month...')
  }
}

// Create the bar at the top of the calendar that allows the user to
// select which habits to show
async function createHabitsSelectionBar(targetElement, user) {
  // chartWrapper will have the chart with the habit's data
  const chartWrapper = document.createElement('div')
  chartWrapper.classList.add('metricsChartWrapper')

  const iconsDict = {
    exerciseSelBtn: 'fa-football',
    sleepSelBtn: 'fa-bed',
    moneySelBtn: 'fa-coins',
    smokingSelBtn: 'fa-smoking',
    waterSelBtn: 'fa-faucet-drip',
  }

  // selectionBarWrapper will have the buttons to select which
  // habit to show
  const selectionBarWrapper = document.createElement('div')
  selectionBarWrapper.classList.add('selectionBarWrapper')

  const trackingData = await getTrackingData(user)
  console.log('trackingData -> ', trackingData)

  for (let habit in trackingData) {
    if (
      trackingData[habit] &&
      habit.includes('_track') &&
      trackingData[habit] === true
    ) {
      console.log('*=*=* ', habit.includes('_track'))

      const btnClassName = habit.split('_track')[0].concat('SelBtn')
      const newBtn = document.createElement('div')
      newBtn.classList.add(btnClassName, 'metricsSelBtn')
      newBtn.innerHTML = `<i class="fa-solid ${iconsDict[btnClassName]}"></i>`

      newBtn.addEventListener('click', () => {
        // 1. fetch data for this specific habit
        console.log('Will populate the chart here')
        // 2. populate the chart
        chartWrapper.innerHTML = ''

        const chartElement = document.createElement('div')
        chartElement.classList.add('chartElement')
        chartWrapper.append(chartElement)
      })

      selectionBarWrapper.append(newBtn)
      console.log(btnClassName)
    }
  }

  targetElement.append(selectionBarWrapper)
  targetElement.append(chartWrapper)
}
