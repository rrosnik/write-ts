import * as ts from "typescript";
import { ModifierLikeHandler } from "./generator/modifiers";
import { TypeParameterDelarationGenerator } from "./generator/type";
import { HeritageClauseGenerator } from "./HeritageClauseHandler";


export class ClassGenerator {
    private _name: string;

    private _modifiers: ModifierLikeHandler = new ModifierLikeHandler();
    private _typeParameters: TypeParameterDelarationGenerator[] = [];
    private _members: ts.ClassElement[] = [];
    private _extended_heritageClause: HeritageClauseGenerator;
    private _implemented_heritageClause: HeritageClauseGenerator;

    constructor(className: string) {
        this._name = className;
    }


    addMember(element: ts.ClassElement): this {
        this._members.push(element);
        return this;
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
        return ts.factory.createClassDeclaration(
            this._modifiers.toArray(),
            this._name,
            this._typeParameters.map(t => t.generate()),
            extimp.length ? extimp : undefined,
            this._members
        )
    }
}