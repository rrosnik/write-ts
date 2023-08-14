import * as ts from "typescript";
import { ModifierLikeHandler } from "../modifiers";
import { ParameterGenerator } from "./ParameterGenerator";

export class ConstructorGenerator {

    private _modifiers: ModifierLikeHandler = new ModifierLikeHandler();
    private _parameters: ParameterGenerator[] = [];


    addParameter(name: string): ParameterGenerator {
        const result = new ParameterGenerator(name);
        this._parameters.push(result);
        return result;
    }

    generate(): ts.ConstructorDeclaration {
        return ts.factory.createConstructorDeclaration(
            this._modifiers.toArray(),
            this._parameters.map(p => p.generate()),
            undefined
        )
    }

}