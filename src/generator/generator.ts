import * as ts from "typescript";
import { TypeGenerator } from "./typeGenerator";

export class Generator {
    private file: ts.SourceFile;
    private program: ts.Program;
    private printer: ts.Printer;
    constructor(fileNames: string[], options: ts.CompilerOptions) {
        this.file = ts.createSourceFile("fileName", "", ts.ScriptTarget.ES2022, false, ts.ScriptKind.TS)
        this.program = ts.createProgram(fileNames, options);
        this.printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
    }


    test() {
        const stringTypeReference = ts.factory.createTypeReferenceNode("string");


        const tg = new TypeGenerator("NNNNNNNNNname");
        tg.Modifiers.export();
        tg.setLiteralType(stringTypeReference);
        tg.addTypeParameter("pppppppppppppp")
        tg.addTypeParameter("qqqqqqqqqqqqqqq")


        return this.printer.printNode(ts.EmitHint.Unspecified, tg.generate(), this.file);
    }


}