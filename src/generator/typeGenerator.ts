import * as ts from "typescript";
import { ModifierLikeHandler } from "./modifiers/modiferlikeHandler";
import { ModifierHandler } from "./modifiers/modiferHandler";
import { TypeParameterDelarationGenerator } from "./TypeParameterDelarationGenerator";

export type TypeType = {

}

export class TypeGenerator {
    private _typeName: string;
    private _modifiers: ModifierLikeHandler = new ModifierLikeHandler();
    private _literalType: ts.TypeNode;
    private _typeParameters: TypeParameterDelarationGenerator[] = [];

    get Modifiers(): ModifierLikeHandler { return this._modifiers; }
    constructor(typeName: string) {
        this._typeName = typeName;
    }

    setLiteralType(typeNode: ts.TypeNode) {
        this._literalType = typeNode;
    }

    addTypeParameter(name: string) {
        const tp = new TypeParameterDelarationGenerator(name);
        this._typeParameters.push(tp);
    }

    generate(): ts.TypeAliasDeclaration {
        // that type which is going to be used as type of this type `type yourtype: reference type;`



        const result = ts.factory.createTypeAliasDeclaration(
            this._modifiers.toArray(), // modifiers
            ts.factory.createIdentifier(this._typeName),   // name
            this._typeParameters.map(t => t.generate()),  // type parameters
            this._literalType, // aliased type
        );

        return result;
    }
}