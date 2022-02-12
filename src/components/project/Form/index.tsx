import { ClickAwayListener, Grid, TextField } from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";
import { BlockPicker } from 'react-color';
import { Project } from "../../../resources/project";
import { Block, ColorContainer, Tooltip } from "./styles";

export type ProjectFormRef = {
    forceSubmit: () => void
}

export type ProjectFormProps = {
    project?: Partial<Project>;
    onSubmit?: (project: Project) => void;
    onDecline?: () => void;
}

export const ProjectForm = forwardRef<ProjectFormRef, ProjectFormProps>((
    { project, onSubmit, onDecline },
    ref
) => {

    const [color, setColor] = useState<string>("#7B70EA");
    const [isOpenPicker, setOpenPicker] = useState(false);

    const submit = () => ({
        id: "asFeafggv_f7",
        name: project?.name ?? '',
        color: "#7B70EA",
        hourlyRate: 60,
        user: {
            id: "uBlYYME5Hdrcn3GeKpe_6",
            name: "admin"
        }
    });

    useImperativeHandle(ref, () => ({
        forceSubmit: () => onSubmit && onSubmit(submit())
    }))

    return (
        <Grid style={{ marginTop: 5 }} container spacing={3}>
            <Grid item md={9}>
                <TextField size="small" value={project?.name} fullWidth label="Name" variant="outlined" />
            </Grid>
            <Grid item md={3}>
                <ClickAwayListener onClickAway={() => setOpenPicker(false)}>
                    <ColorContainer>
                        <Tooltip disableFocusListener disableHoverListener disableTouchListener open={isOpenPicker} title={(
                            <BlockPicker color={color} onChange={({ hex }) => {
                                setColor(hex);
                            }} />
                        )}>
                            <Block onClick={() => setOpenPicker(!isOpenPicker)} backgroundColor={color} />
                        </Tooltip>
                    </ColorContainer>
                </ClickAwayListener>
            </Grid>
        </Grid >
    )
})