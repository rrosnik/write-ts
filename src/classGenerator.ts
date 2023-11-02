import * as ts from "typescript"
import { ModifierLikeHandler } from "./modifiers"
import { TypeParameterDelarationGenerator } from "./types"

import { ConstructorGenerator } from "./constructorGenerator"
import { PropertyGenerator } from "./properties"
import { GetterGenerator } from "./functions"
import { HeritageClauseGenerator } from './HeritageClauseHandler'
import { createIdentifier } from './helper'


export class ClassGenerator {
    private _name: string
    private _identifier: ts.Identifier

    private _modifiers: ModifierLikeHandler = new ModifierLikeHandler()
    private _typeParameters: TypeParameterDelarationGenerator[] = []
    private _members: ts.ClassElement[] = []
    private _heritageClauses: HeritageClauseGenerator = new HeritageClauseGenerator()

    private _constructor: ConstructorGenerator
    private _properties: PropertyGenerator[] = []

    private _getters: GetterGenerator[] = []


    constructor(className: string) {
        this._name = className
        this._identifier = createIdentifier(className)
    }

    get Identifier(): ts.Identifier { return this._identifier }
    get Modifiers(): ModifierLikeHandler { return this._modifiers }

    /**
     * add `extends` and heritage class to this class
     * @param {ts.Identifier} identifier 
     * @param {ts.TypeNode[]} generics 
     * @returns 
     */
    extends(identifier: ts.Identifier, generics?: ts.TypeNode[]): this {
        this._heritageClauses.extends(identifier, generics)
        return this
    }

    /**
     * add `implements` and heritage class to this class
     * @param {ts.Identifier} identifier 
     * @param {ts.TypeNode[]} generics 
     * @returns 
     */
    implements(identifier: ts.Identifier, generics?: ts.TypeNode[]): this {
        this._heritageClauses.implements(identifier, generics)
        return this
    }

    generate(): ts.ClassDeclaration {

        // add all properties to members
        this._properties.forEach(p => this._members.push(p.generate()));
        this._getters.forEach(p => this._members.push(p.generate()));

        // add constructor to the members
        if (this._constructor) this._members.push(this._constructor.generate());

        return ts.factory.createClassDeclaration(
            this._modifiers.toArray(),
            this._name,
            this._typeParameters.map(t => t.generate()),
            this._heritageClauses.generate(),
            this._members
        )
    }


    setConstructor(): ConstructorGenerator {
        if (this._constructor) return this._constructor
        this._constructor = new ConstructorGenerator()
        return this._constructor
    }

    addProperty(name: string): PropertyGenerator {
        if (!name) throw Error("ClassGenerator.addProperty | the name should be defined")
        const result = new PropertyGenerator(name)
        this._properties.push(result)
        return result
    }

    addGetter(name: string | ts.Identifier) {
        const result = new GetterGenerator(name)
        this._getters.push(result)
        return result
    }

}