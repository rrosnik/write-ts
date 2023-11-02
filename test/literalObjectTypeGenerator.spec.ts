import { IntersectionTypeGenerator, TypeGenerator, TypeLiteralGenerator, Writer, createTypeReferenceNode } from '../src'

describe('Literal Object Type Generator test file', () => {

    test("class Generator", () => {

        const lt = new TypeLiteralGenerator()
        const lt1 = new TypeLiteralGenerator()

        lt1.addProperty("hjamid", createTypeReferenceNode("asdasdasd"))

        lt.addProperty("reza", createTypeReferenceNode("asdasdasd"))
        lt.addProperty("hamid", createTypeReferenceNode("asdasdasd"))
        lt.addProperty("asdasd", lt1.generate())



        const t = new TypeGenerator("hamid")

        t.setType(lt.generate())

        // expect(new Writer(t.generate()).print()).toEqual("")


        const i = new IntersectionTypeGenerator()
        i.addType(lt.generate()).addType(lt1.generate())
        // expect(new Writer(i.generate()).print()).toEqual("")
    })
})
