// import "ts-polyfill"
import { TypeGenerator, ClassGenerator, stringType, assignToClassProperty, expOrNull, numberType, Writer, createIdentifier, createTypeReferenceNode, TypeParameterDelarationGenerator, createArrayTypeNode } from "../src"

describe("test typescript compiler API directly", () => {
    test("idendifier Generatore", () => {
        const id = createIdentifier("hamid")
        expect(new Writer(id).print()).toEqual("hamid")
    })

    test("reference Generatore", () => {
        const id = createIdentifier("hamid")
        const cg = createTypeReferenceNode(id, [createTypeReferenceNode('genericType')])

        expect(new Writer(cg).print()).toEqual("hamid<genericType>")
    })

    test("TypeGenerator testing", () => {
        const string = createTypeReferenceNode("string")
        const arrayString = createArrayTypeNode(string)

        const cg = new TypeGenerator("MyType")
        cg.setType(arrayString)
        expect(new Writer(cg.generate()).print()).toEqual("type MyType = string[];")
        cg.addGenericType("hamid")
        expect(new Writer(cg.generate()).print()).toEqual("type MyType<hamid> = string[];")
    })

    test("TypeParameterDelarationGenerator testing", () => {
        const string = createTypeReferenceNode("string")
        const arrayString = createArrayTypeNode(string)

        const cg = new TypeParameterDelarationGenerator("MyType")
        cg.setConstraint(arrayString)
        cg.setDefaultType(string)

        expect(new Writer(cg.generate()).print()).toEqual("MyType extends string[] = string")

    })


})