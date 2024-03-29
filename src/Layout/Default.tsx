import "./styles/default.css";
import * as WUI from "cedro/src/ui/widget.builder.ui";
import { WidgetTypes } from "cedro/src/ui/widget.ui";
import { exampleApp } from "../main";
import { IconButton} from "cedro/src/ui/";

const icon_theme =
    exampleApp.theme.current?.name == "dark" ? "light_mode" : "dark_mode";

export default WUI.createWidget(
    <div id="main-layout" widget-type={WidgetTypes.FREE}>
            <div widget-class={"menu-container"}>
                <div widget-class={"menu-right"}>
                    <WUI.XIconButton
                        id="btn-theme"
                        variant="text"
                        color={"primary"}
                        icon={icon_theme}
                        classNames={"menu-item-theme"}
                    />
                </div>
            </div>
        <div id="layout-container" widget-class="site-content">
            &nbsp;hola cedro
        </div>
    </div>
);

w.get("btn-theme")?.subscribe({
    event: "click",
    then: () => {
        exampleApp.theme.toggleTheme();
        if (exampleApp.theme.current?.name === "dark") {
            (w.get("btn-theme") as IconButton).setIcon("light_mode");
        } else {
            (w.get("btn-theme") as IconButton).setIcon("dark_mode");
        }
    },
});
