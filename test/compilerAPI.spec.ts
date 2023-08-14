
// import "ts-polyfill";

import { SyntaxKind, factory } from "typescript";
import { nodeText, ConstructorGenerator, IdentifierGenerator, TypeGenerator, ParameterGenerator, StatementGenerator } from "../src";

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
        cg.setLiteralType(arrayString);

        expect(nodeText(cg.generate())).toEqual("type MyType = string[];")

        const f = new TypeGenerator("IfcText");
        f.Modifiers.export();
        f.setLiteralType(cg.toArrayTypeNode())
        expect(nodeText(f.generate())).toEqual("export type IfcText = MyType[];")
    });


    test("Statement Generator", () => {
        const s = new StatementGenerator();

        console.log(nodeText(s.generate()));


    })
});