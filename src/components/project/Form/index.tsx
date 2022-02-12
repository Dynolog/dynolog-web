import { ClickAwayListener, Grid, TextField } from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";
import { BlockPicker } from 'react-color';
import Projects, { Project } from "../../../resources/project";
import { Block, ColorContainer, Tooltip } from "./styles";
import NumberFormat from 'react-number-format';

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

export type ProjectFormRef = {
    forceSubmit: () => void;
}

export type ProjectFormProps = {
    project?: Partial<Project>;
    onSubmit?: (project: Project) => void;
}

export const ProjectForm = forwardRef<ProjectFormRef, ProjectFormProps>((
    { project, onSubmit },
    ref
) => {

    const [name, setName] = useState(project?.name || '');
    const [color, setColor] = useState('#7B70EA');
    const [hourlyRate, setHourlyRate] = useState(project?.hourlyRate || 0);

    const [isOpenPicker, setOpenPicker] = useState(false);

    const submit = async () => {
        if (onSubmit) {
            try {
                const { data } = await Projects.create({
                    color,
                    hourlyRate,
                    currency: 'BRL',
                    name,
                    userId: 'uBlYYME5Hdrcn3GeKpe_6'
                })
                onSubmit(data);
            } catch (error) {
                console.error(error);
            }
        }
    };

    useImperativeHandle(ref, () => ({
        forceSubmit: () => submit()
    }))

    return (
        <Grid style={{ marginTop: 2 }} container spacing={3}>
            <Grid item md={9}>
                <TextField
                    onChange={({ target: { value } }) => setName(value)}
                    size="small"
                    value={project?.name}
                    fullWidth
                    label="Name"
                    variant="outlined"
                />
            </Grid>
            <Grid item md={3}>
                <ClickAwayListener onClickAway={() => setOpenPicker(false)}>
                    <ColorContainer>
                        <Tooltip
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            open={isOpenPicker}
                            title={(
                                <BlockPicker
                                    color={color}
                                    onChange={({ hex }) => {
                                        setColor(hex);
                                    }}
                                />
                            )}>
                            <Block
                                onClick={() => setOpenPicker(!isOpenPicker)}
                                backgroundColor={color}
                            />
                        </Tooltip>
                    </ColorContainer>
                </ClickAwayListener>
            </Grid>
            <Grid item md={12}>
                <TextField
                    label="Valor da hora"
                    value={hourlyRate}
                    onChange={({ target: { value } }) => setHourlyRate(Number(value))}
                    name="hourlyRate"
                    size="small"
                    fullWidth
                    InputProps={{
                        inputComponent: forwardRef<NumberFormat<any>, CustomProps>(
                            function NumberFormatCustom(props, ref) {
                                const { onChange, ...other } = props;
                                return (
                                    <NumberFormat
                                        {...other}
                                        getInputRef={ref}
                                        onValueChange={(values) => {
                                            onChange({
                                                target: {
                                                    name: props.name,
                                                    value: values.value,
                                                },
                                            });
                                        }}
                                        thousandSeparator
                                        isNumericString
                                    />
                                );
                            },
                        ) as any,
                    }}
                    variant="outlined"
                />
            </Grid>
        </Grid>
    )
})