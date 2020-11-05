const { calculatePaymentDate, produceCalendar  } = require('./index');
const convertToCSV  = require('./helper');
const testArray = require('./payment.spec.json')
describe('produceCalendar    ', () => {
  test('should produce an array with objects containing information for each month ', () => {
    const res = produceCalendar()
    expect(Array.isArray(res)).toBe(true);
    expect(res).toHaveLength(12)
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const everyMonth = res.map(el => el.month).every(el => months.includes(el))
    expect(everyMonth).toBe(true)
  });
})
describe('convertToCSV    ', () => {
  test('should convert an array of objects to a csv file', () => {
    const res = convertToCSV(testArray)
      expect(typeof res).toBe('string')
      expect(res).toMatch(/March/gi)
      expect(res).toMatch(/January/gi)
      expect(res).toMatch(/Bonus/gi)
      expect(res).toMatch(/April/gi)
  });
})
describe('calculatePaymentDate    ', () => {
  test('should return salary payments on a friday if the last day is a weekend', () => {
    const date = new Date('2020', 12, 0, 0, 0, 0)
    const res = calculatePaymentDate(date)
    expect(res).toBe(31)
  });
  test('should return salary payments the last day of the month if its a weekday', () => {
    const date = new Date('2020',10,0,0,0,0)
    const res = calculatePaymentDate(date)
    expect(res).toBe(30)
  });
  test('calculatePaymentDate to return bonus payments on the 15th if its a weekday', () => {
    const date = new Date('2020', 11, 15, 0, 0, 0)
    const res = calculatePaymentDate(date)
    expect(res).toBe(15)
  });
  test('calculatePaymentDate to return bonus payments on the following wednesday if the 15th was a weekend', () => {
    const date = new Date('2020', 10, 15,0,0,0)
    const res = calculatePaymentDate(date)
    expect(res).toBe(18)
  });
});


