const now = () => new Date().getTime()

const makePromise = (item, i) =>
  new Promise(resolve => {
    setTimeout(() => resolve({ item, i, t: now() }), 100)
  })

describe('seriesOfPromises', () => {
  let results = []

  beforeAll(async () => {
    for (let i = 0; i < 3; i++) {
      results.push(await makePromise(undefined, i))
    }
  })

  it('executed one after the other', () => {
    expect(results[0].i).toEqual(0)
    expect(results[1].i).toEqual(1)
    expect(results[2].i).toEqual(2)
    expect(results[0].t).toBeLessThan(results[1].t)
    expect(results[1].t).toBeLessThan(results[2].t)
  })
})
