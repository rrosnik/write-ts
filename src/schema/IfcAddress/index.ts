import { IfcAddressTypeEnum } from "../enums";
import { IfcLabel, IfcText } from "../types";

export class IfcAddress {
    Purpose?: IfcAddressTypeEnum;
    Description?: IfcText;
    UserDefinedPurpose?: IfcLabel;
    OfPerson: Set<IfcPerson> = new Set();  //  SET [0:?] OF IfcPerson FOR Addresses
    OfOrganization: Set<IfcOrganization> = new Set();    //  SET [0:?] OF IfcOrganization FOR Addresses

}