import { ClassGenerator, TypeGenerator, createIdentifier, createTypeReferenceNode } from '../src'

describe('Class Generator test file', () => {

    test("class Generator", () => {

        const ifcText = new TypeGenerator("IfcText")
        ifcText.Modifiers.export()
        ifcText.setType(createTypeReferenceNode(createIdentifier("string")))

        const c = new ClassGenerator("IfcElement")
        c.extends(ifcText.Identifier)
        const property = c.addProperty("_height").private().setType(createTypeReferenceNode(createIdentifier("number")))
        const o = c.setConstructor()
        const param1 = o.addParameter("height").setType(ifcText.Refrence).optional()

        const body = o.setBody()
        body.addExpression(assignToClassProperty(property.Identifier, expOrNull(param1.Identifier)))


        c.addGetter("Height")
            .setType(ifcText.Refrence)
            .readonly().private()
            .setBody()
            .returnsProperty(property.Identifier)

        console.log(new Writer(c.generate()).print())

    })
})


