import * as ts from "typescript";

export class AssignmentGenerator {
    public static assignToClassProperty(propertyName: string, expresion: ts.Expression): ts.AssignmentExpression<ts.AssignmentOperatorToken> {
        const property = ts.factory.createPropertyAccessExpression(
            ts.factory.createIdentifier("this"),
            ts.factory.createIdentifier(propertyName)
        );
        return ts.factory.createAssignment(property, expresion);
    }
}