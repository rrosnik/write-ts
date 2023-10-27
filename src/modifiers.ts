import * as ts from "typescript";

/**
 * it helps to add some modifiers or decorator to a type
 */
export class ModifierLikeHandler {

    private _modifiers: ts.ModifierLike[] = [];

    private addModifier(modifier: ts.Modifier) {
        if (this._modifiers.find(m => m.kind === modifier.kind)) return;
        this._modifiers.push(modifier);
    }

    /**
     * adds `export` key word to a type. 
     * @example 
     * export Type a = b
     * @returns {ModifierLikeHandler}
     */
    export(): this {
        if (this._modifiers.some(m => m.kind === ts.SyntaxKind.ExportKeyword)) return
        this.addModifier(ts.factory.createModifier(ts.SyntaxKind.ExportKeyword));
        return this;
    }

    /**
     * adds `private` key word to a type. 
     * @example 
     * private Type a = b
     * @returns {ModifierLikeHandler}
     */
    private(): this {
        if (this._modifiers.some(m => m.kind === ts.SyntaxKind.PrivateKeyword)) return
        this._modifiers = this._modifiers.filter(m => m.kind !== ts.SyntaxKind.PublicKeyword)
        this.addModifier(ts.factory.createModifier(ts.SyntaxKind.PrivateKeyword));
        return this;
    }

    /**
     * adds `public` key word to a type. 
     * @example 
     * public Type a = b
     * @returns {ModifierLikeHandler}
     */
    public(): this {
        if (this._modifiers.some(m => m.kind === ts.SyntaxKind.PublicKeyword)) return
        this._modifiers = this._modifiers.filter(m => m.kind !== ts.SyntaxKind.PrivateKeyword)
        this.addModifier(ts.factory.createModifier(ts.SyntaxKind.PublicKeyword));
        return this;

    }

    /**
     * adds `readonly` key word to a type. 
     * @example 
     * readonly Type a = b
     * @returns {ModifierLikeHandler}
     */
    readonly(): this {
        if (this._modifiers.some(m => m.kind === ts.SyntaxKind.ReadonlyKeyword)) return
        this.addModifier(ts.factory.createModifier(ts.SyntaxKind.ReadonlyKeyword));
        return this;
    }

    /**
     * returns all the modifires as an array
     * @returns {ts.ModifierLike[]}
     */
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

    /**
     * adds `export` key word to a type. 
     * @example 
     * export Type a = b
     * @returns {ModifierLikeHandler}
     */
    export(): this {
        if (this._modifiers.some(m => m.kind === ts.SyntaxKind.ExportKeyword)) return
        this.addModifier(ts.factory.createModifier(ts.SyntaxKind.ExportKeyword));
        this.addModifier(ts.factory.createModifier(ts.SyntaxKind.ExportKeyword));
        return this;
    }

    /**
     * returns all the modifires as an array
     * @returns {ts.ModifierLike[]}
     */
    toArray(): ts.Modifier[] {
        return this._modifiers
    }


}