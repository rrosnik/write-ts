import * as ts from "typescript";
import { ModifierLikeHandler } from "./modifiers";
import { TypeParameterDelarationGenerator } from "./types";

import { HeritageClauseGenerator } from "./HeritageClauseHandler";
import { ConstructorGenerator } from "./constructorGenerator";
import { PropertyGenerator } from "./properties";
import { GetterGenerator } from "./functions";


export class ClassGenerator {
    private _name: string;

    private _modifiers: ModifierLikeHandler = new ModifierLikeHandler();
    private _typeParameters: TypeParameterDelarationGenerator[] = [];
    private _members: ts.ClassElement[] = [];
    private _extended_heritageClause: HeritageClauseGenerator;
    private _implemented_heritageClause: HeritageClauseGenerator;

    private _constructor: ConstructorGenerator;
    private _properties: PropertyGenerator[] = [];

    private _getters: GetterGenerator[] = [];


    constructor(className: string) {
        this._name = className;
    }

    extends(baseClass: string): this {
        console.log("1111111111111", baseClass)
        if (!this._extended_heritageClause) {
            this._extended_heritageClause = new HeritageClauseGenerator();
            this._extended_heritageClause.toBeExtended();
        }
        console.log("22222222222222222222", baseClass)

        this._extended_heritageClause.addIdentifier(baseClass);
        return this;
    }

    implements(name: string): this {
        if (!this._implemented_heritageClause) {
            this._implemented_heritageClause = new HeritageClauseGenerator();
            this._implemented_heritageClause.toBeImplemented();
        }
        this._implemented_heritageClause.addIdentifier(name)
        return this;
    }

    generate(): ts.ClassDeclaration {

        const extimp = [];
        if (this._extended_heritageClause)
            extimp.push(this._extended_heritageClause.generate());
        if (this._implemented_heritageClause)
            extimp.push(this._implemented_heritageClause.generate());

        // add all properties to members
        this._properties.forEach(p => this._members.push(p.generate()));
        this._getters.forEach(p => this._members.push(p.generate()));

        // add constructor to the members
        if (this._constructor) this._members.push(this._constructor.generate());

        return ts.factory.createClassDeclaration(
            this._modifiers.toArray(),
            this._name,
            this._typeParameters.map(t => t.generate()),
            extimp.length ? extimp : undefined,
            this._members
        )
    }

    setConstructor(): ConstructorGenerator {
        if (this._constructor) return this._constructor;
        this._constructor = new ConstructorGenerator();
        return this._constructor;
    }

    addProperty(name: string): PropertyGenerator {
        const result = new PropertyGenerator(name);
        this._properties.push(result);
        return result;
    }

    addGetter(name: string | ts.Identifier) {
        const result = new GetterGenerator(name);
        this._getters.push(result);
        return result;
    }

}