import * as ts from "typescript";
import { ModifierLikeHandler } from "../modifiers/modiferlikeHandler";
import { ModifierHandler } from "./modiferHandler";
import { TypeParameterDelarationGenerator } from "./TypeParameterDelarationGenerator";

export type TypeType = {

}

export class TypeGenerator {
    private _typeName: string;
    private _identifier: ts.Identifier;
    private _reference: ts.TypeReferenceNode;
    private _modifiers: ModifierLikeHandler = new ModifierLikeHandler();
    private _literalType: ts.TypeNode;
    private _typeParameters: TypeParameterDelarationGenerator[] = [];

    get Modifiers(): ModifierLikeHandler { return this._modifiers; }
    get Identifier(): ts.Identifier { return this._identifier; }
    get Refrence(): ts.TypeNode {
        if (this._reference) return this._reference;
        return (this._reference = ts.factory.createTypeReferenceNode(this._identifier));
    }
    constructor(typeName: string) {
        this._typeName = typeName;
        this._identifier = ts.factory.createIdentifier(this._typeName);
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
            this._identifier,
            this._typeParameters.map(t => t.generate()),  // type parameters
            this._literalType // aliased type
        );

        return result;
    }

    toArrayTypeNode(): ts.ArrayTypeNode {
        return ts.factory.createArrayTypeNode(this.Refrence)
    }


}