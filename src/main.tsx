import {Application, WidgetAlignTypes} from "cedro/src/"
import { IMetaDataElement } from "cedro/src/core/seo";
import { IWidget } from "cedro/src/interfaces/widget.interface.ts";

class ExampleApp extends Application{

    constructor(){

        super("Example App");

        this.getRoot().setAlign(WidgetAlignTypes.VERTICAL);

        import("./Layout/Default.tsx").then((module) => {            
            this.attachWidget(module.default as IWidget, this.getRoot());
        });

    }

    init(): void {
        super.init();

        this.root.render();

        this.seo.meta.add({
            name: "name",
            content: "name here",
        } as IMetaDataElement);

        this.seo.meta.add({
            name: "description",
            content: "description here",
        } as IMetaDataElement);

        this.seo.setTitle("cedro2 - Vite Application Template");

    }
}

export const exampleApp = new ExampleApp();

exampleApp.init();