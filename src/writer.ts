import ts from "typescript";

export class Writer {

    private _printer: ts.Printer;
    private _nodes: Array<ts.Node> = [];

    constructor(...nodes: Array<ts.Node>) {
        this._nodes = nodes || this._nodes;
        this._printer = ts.createPrinter({ newLine: ts.NewLineKind.CarriageReturnLineFeed });
    }

    setNodes(...nodes: Array<ts.Node>) {
        this._nodes = nodes || this._nodes;
    }

    print(): string {
        const result: Array<string> = [];
        this._nodes.forEach(n =>
            result.push(this._printer.printNode(ts.EmitHint.Unspecified, n, undefined))
        )
        return result.join("\n\n")
    }
}