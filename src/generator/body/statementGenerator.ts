import * as ts from "typescript";

export class StatementGenerator {
    generate() {
        // return ts.factory.createPropertyAssignment("akbar", ts.factory.createIdentifier("adasdasdasd")) // { a: sdasd}
        ts.factory.createArrayLiteralExpression([]);

        const thisis = ts.factory.createPropertyAccessExpression(
            ts.factory.createIdentifier("this"),
            ts.factory.createIdentifier("hamid")
        )

        return ts.factory.createAssignment(
            thisis,
            ts.factory.createIdentifier("adasdasdasd")) // { a: sdasd}
    }
}