import * as ts from "typescript";
import { statementFromExpression } from "./statements";

export function or(expr1: ts.Expression, expr2: ts.Expression): ts.BinaryExpression {
    return ts.factory.createBinaryExpression(expr1, ts.SyntaxKind.BarBarToken, expr2);
}

export function expOrNull(expr: ts.Expression): ts.BinaryExpression {
    return ts.factory.createBinaryExpression(expr, ts.SyntaxKind.BarBarToken, ts.factory.createNull())
}

export function assignToClassProperty(name: string | ts.Identifier, expresion: ts.Expression): ts.AssignmentExpression<ts.AssignmentOperatorToken> {
    const property = getPropertyOfClassExpression(name);
    return ts.factory.createAssignment(property, expresion);
}

export function getPropertyOfClassExpression(name: string | ts.Identifier): ts.Expression {
    return ts.factory.createPropertyAccessExpression(
        ts.factory.createIdentifier("this"),
        typeof name === "string"
            ? ts.factory.createIdentifier(name)
            : name
    );
}


export function expressionToStatement(expr: ts.Expression): ts.Statement {
    return statementFromExpression(expr);
}