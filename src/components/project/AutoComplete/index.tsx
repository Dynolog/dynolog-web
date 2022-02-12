import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useRef, useState } from 'react';
import { useDialog } from '../../../hooks/use-dialog';
import { Project } from '../../../resources/project';
import { ProjectForm, ProjectFormRef } from '../Form';


type Option<T> = {
    label: string;
    value?: T;
    input?: string;
}

const options: Option<Project>[] = [
    {
        label: "Fleye",
        value: {
            id: "mJG3Sg_7Z-uevt5esECKS",
            name: "Fleye",
            color: "#7B70EA",
            hourlyRate: 60,
            user: {
                id: "uBlYYME5Hdrcn3GeKpe_6",
                name: "admin"
            }
        }
    }
]

const filter = createFilterOptions<Option<Project>>();

export const ProjectAutoComplete = () => {
    const { showDialog } = useDialog();
    const formRef = useRef<ProjectFormRef>(null);

    const [value, setValue] = useState<Option<Project> | null>(null);

    const form = (name: string) => (
        <ProjectForm
            ref={formRef}
            project={{ name }}
            onSubmit={(project) => setValue({
                label: project.name,
                value: project
            })}
        />
    )

    return (
        <Autocomplete
            value={value}
            onChange={(_, newValue) => {                
                if (typeof newValue === 'string') {
                    showDialog({
                        title: 'Novo Projeto',
                        content: form(newValue),
                        onConfirm: () => formRef.current?.forceSubmit()
                    })
                } else if (newValue && newValue.input) {
                    showDialog({
                        title: 'Novo Projeto',
                        content: form(newValue.input),
                        onConfirm: () => formRef.current?.forceSubmit()
                    })
                } else {
                    setValue(newValue);
                }
            }}
            filterOptions={(options, params) => {
                const filtered = filter(options, params);

                if (params.inputValue !== '') {
                    filtered.push({
                        input: params.inputValue,
                        label: `Criar novo projeto: "${params.inputValue}"`,
                    });
                }

                return filtered;
            }}
            id="select-project"
            options={options}
            getOptionLabel={(option) => {
                if (typeof option === 'string') {
                    return option;
                }

                if (option.input) {
                    return option.input;
                }

                return option.label;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            renderOption={(props, option) => <li {...props}>{option.label}</li>}
            freeSolo
            renderInput={(params) => <TextField {...params} size="small" fullWidth label="Projeto" />}
        />
    )
}