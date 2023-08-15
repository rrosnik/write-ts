import * as ts from "typescript";
import { statementFromExpression } from "./statements";
import { getPropertyOfClassExpression } from "./expressions";

export class BodyGenerator {

    private _statements: ts.Statement[] = []


    addStatement(statement: ts.Statement): this {
        this._statements.push(statement);
        return this;
    }
    addExpression(expression: ts.Expression): this {
        this._statements.push(statementFromExpression(expression));
        return this;
    }

    returnsProperty(name: string | ts.Identifier): this {
        this._statements.push(ts.factory.createReturnStatement(getPropertyOfClassExpression(name)))
        return this;
    }

    generate(): ts.Block {
        return ts.factory.createBlock(this._statements, true);
    }
}