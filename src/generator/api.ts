import { ClassGenerator } from "./class/classGenerator";
import * as ts from "typescript";


export function nodeText(n: ts.Node): string {
    const resultFile = ts.createSourceFile(
        'testddddddddddddddddd.ts',
        '',
        ts.ScriptTarget.Latest,
        false,
        ts.ScriptKind.TS,
    );
    const printer = ts.createPrinter({
        newLine: ts.NewLineKind.LineFeed,
    });
    const result = printer.printNode(
        ts.EmitHint.Unspecified,
        n,
        resultFile,
    );
    return result;
}