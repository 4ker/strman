import last from '../src/last'

describe('strman.last', () => {
  test('should be foo', () => {
    const fixtures = ['foo', 'foobarfoo']

    fixtures.forEach((el) => {
      expect(last(el, 3)).toBe('foo')
    })
  })
})
