import * as ts from "typescript";
import { ModifierHandler } from "../modifiers"

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