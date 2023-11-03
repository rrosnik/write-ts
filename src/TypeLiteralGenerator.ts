import ts from 'typescript'
import { Writer } from './writer'

/** this class is to create literal type
 * @example
 * type hamid = {
 *      someName: someType;
 *      someName: someType;
 * }
 */
export class TypeLiteralGenerator {

    private _property_signatures: Array<ts.PropertySignature> = []


    /**
     * adds a new property to the literal type
     * @param {string} name 
     * @param {ts.TypeNode} type 
     * @returns {this}
     */
    addProperty(name: string, type: ts.TypeNode): this {
        if (!name) throw Error("TypeLiteralGenerator.addProperty | the name should be defined")
        if (!type) throw Error("TypeLiteralGenerator.addProperty | the type should be defined")
        this._property_signatures.push(ts.factory.createPropertySignature(undefined, name, undefined, type))
        return this
    }

    generate(): ts.TypeLiteralNode {
        return ts.factory.createTypeLiteralNode(this._property_signatures)
    }

    toString(): string {
        return new Writer(this.generate()).print()
    }
}