import { encodeMethod } from 'ethjs-abi'

const getFunction = (abi, name) => abi.find(fn => fn.name === name)

const encodeFunction = (abi, name, params = []) =>
  encodeMethod(getFunction(abi, name), params)

export default encodeFunction
