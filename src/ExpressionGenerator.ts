import * as ts from "typescript";

export class ExpressionGenerator {
    public static orExpression(expr1: ts.Expression, expr2: ts.Expression) {
        return ts.factory.createBinaryExpression(expr1, ts.SyntaxKind.BarBarToken, expr2);
    }
}