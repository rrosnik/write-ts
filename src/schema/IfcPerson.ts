import { IfcIdentifier, IfcLabel } from "./types";

export class IfcPerson {
    Identification?: IfcIdentifier;  // 	OPTIONAL IfcIdentifier
    FamilyName?: IfcLabel;   // 	OPTIONAL IfcLabel
    GivenName?: IfcLabel;   // 	OPTIONAL IfcLabel
    MiddleNames?: Array<IfcLabel>;   // 	OPTIONAL LIST [1:?] OF IfcLabel
    PrefixTitles?: Array<IfcLabel>;   // 	OPTIONAL LIST [1:?] OF IfcLabel
    SuffixTitles?: Array<IfcLabel>;   // 	OPTIONAL LIST [1:?] OF IfcLabel
    Roles?: Array<IfcLabel>;   // 	OPTIONAL LIST [1:?] OF IfcLabel
    Addresses?: Array<IfcLabel>;   // 	OPTIONAL LIST [1:?] OF IfcLabel
    EngagedIn: Set<IfcLabel> = new Set();   //  SET [0:?] OF IfcPersonAndOrganization FOR ThePerson
}