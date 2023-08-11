import { Entity } from "./E";

export class IfcOwnerHistory extends Entity {
    public OwningUser: IfcPersonAndOrganization;
    public OwningApplication: IfcApplication;
    public LastModifyingUser?: IfcPersonAndOrganization;
    public LastModifyingApplication?: IfcApplication;

    public constructor(props?: IfcOwnerHistory) {
        super(props);

        this["@class"] = ".IfcOwnerHistory";


        if (props) {

            this.OwningUser = (props.OwningUser) ? new IfcPersonAndOrganization(props.OwningUser) : undefined;
            this.OwningApplication = (props.OwningApplication) ? new IfcApplication(props.OwningApplication) : undefined;
            this.LastModifyingUser = (props.LastModifyingUser) ? new IfcPersonAndOrganization(props.LastModifyingUser) : undefined;
            this.LastModifyingApplication = (props.LastModifyingApplication) ? new IfcApplication(props.LastModifyingApplication) : undefined;
        }
    }
}