### to define query for a type from another type

```typescript
const a = factory.createTypeQueryNode(new IdentifierGenerator("someName").generate()) 

// typeof someName       
```

### to define a type as a literal definition

```typescript
const a = factory.createTypeLiteralNode(undefined) 

//  = {your definition comes here} 
```

### to define a type using `keyof / readonly / unique`

```typescript
const a = factory.createTypeOperatorNode(SyntaxKind.KeyOfKeyword,) 

//  = keyof/readonly/unique ...
```

### to define 

```typescript
const a = factory.createTypePredicateNode(undefined, "someName",undefined) 

//  someName is ...
```

