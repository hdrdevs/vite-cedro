import { Application, Widget, WidgetAlignTypes } from "cedro/src/";

class MyApplication extends Application {
    constructor() {
        super("My Application");
        this.getRoot().setAlign(WidgetAlignTypes.HORIZONTAL);
    }
    init() {
        super.init();

        this.router.on("/", () => {
            import("./counter/main").then((module) => {
                this.attachWidget(module.default as Widget, this.getRoot());
                this.hideLoading();
            });
        });

        this.router.on("/widget-factory", () => {
            import("./widget-factory/main").then((module) => {
                this.attachWidget(module.default as Widget, this.getRoot());
                this.hideLoading();
            });
        });

        this.router.resolve();

        this.root.render();
        this.theme.setTheme("dark");
    }
}

export const app = new MyApplication();

app.init();
