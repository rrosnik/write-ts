import { IfcIdentifier, IfcLabel, IfcText } from "./types";

export class IfcOrganization { // extends and implements BaseClassIfc, IfcActorSelect, IfcObjectReferenceSelect, IfcResourceObjectSelect, NamedObjectIfc
    private mIdentification?: IfcIdentifier;
    private mName: IfcLabel = "";
    private mDescription?: IfcText;
    private mRoles: Array<IfcActorRole> = [];   //  OPTIONAL LIST [1:?] OF IfcActorRole
    private mAddresses: Array<IfcAddress> = [];//  OPTIONAL LIST [1:?] OF IfcAddress

    IsRelatedBy: Set<IfcOrganizationRelationship> = new Set();    //  SET [0:?] OF IfcOrganizationRelationship FOR RelatedOrganizations
    Relates: Set<IfcOrganizationRelationship> = new Set();    //  SET [0:?] OF IfcOrganizationRelationship FOR RelatingOrganization
    /** SET [0:?] OF IfcPersonAndOrganization FOR TheOrganization */
    Engages: Set<IfcPersonAndOrganization> = new Set();

    constructor(Identification: IfcIdentifier, Name: IfcLabel, Description: IfcText, Roles: Array<IfcActorRole>, Addresses: Array<IfcAddress>) {
        this.mIdentification = Identification;
        this.mName = Name;
        this.mDescription = Description;
        this.mRoles = Roles;
        this.mAddresses = Addresses;
    }

    public get Identification(): IfcIdentifier | undefined { return this.mIdentification; }
    public set Identification(v: IfcIdentifier) { this.mIdentification = v; }

    public get Name(): IfcLabel { return this.mName; }
    public set Name(v: IfcLabel) { this.mName = v; }

    public get Description(): IfcText | undefined { return this.mDescription; }
    public set Description(v: IfcText) { this.mDescription = v; }

    public get Roles(): Array<IfcActorRole> { return this.mRoles; }

    public get Addresses(): Array<IfcAddress> | undefined { return this.mAddresses; }
}
