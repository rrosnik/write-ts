import * as ts from "typescript";
import { ModifierLikeHandler } from "../modifiers";
import { AssignmentGenerator } from "../body/assignmentGenerator";

export class PropertyGenerator {
    private _name: string;

    private _modifiers: ModifierLikeHandler = new ModifierLikeHandler();
    private _isOptional: boolean = false;
    private _type: ts.TypeNode;
    private _initial: ts.Expression;

    constructor(name: string) {
        this._name = name;
    }

    optional(): this { this._isOptional = true; return this; }
    required(): this { this._isOptional = false; return this; }
    setType(typeNode: ts.TypeNode): this { this._type = typeNode; return this; }
    init(expression: ts.Expression): this { this._initial = expression; return this; }


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
        return AssignmentGenerator.assignToClassProperty(this._name, expression);
    }
}