import {XmlComponent, Attributes} from "../../xml-components";
import {PageSize} from "./page-size";
import {PageMargin} from "./page-margin";
import {Columns} from "./columns";
import {DocumentGrid} from "./doc-grid";

export class SectionProperties extends XmlComponent {

    constructor() {
        super("w:sectPr");
        this.root.push(new Attributes({
            rsidR: "00B64E8F",
            rsidRPr: "00D842E4",
            rsidSect: "000A6AD0"
        }));
        this.root.push(new PageSize());
        this.root.push(new PageMargin());
        this.root.push(new Columns());
        this.root.push(new DocumentGrid());
    }
}