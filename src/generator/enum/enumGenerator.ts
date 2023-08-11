import * as ts from "typescript";
import { ModifierLikeHandler } from "../modifiers";


export class EnumGenerator {
    private _name: string;
    private _modifiers: ModifierLikeHandler = new ModifierLikeHandler();
    private _enumMembers: ts.EnumMember[] = [];


    get Modifiers(): ModifierLikeHandler { return this._modifiers; }

    constructor(enumName: string) {
        this._name = enumName;
    }

    addMember(name: string): EnumGenerator {
        this._enumMembers.push(ts.factory.createEnumMember(name))
        return this;
    }

    generate(): ts.EnumDeclaration {
        // that type which is going to be used as type of this type `type yourtype: reference type;`
        return ts.factory.createEnumDeclaration(
            this._modifiers.toArray(),
            this._name,
            this._enumMembers
        )
    }
}