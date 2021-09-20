const { sum, inOneHour } = require('./example')

describe('math functions', () => {
  beforeAll(() => {
    console.log('math operations')
  })
  beforeEach(() => {
    console.log('run in each function')
  })
  afterAll(() => {
    console.log('finished')
  })
  it('sums 2 numbers', () => {
    expect(sum(1, 2)).toBe(4)
  })
})

describe('time functions', () => {
  it('returns timestamp for one hour', () => {
    // cria nova função baseada em Date
    // .bind usa as variáveis de referência repassadas(global.Date)
    const realDateNow = Date.now.bind(global.Date)

    // congela ele temporariamente p/ fazer o teste
    global.Date.now = () => 0
    expect(inOneHour()).toBe(3600000)

    global.Date.now = realDateNow
    // console.log(Date.now())
  })
})