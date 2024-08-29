import "./style.css";
import { createApplication } from "@cedro/core/application.builder";
import { Application, Routes, Route, Widgets } from "@cedro/core/application.core";
import { WContainer, WSpacer } from "@cedro/ui/container.ui";
import { WImage } from "@cedro/ui/image.ui";
import { WIconButtonMenu, WIconButtonMenuItem } from "@cedro/ui/iconButtonMenu.ui";
import { ButtonStack, WButtonStack } from "@cedro/ui/buttonstack.ui";
import { WIconButton } from "@cedro/ui/IconButton.ui";
import { config } from "./config";

const ThemeMenu = () => {
    const handleThemeChanged = (args: any) => {
        const pattern = "btn-theme-";
        const theme = args.id.slice(pattern.length);
        app?.theme.setTheme(theme);
    };

    return (
        <WIconButtonMenu
            id="btn-theme"
            icon="palette"
            fixedSize={50}
            onOptionClicked={handleThemeChanged}
        >
            <WIconButtonMenuItem id="btn-theme-light" icon="light_mode" label="Light" />
            <WIconButtonMenuItem id="btn-theme-dark" icon="dark_mode" label="Dark" />
            <WIconButtonMenuItem id="btn-theme-cedro" icon="light_mode" label="Cedro" />
            <WIconButtonMenuItem id="btn-theme-cedro-dark" icon="dark_mode" label="Cedro Dark" />
        </WIconButtonMenu>
    );
};

window.app = (() => {
    const onRenderHandler = () => {
        if (!app) return;

        const stack = w.get("topmenu-stack") as ButtonStack;

        stack?.setFixedSize(getStackWidth());
    };

    const getStackWidth = (): number => {
        if (!window.app) return config.STACK_MAX_WIDTH;

        if (window.app?.screen.getWidth() < config.SCREEN_TRIGGER_WIDTH) {
            return config.STACK_MIN_WIDTH;
        }

        return config.STACK_MAX_WIDTH;
    };

    const onLoadHandler = () => {
        const stack = w.get("topmenu-stack") as ButtonStack;
        const router = app?.router;

        if (!router) {
            return;
        }

        const route = router.getCurrentLocation().url;

        if (route.indexOf("/widget-gallery") > -1) {
            stack.setActive("btn-widget-gallery");
        } else if (router.getCurrentLocation().url.indexOf("/counter") > -1) {
            stack.setActive("btn-home");
        } else {
            //Default route.
            stack.setActive("btn-home");
            app?.goTo("/counter");
        }

        onRenderHandler();
    };

    return createApplication(
        <Application
            title="Ceddro Application Demo | Cedro"
            padding={0}
            orientation="vertical"
            theme="dark"
            onResize={onRenderHandler}
            onLoad={onLoadHandler}
        >
            <Widgets>
                <WContainer orientation="vertical">
                    <WContainer
                        orientation="horizontal"
                        fixedSize={50}
                        padding={4}
                        classNames="headerBar"
                    >
                        <WImage id="top-logo" src="/cedro-logo.png" fixedSize={120} />
                        <WSpacer />
                        <WButtonStack
                            id="topmenu-stack"
                            orientation="horizontal"
                            fixedSize={getStackWidth()}
                            centerX
                        >
                            <WIconButton
                                id="btn-home"
                                icon="home"
                                text="Home"
                                onClick={() => {
                                    app?.goTo("/counter");
                                }}
                            />
                            <WIconButton
                                id="btn-widget-gallery"
                                icon="draw"
                                text="Widget Gallery"
                                onClick={() => {
                                    app?.goTo("/widget-gallery");
                                }}
                            />
                        </WButtonStack>
                        <WSpacer />
                        <ThemeMenu />
                    </WContainer>
                    <WContainer id="main-container" orientation="vertical"></WContainer>
                </WContainer>
            </Widgets>
            <Routes hostId="main-container">
                <Route src="/counter/" />
                <Route src="/widget-gallery/" />
                <Route src="/widget-gallery/buttons/" />
                <Route src="/widget-gallery/icons/" />
                <Route src="/widget-gallery/images/" />
                <Route src="/widget-gallery/labels/" />
                <Route src="/widget-gallery/textboxes/" />
                <Route src="/widget-gallery/progressbar/" />
                <Route src="/widget-gallery/tabs/" />
                <Route src="/widget-gallery/containers/" />
                <Route src="/widget-gallery/valuebars/" />
                <Route src="/widget-gallery/dialogs/" />
                <Route src="/widget-gallery/toolbars/" />
                <Route src="/widget-gallery/datagrids/" />
            </Routes>
        </Application>
    );
})();
