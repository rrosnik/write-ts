import { ClassGenerator, TypeGenerator, Writer, createIdentifier, createTypeReferenceNode } from '../src'

describe('Class Generator test file', () => {

    test("class Generator", () => {

        const ifcText = new TypeGenerator("IfcText")
        ifcText.Modifiers.export()
        ifcText.setType(createTypeReferenceNode(createIdentifier("string")))

        const c = new ClassGenerator("IfcElement")
        const c2 = new ClassGenerator("ClassNumber2")
        c2.extends(c.Identifier)
        c2.Modifiers.export().private()
        // const property = c.addProperty("_height").private().setType(createTypeReferenceNode(createIdentifier("number")))
        // const o = c.setConstructor()
        // const param1 = o.addParameter("height").setType(ifcText.Refrence).optional()

        // const body = o.setBody()
        // body.addExpression(assignToClassProperty(property.Identifier, expOrNull(param1.Identifier)))


        // c.addGetter("Height")
        // .setType(ifcText.Refrence)
        // .readonly().private()
        // .setBody()
        // .returnsProperty(property.Identifier)

        expect(new Writer(c2.generate()).print()).toEqual("")
    })
})


