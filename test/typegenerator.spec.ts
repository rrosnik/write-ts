import { Generator } from "../src/generator/generator";

describe("Generator", () => {
    it("test", () => {
        const g = new Generator(["adasdasd"], {});

        console.log(g.test());
    })
});