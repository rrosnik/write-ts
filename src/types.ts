import * as ts from "typescript";
import { ModifierLikeHandler, ModifierHandler } from "./modifiers";

export class TypeParameterDelarationGenerator {
    private _name: string;
    private _modifiers: ModifierHandler = new ModifierHandler();
    private _constraint: ts.TypeNode;
    private _defaultType: ts.TypeNode;

    constructor(name: string) {
        this._name = name;
    }

    setConstraint(constraint: ts.TypeNode): TypeParameterDelarationGenerator {
        this._constraint = constraint;
        return this;
    }
    setDefaultType(defaultType: ts.TypeNode): TypeParameterDelarationGenerator {
        this._defaultType = defaultType;
        return this;
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

export class TypeGenerator {
    private _name: string;
    private _identifier: ts.Identifier;
    private _reference: ts.TypeReferenceNode;
    private _modifiers: ModifierLikeHandler = new ModifierLikeHandler();
    private _type: ts.TypeNode;
    private _typeParameters: TypeParameterDelarationGenerator[] = [];

    get Modifiers(): ModifierLikeHandler { return this._modifiers; }
    get Identifier(): ts.Identifier { return this._identifier; }
    get Refrence(): ts.TypeNode {
        if (this._reference) return this._reference;
        return (this._reference = ts.factory.createTypeReferenceNode(this._identifier));
    }
    constructor(name: string | ts.Identifier) {
        if (typeof name === "string") {
            this._name = name;
            this._identifier = ts.factory.createIdentifier(name);
        } else {
            this._name = name.text;
            this._identifier = name;
        }
    }

    setType(typeNode: ts.TypeNode) {
        this._type = typeNode;
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
            this._type // aliased type
        );
        return result;
    }

    toArrayTypeNode(): ts.ArrayTypeNode {
        return ts.factory.createArrayTypeNode(this.Refrence)
    }
}




export const stringType = ts.factory.createTypeReferenceNode("string")
export const numberType = ts.factory.createTypeReferenceNode("string")