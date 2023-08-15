import * as ts from "typescript";

export class ModifierLikeHandler {
    private _modifiers: ts.ModifierLike[] = [];

    private addModifier(modifier: ts.Modifier) {
        if (this._modifiers.find(m => m.kind === modifier.kind)) return;
        this._modifiers.push(modifier);
    }

    export(): this {
        this.addModifier(ts.factory.createModifier(ts.SyntaxKind.ExportKeyword));
        return this;
    }

    private(): this {
        this.addModifier(ts.factory.createModifier(ts.SyntaxKind.PrivateKeyword));
        return this;
    }

    readonly(): this {
        this.addModifier(ts.factory.createModifier(ts.SyntaxKind.ReadonlyKeyword));
        return this;
    }

    toArray(): ts.ModifierLike[] {
        return this._modifiers
    }


}


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