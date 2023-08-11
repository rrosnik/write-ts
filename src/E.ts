import { AnyURI } from "./A";
import { IDREF } from "./I";

export class Entity {
    public href?: AnyURI;
    public ref?: IDREF;

    public constructor(props?: Entity) {
        if (props) {
            this.href = props.href;
            this.ref = props.ref;
        }
    }
}