import "./style.css";
import { createWidget } from "@cedro/ui";
import { Layout } from "../Layout";
import { WContainer, WSpacer } from "@cedro/ui/container.ui";
import { WLabel } from "@cedro/ui/label.ui";

import { WIconButton } from "@cedro/ui/IconButton.ui";
import { WIconButtonMenu, WIconButtonMenuItem } from "@cedro/ui/iconButtonMenu.ui";
import { WToolbar } from "@cedro/ui/toolbar.ui";

export default (() => {
    return createWidget(
        <Layout>
            <WContainer orientation="vertical" padding={10}>
                <WLabel text="Vertical & Horizontal Toolbars" centerY fixedSize={40} variant="h3" />
                <WContainer orientation="horizontal">
                    <WContainer orientation="vertical" padding={4} fixedSize={52}>
                        <WToolbar id="tool1" orientation="vertical" variant="outlined">
                            <WIconButton icon="home" height={45} />
                            <WIconButtonMenu icon="list" height={45}>
                                <WIconButtonMenuItem id="option1" label="Option 1" icon="home" />
                                <WIconButtonMenuItem id="option2" label="Option 2" icon="list" />
                            </WIconButtonMenu>
                            <WIconButton icon="star" height={45} />
                            <WIconButton icon="key" height={45} />
                            <WIconButton icon="token" height={45} />
                        </WToolbar>
                    </WContainer>
                    <WContainer orientation="vertical" padding={4}>
                        <WToolbar orientation="horizontal" variant="outlined" fixedSize={50}>
                            <WIconButton icon="home" width={40} />
                            <WIconButton icon="save" width={40} />
                            <WIconButton icon="list" text="List" width={80} />
                            <WIconButton icon="delete" text="Trash" width={100} />
                            <WIconButton icon="draw" text="Draw" width={100} />
                            <WIconButton icon="refresh" text="Refresh" width={105} />
                            <WIconButtonMenu icon="list" text="Menu" width={105}>
                                <WIconButtonMenuItem id="option1" label="Option 1" icon="home" />
                                <WIconButtonMenuItem id="option2" label="Option 2" icon="star" />
                                <WIconButtonMenuItem id="option3" label="Option Three" icon="key" />
                                <WIconButtonMenuItem id="option4" label="Option 4" icon="token" />
                                <WIconButtonMenuItem
                                    id="option5"
                                    label="Option Five"
                                    icon="error"
                                />
                            </WIconButtonMenu>
                        </WToolbar>
                        <WSpacer fixedSize={3} />
                        <WContainer orientation="vertical" variant="contained"></WContainer>
                    </WContainer>
                </WContainer>
            </WContainer>
        </Layout>
    );
})();
