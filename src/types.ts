import * as ts from "typescript"
import { ModifierLikeHandler, ModifierHandler } from "./modifiers"
import { createIdentifier, createTypeReferenceNode } from './helper'

export class TypeParameterDelarationGenerator {
    private _name: string
    private _modifiers: ModifierHandler = new ModifierHandler()
    private _constraint: ts.TypeNode
    private _defaultType: ts.TypeNode

    constructor(name: string) {
        this._name = name
    }

    setConstraint(constraint: ts.TypeNode): TypeParameterDelarationGenerator {
        this._constraint = constraint
        return this
    }
    setDefaultType(defaultType: ts.TypeNode): TypeParameterDelarationGenerator {
        this._defaultType = defaultType
        return this
    }

    generate(): ts.TypeParameterDeclaration {
        return ts.factory.createTypeParameterDeclaration(
            this._modifiers.toArray(),
            this._name,
            this._constraint,
            this._defaultType
        )
    }

}

/**
 * to define a type
 */
export class TypeGenerator {
    private _name: string
    private _identifier: ts.Identifier
    private _reference: ts.TypeReferenceNode
    private _modifiers: ModifierLikeHandler = new ModifierLikeHandler()
    private _type: ts.TypeNode
    private _typeParameters: TypeParameterDelarationGenerator[] = []

    /** holds modifiers or decorators */
    get Modifiers(): ModifierLikeHandler { return this._modifiers }

    /** holds identifier of type - identifier is the left side of a type definition - its name*/
    get Identifier(): ts.Identifier { return this._identifier }

    /** it is used for setting literal type to define another type - it is the right side of a type definition as an literal but referenced to another type
     * @example
     * type "identifier" = a typenode
     * type anothertype = "reference_to_identifier"
     */
    get Refrence(): ts.TypeNode {
        if (this._reference) return this._reference
        return (this._reference = createTypeReferenceNode(this._identifier))
    }

    constructor(name: string | ts.Identifier) {
        if (typeof name === "string") {
            this._name = name
            this._identifier = createIdentifier(name)
        } else {
            this._name = name.text
            this._identifier = name
        }
    }

    /**
     * set a type as a literal component of type definition. you can pass another type `reference` here
     * @example
     * type "reference" = a typenode
     * 
     * const t = new TypeGenerator("name_of_type")
     * t.setType("reference")
     * 
     * @param {ts.TypeNode} typeNode 
     * @returns {this}
     */
    setType(typeNode: ts.TypeNode): this {
        this._type = typeNode
        return this
    }

    /**
     * add a generic type to this type definition
     * @example
     * const t = new TypeGenerator('typeName')
     * t.setType('literal')
     * t.addGenericType('generic')
     * => // type typeName<generic> = literal
     * 
     * @param {string} name 
     * @returns {this}
     */
    addGenericType(name: string): this {
        const tp = new TypeParameterDelarationGenerator(name)
        this._typeParameters.push(tp)
        return this
    }

    /**
     * returns a type definition ready to be printed
     * @returns {ts.TypeAliasDeclaration}
     */
    generate(): ts.TypeAliasDeclaration {
        // that type which is going to be used as type of this type `type yourtype: reference type;`
        const result = ts.factory.createTypeAliasDeclaration(
            this._modifiers.toArray(), // modifiers
            this._identifier,
            this._typeParameters.map(t => t.generate()),  // type parameters
            this._type // aliased type
        )
        return result
    }

    /**
     * converts this type to an Array type 
     * @returns {ts.ArrayTypeNode}
     */
    toArrayTypeNode(): ts.ArrayTypeNode {
        return ts.factory.createArrayTypeNode(this.Refrence)
    }
}




export const stringType = ts.factory.createTypeReferenceNode("string")
export const numberType = ts.factory.createTypeReferenceNode("number")