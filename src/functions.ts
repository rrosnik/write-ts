import * as ts from "typescript";
import { ModifierLikeHandler } from "./modifiers";
import { BodyGenerator } from "./bodyGenerator";
import { ParameterGenerator } from "./parameters";

export class GetterGenerator {
    private _name: string;
    private _modifiers: ModifierLikeHandler = new ModifierLikeHandler();
    private _parameters: ParameterGenerator[] = [];
    private _identifier: ts.Identifier;
    private _block: BodyGenerator;
    private _type: ts.TypeNode;


    constructor(name: string | ts.Identifier) {
        if (typeof name === "string") {
            this._name = name;
            this._identifier = ts.factory.createIdentifier(name);
        } else {
            this._name = name.text;
            this._identifier = name;
        }
    }

    readonly(): this {
        this._modifiers.readonly();
        return this;
    }

    private(): this {
        this._modifiers.private();
        return this;
    }

    setType(typeNode: ts.TypeNode): this { this._type = typeNode; return this; }


    generate(): ts.GetAccessorDeclaration {
        return ts.factory.createGetAccessorDeclaration(
            this._modifiers.toArray(),
            this._name,
            this._parameters.map(p => p.generate()),
            this._type,
            this._block.generate()
        );
    }

    setBody() {
        if (this._block) return this._block;
        this._block = new BodyGenerator();
        return this._block;
    }

}