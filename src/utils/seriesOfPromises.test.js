import seriesOfPromises from './seriesOfPromises'

const makePromise = async (item, i) => ({ item, i })

const promises = [...new Array(3)].map(makePromise)

describe('seriesOfPromises', () => {
  let results

  beforeAll(async () => {
    results = await seriesOfPromises(promises)
  })

  it('executed one after the other', () => {
    expect(results[0].i).toEqual(0)
    expect(results[1].i).toEqual(1)
    expect(results[2].i).toEqual(2)
  })
})
