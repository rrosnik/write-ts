export class IfcPersonAndOrganization {
    ThePerson: IfcPerson;
    TheOrganization: IfcOrganization
    Roles?: Array<IfcActorRole>; // OPTIONAL LIST [1:?]
}