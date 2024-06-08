import { Container, HPanel } from "cedro/src/ui";
import { header } from "./header/header";
import { LeftPanel } from "./left-panel/leftpanel";
import { RightPanel } from "./right-panel/rightpanel";

class WidgetFactory extends Container {
    hPanel: HPanel;
    leftPanel: LeftPanel;
    rightPanel: RightPanel;

    constructor() {
        super({ orientation: "vertical", padding: 6 });

        this.hPanel = new HPanel("hPanel");
        this.hPanel.setPadding(0);

        this.leftPanel = new LeftPanel();
        this.rightPanel = new RightPanel();

        this.hPanel.setLeft(this.leftPanel, 300);
        this.hPanel.setRight(this.rightPanel);

        this.addChild(header);
        this.addChild(this.hPanel);
    }
}

const widgetFactory = new WidgetFactory();

export default widgetFactory;
