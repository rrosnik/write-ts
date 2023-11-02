import * as ts from "typescript";
import { ModifierLikeHandler } from "./modifiers";
import { assignToClassProperty } from "./expressions";

export class PropertyGenerator {
    private _name: string;

    private _modifiers: ModifierLikeHandler = new ModifierLikeHandler();
    private _isOptional: boolean = false;
    private _type: ts.TypeNode;
    private _initial: ts.Expression;
    private _identifier: ts.Identifier;

    get Identifier(): ts.Identifier { return this._identifier; }
    constructor(name: string | ts.Identifier) {
        if (typeof name === "string") {
            this._name = name;
            this._identifier = ts.factory.createIdentifier(name);
        } else {
            this._name = name.text;
            this._identifier = name;
        }
    }

    optional(optional: boolean = true): this { this._isOptional = optional; return this; }
    required(required: boolean = true): this { this._isOptional = required; return this; }
    setType(typeNode: ts.TypeNode): this { this._type = typeNode; return this; }
    init(expression: ts.Expression): this { this._initial = expression; return this; }
    private(): this { this._modifiers.private(); return this; }

    generate(): ts.PropertyDeclaration {
        return ts.factory.createPropertyDeclaration(
            this._modifiers.toArray(),
            this._name,
            this._isOptional ? ts.factory.createToken(ts.SyntaxKind.QuestionToken) : undefined,
            this._type ?? undefined,
            this._initial ?? undefined
        )
    }

    toBeAssigned(expression: ts.Expression): ts.AssignmentExpression<ts.AssignmentOperatorToken> {
        return assignToClassProperty(this._name, expression);
    }
}