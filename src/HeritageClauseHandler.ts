import * as ts from "typescript";

export class HeritageClauseGenerator {

    _token: ts.SyntaxKind.ImplementsKeyword | ts.SyntaxKind.ExtendsKeyword;

    _identifiers: ts.Identifier[] = [];


    toBeExtended(): this { this._token = ts.SyntaxKind.ExtendsKeyword; return this; }
    toBeImplemented(): this { this._token = ts.SyntaxKind.ImplementsKeyword; return this; }

    addIdentifier(name: string): this {
        if (!this._token) throw new Error("HeritageClauseGenerator.addIdentifier | At first you should detiemine the token for HeritageClause");
        console.log("333333333333333333", name)
        const identifier = ts.factory.createIdentifier(name)
        console.log("333333334444444444", name)

        if (this._token === ts.SyntaxKind.ExtendsKeyword)
            this._identifiers = [identifier];
        else
            this._identifiers.push(identifier)
        console.log("4444444444444", name)

        return this;
    }


    generate(): ts.HeritageClause {
        if (!this._token) throw new Error("HeritageClauseHandler.generate | the token should be defined before generating the HeritageClause")
        const exprs = this._identifiers.map(identifier =>
            ts.factory.createExpressionWithTypeArguments(identifier, [])
        );
        return ts.factory.createHeritageClause(this._token, exprs);
    }

}