import ts from 'typescript';

export class IntersectionTypeGenerator {


    private _types: Array<ts.TypeNode> = []


    addType(type: ts.TypeNode): this {

        this._types.push(type)

        return this
    }

    generate(): ts.IntersectionTypeNode {
        return ts.factory.createIntersectionTypeNode(this._types)
    }
}