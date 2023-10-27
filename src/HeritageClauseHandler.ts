import * as ts from "typescript";

/**
 * it adds a `extends` or `implements` and subsequent class and interface for a class
 */
export class HeritageClauseGenerator {

    private _exports: ts.Identifier
    private _exports_generics: ts.TypeNode[]
    private _implements: Map<string, { id: ts.Identifier, generics: Array<ts.TypeNode> }> = new Map()

    /**
     * extends identifier sith all the generic types
     * @example
     * class MainClassName extends identifier
     * // or
     * class MainClassName extends identifier<generic1,generic2,...>
     * @param {ts.Identifier} identifier 
     * @param {ts.TypeNode[]} generics 
     * @returns 
     */
    extends(identifier: ts.Identifier, generics?: ts.TypeNode[]): this {
        this._exports = identifier
        if (generics && generics.length) this._exports_generics = generics
        return this
    }

    clearExtends(): this { this._exports = null; this._exports_generics = null; return this }
    clearImplements(): this { this._implements = new Map(); return this }

    /**
     * implements identifier sith all the generic types
     * @example
     * class MainClassName implements identifier
     * // or
     * class MainClassName implements identifier<generic1,generic2,...>
     * @param {ts.Identifier} identifier 
     * @param {ts.TypeNode[]} generics 
     * @returns 
     */
    implements(identifier: ts.Identifier, generics?: ts.TypeNode[]): this {
        if (!this._implements.has(identifier.text)) {
            const g = this._implements.set(identifier.text, {
                id: identifier,
                generics: generics || []
            })
        } else this._implements.get(identifier.text).generics = generics
        return this
    }

    generate(): ts.HeritageClause[] {
        const result: ts.HeritageClause[] = []
        if (this._exports) {
            const expr = ts.factory.createExpressionWithTypeArguments(this._exports, this._exports_generics)
            result.push(ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [expr]))
        }
        if (this._implements.size) {
            const exprs: ts.ExpressionWithTypeArguments[] = []
            this._implements.forEach(({ id, generics }, key) => {
                exprs.push(ts.factory.createExpressionWithTypeArguments(id, generics))
            })
            result.push(ts.factory.createHeritageClause(ts.SyntaxKind.ImplementsKeyword, exprs))
        }
        return result.length ? result : undefined
    }
}