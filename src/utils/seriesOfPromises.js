const seriesOfPromises = arrayOfPromises =>
  arrayOfPromises.reduce(
    (acc, elem) =>
      acc.then(result => elem.then(Array.prototype.concat.bind(result))),
    Promise.resolve([])
  )

export default seriesOfPromises
