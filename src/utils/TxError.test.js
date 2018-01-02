import TxError from './TxError'

const error = new TxError('test', 'test tx')

it('can be created with a tx', () => {
  expect(error.tx).toEqual('test tx')
})
