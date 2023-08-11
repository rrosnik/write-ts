export class IfcOwnerHistory {
    OwningUser: IfcPersonAndOrganization;
    OwningApplication: IfcApplication;
    State?: IfcStateEnum;
    ChangeAction?: IfcChangeActionEnum;
    LastModifiedDate?: IfcTimeStamp;
    LastModifyingUser?: IfcPersonAndOrganization;
    LastModifyingApplication?: IfcApplication;
    CreationDate: IfcTimeStamp;
}