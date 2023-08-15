import * as ts from "typescript";
import { ModifierLikeHandler } from "./modifiers";
import { ParameterGenerator } from "./parameters";
import { BodyGenerator } from "./bodyGenerator";

export class ConstructorGenerator {

    private _modifiers: ModifierLikeHandler = new ModifierLikeHandler();
    private _parameters: ParameterGenerator[] = [];
    private _block: BodyGenerator;

    addParameter(name: string): ParameterGenerator {
        const result = new ParameterGenerator(name);
        this._parameters.push(result);
        return result;
    }

    generate(): ts.ConstructorDeclaration {
        return ts.factory.createConstructorDeclaration(
            this._modifiers.toArray(),
            this._parameters.map(p => p.generate()),
            this._block.generate(),
        )
    }

    setBody() {
        if (this._block) return this._block;
        this._block = new BodyGenerator();
        return this._block;
    }

}