import { Header } from "./H";

export class Uos {
    public header?: Header;
    public id: ID;
    public express: AnyURI[];
    public configuration: AnyURI[];

    public constructor(props?: Uos) {


        if (props) {

            this.header = (props.header) ? new Header(props.header) : undefined;
            this.id = props.id;
            this.express = props.express;
            this.configuration = props.configuration;
        }
    }
}