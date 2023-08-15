
// import "ts-polyfill";

import ts, { SyntaxKind, factory } from "typescript";
import { nodeText, ConstructorGenerator, IdentifierGenerator, TypeGenerator, ParameterGenerator, ClassGenerator, stringType, assignToClassProperty, expOrNull, numberType } from "../src";

describe("test typescript compiler API directly", () => {
    test("idendifier Generatore", () => {
        const cg = new IdentifierGenerator("hamid");
        expect(nodeText(cg.generate())).toEqual("hamid")
    });

    test("TypeGenerator testing", () => {
        // const a = factory.createTypeQueryNode(new IdentifierGenerator("aaaaaa").generate()) // typeof ...        const a = factory.createTypeQueryNode(new IdentifierGenerator("aaaaaa").generate())
        // const a = factory.createTypeLiteralNode(undefined) //  = {} 
        // const a = factory.createTypeOperatorNode(SyntaxKind.KeyOfKeyword,) //  = keyof/readonly/unique ...
        // const a = factory.createTypePredicateNode(undefined, "ddddddddddd",undefined) //  ddddddddddd is ...
        const string = factory.createTypeReferenceNode("string") //  ddddddddddd<asdasd,asdasd>
        const arrayString = factory.createArrayTypeNode(string);

        const cg = new TypeGenerator("MyType");
        cg.setType(arrayString);

        expect(nodeText(cg.generate())).toEqual("type MyType = string[];")

        const f = new TypeGenerator("IfcText");
        f.Modifiers.export();
        f.setType(cg.toArrayTypeNode())
        expect(nodeText(f.generate())).toEqual("export type IfcText = MyType[];")
    });

    test("class Generator", () => {

        const ifcText = new TypeGenerator("IfcText");
        ifcText.Modifiers.export();
        ifcText.setType(stringType);

        const c = new ClassGenerator("IfcElement");
        c.extends("Elements")
        const property = c.addProperty("_height").private().setType(numberType);
        const o = c.setConstructor();
        const param1 = o.addParameter("height").setType(ifcText.Refrence).optional();

        const body = o.setBody();
        body.addExpression(assignToClassProperty(property.Identifier, expOrNull(param1.Identifier)))


        c.addGetter("Height")
            .setType(ifcText.Refrence)
            .readonly().private()
            .setBody()
            .returnsProperty(property.Identifier);


        console.log(nodeText(c.generate()));
    })
});