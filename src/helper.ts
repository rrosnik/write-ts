import ts from 'typescript';

/**
 * creates a type reference to be set as a literal of a type
 * @example
 * const reference = createTypeReferenceNode('RName',['generic'])
 * => // type ... = RName<generic>
 * @param {string | ts.EntityName} referencedTypeName as a reference name for another type
 * @param {ts.TypeNode[]} genericTypes to be set as a generic types - typeName*<genericType1,genericType2,...>
 * @returns {ts.TypeReferenceNode}
 */
export function createTypeReferenceNode(referencedTypeName: string | ts.EntityName, genericTypes?: readonly ts.TypeNode[]): ts.TypeReferenceNode {
    return ts.factory.createTypeReferenceNode(referencedTypeName, genericTypes)
}

/**
 * an identifier to name a type
 * @example
 * const id = createIdentifier('myuTypeName')
 * 
 * const t = createType(id)
 * t.setType("xxxxxxxx") // type myTypeName = xxxxxxxx
 * @param {string} name 
 * @returns 
 */
export function createIdentifier(name: string): ts.Identifier {
    return ts.factory.createIdentifier(name);
}

/**
 * create a type as an Array
 * @param {ts.TypeNode} typeNode 
 * @returns {ts.ArrayTypeNode}
 */
export function createArrayTypeNode(typeNode: ts.TypeNode): ts.ArrayTypeNode {
    return ts.factory.createArrayTypeNode(typeNode)
}

/**
 * creates a union type
 * @example
 * a | b | c | ...
 * @param typeNodes 
 * @returns 
 */
export function createUnionTypeNode(...typeNodes: ts.TypeNode[]) {
    return ts.factory.createUnionTypeNode(typeNodes)
}