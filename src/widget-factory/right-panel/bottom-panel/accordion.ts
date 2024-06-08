import { WidgetTypes } from "cedro/src";
import { Accordion } from "cedro/src/ui";
import { ColorButtonsForm } from "./buttoncollors";
import { LabelsForm } from "./labels";

export class BottomAccordion extends Accordion {
    constructor() {
        super("Botttom.Stack");
        this.setType(WidgetTypes.FILL);

        this.addItem("Labels", "list", new LabelsForm());
        this.addItem("Color Buttons", "list", new ColorButtonsForm());

        this.selectItem("LabelsForm");
    }
}
