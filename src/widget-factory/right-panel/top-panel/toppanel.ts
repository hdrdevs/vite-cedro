import { WidgetAlignTypes, WidgetTypes } from "cedro/src";
import { Toolbar, Widget } from "cedro/src/ui";
import { exampleData } from "./example-data";
import { ExampleGrid } from "./grid";
import { mainToolbar } from "./toolbar";

export class TopPanel extends Widget {
    toolbar: Toolbar;
    grid: ExampleGrid;

    constructor() {
        super("topPanel");
        this.setType(WidgetTypes.FILL);
        this.setAlign(WidgetAlignTypes.VERTICAL);

        this.toolbar = new mainToolbar();

        this.grid = new ExampleGrid();
        this.grid.setData(exampleData.slice(0, 20));

        this.addChild(this.toolbar);
        this.addChild(this.grid);
    }
}
