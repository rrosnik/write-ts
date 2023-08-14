import * as ts from "typescript";

export class ModifierHandler {
    private _modifiers: ts.Modifier[] = [];

    private addModifier(modifier: ts.Modifier) {
        if (this._modifiers.find(m => m.kind === modifier.kind)) return;
        this._modifiers.push(modifier);
    }

    export(): ModifierHandler {
        this.addModifier(ts.factory.createModifier(ts.SyntaxKind.ExportKeyword));
        return this;
    }



    toArray(): ts.Modifier[] {
        return this._modifiers
    }


}