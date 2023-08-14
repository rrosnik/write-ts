import * as ts from "typescript";

export class ModifierLikeHandler {
    private _modifiers: ts.ModifierLike[] = [];

    private addModifier(modifier: ts.Modifier) {
        if (this._modifiers.find(m => m.kind === modifier.kind)) return;
        this._modifiers.push(modifier);
    }

    export(): ModifierLikeHandler {
        this.addModifier(ts.factory.createModifier(ts.SyntaxKind.ExportKeyword));
        return this;
    }



    toArray(): ts.ModifierLike[] {
        return this._modifiers
    }


}