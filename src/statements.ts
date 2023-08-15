import * as ts from "typescript";


export function statementFromExpression(expr: ts.Expression): ts.Statement {
    return ts.factory.createExpressionStatement(expr);
}
   