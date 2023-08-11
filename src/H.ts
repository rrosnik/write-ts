export class Header {
    public name?: string;
    public time_stamp?: Date;
    public author?: string;
    public organization?: string;
    public preprocessor_version?: string;
    public originating_system?: string;
    public authorization?: string;
    public documentation?: string;

    public constructor(props?: Header) {

        if (props) {

            this.name = props.name;
            this.time_stamp = props.time_stamp;
            this.author = props.author;
            this.organization = props.organization;
            this.preprocessor_version = props.preprocessor_version;
            this.originating_system = props.originating_system;
            this.authorization = props.authorization;
            this.documentation = props.documentation;
        }
    }
}