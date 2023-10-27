import { HeritageClauseGenerator, Writer, createIdentifier, createTypeReferenceNode } from '../src'

describe('Heritage Clause Generator test file', () => {
    test('should ', () => {
        const hcg = new HeritageClauseGenerator();
        hcg.extends(createIdentifier("extendedClass"))
        hcg.implements(createIdentifier("implementedClass1"))
        hcg.implements(createIdentifier("implementedClass2"), [
            createTypeReferenceNode('generic1')
        ])

        expect(new Writer(hcg.generate()[0]).print()).toEqual(" extends extendedClass")
        expect(new Writer(hcg.generate()[1]).print())
            .toEqual(" implements implementedClass1, implementedClass2<generic1>")
    })
})