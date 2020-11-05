#!/usr/bin/env node

const convertToCSV = require('./helper')

const produceCalendar = (paymentDatesArray = [], iterations = 0) => {
    if (iterations === 12){  return paymentDatesArray }

    const event = new Date();
    const monthToCalculate = event.getMonth() + iterations 
    event.setMonth(monthToCalculate);
    const calculatedMonth = event.getMonth()

    
    event.setDate(15)
    const bonus = calculatePaymentDate(event)
    event.setMonth(calculatedMonth+1, 0)
    const salary = calculatePaymentDate(event)
    const month = event.toLocaleString('default', { month: 'long' })

    const monthObject = {month, bonus, salary }

   return  produceCalendar([...paymentDatesArray, monthObject], iterations + 1)
}

const calculatePaymentDate = (event) => {

    const day = event.toString().slice(0,3)
    const date = event.getDate()

    let defaultDateOffset;
    switch (day) {
      case 'Sat':
        defaultDateOffset = date === 15 ? 4 : - 1
        return date + defaultDateOffset
      case 'Sun':
        defaultDateOffset = date === 15 ? 3 : - 2
        return date + defaultDateOffset
      default:
        return date
    }
}

const datesArray = produceCalendar()

console.log(convertToCSV(datesArray))

module.exports = {
    calculatePaymentDate,
    produceCalendar
}

