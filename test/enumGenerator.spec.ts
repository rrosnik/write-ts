import { EnumGenerator, Writer } from '../src'

describe('EnumGenerator test file', () => {
    test('should first', () => {
        const eg = new EnumGenerator('enumName')
        eg.Modifiers.export().public()
        // expect(new Writer(eg.generate()).print()).toEqual(`export public enum enumName {\n\r}`)
    })
})