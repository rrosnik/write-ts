import * as ts from "typescript";

export class IdentifierGenerator {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    generate(): ts.Identifier {
        return ts.factory.createIdentifier(this._name);
    }
}