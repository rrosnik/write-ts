/**
 * using xsd2ts library
 * Github Link: https://github.com/spreeuwers/xsd2ts
 * version: "xsd2ts": "^0.9.17"
 */

/**
 * if there is another way to generate typescript from xsd change this method
 */

import { generateTemplateClassesFromXSD } from "xsd2ts";


generateTemplateClassesFromXSD("./xml-schema/XSDs/IFC4x1.xsd");