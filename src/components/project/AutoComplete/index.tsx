import { FilterOptionsState } from '@mui/material';
import Autocomplete, { AutocompleteRenderInputParams, createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { HTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { useDialog } from '../../../hooks/use-dialog';
import Projects, { Project } from '../../../resources/project';
import { ProjectForm, ProjectFormRef } from '../Form';


type Option<T> = {
    label: string;
    value?: T;
    input?: string;
}

const filter = createFilterOptions<Option<Partial<Project>>>();

export interface ProjectAutoCompleteProps {
    value?: Partial<Project> | null;
    onChange?: (project: Project | null) => void;
}

export const ProjectAutoComplete = ({ value: initial, onChange }: ProjectAutoCompleteProps) => {
    const { showDialog } = useDialog();

    const formRef = useRef<ProjectFormRef>(null);

    const [selected, setSelected] = useState<Option<Partial<Project>> | null>(initial ? {
        label: initial.name || '',
        value: initial
    } : null);

    const [options, setOptions] = useState<Option<Partial<Project>>[]>([]);

    const showForm = useCallback((name: string) => showDialog({
        title: 'Novo Projeto',
        content: <ProjectForm
            ref={formRef}
            project={{ name }}
            onSubmit={(project) => {
                onChange && onChange(project);

                const option = {
                    label: project.name,
                    value: project
                };

                setSelected(option)
                setOptions(state => [...state, option]);
            }}
        />,
        onConfirm: () => formRef.current?.forceSubmit()
    }), [onChange, showDialog])

    const onChangeOption = useCallback((event: unknown, value: string | Option<Partial<Project>> | null) => {
        if (typeof value === 'string') {
            showForm(value);
            return;
        }

        if (value && value.input) {
            showForm(value.input)
            return;
        }

        setSelected(value);
        onChange && onChange(value?.value as Project || null);
    }, [onChange, showForm]);

    const filterOptions = useCallback((options: Option<Partial<Project>>[], params: FilterOptionsState<Option<Partial<Project>>>) => {
        const filtered = filter(options, params);

        if (params.inputValue !== '') {
            filtered.push({
                input: params.inputValue,
                label: `Criar: "${params.inputValue}"`,
            });
        }

        return filtered;
    }, []);

    const optionsLabel = useCallback((option: Option<Partial<Project>>) => {
        if (typeof option === 'string') {
            return option;
        }

        if (option.input) {
            return option.input;
        }

        return option.label;
    }, []);

    const renderOption = useCallback((props: HTMLAttributes<HTMLLIElement>, option: Option<Partial<Project>>) => <li {...props}>{option.label}</li>, [])

    const renderInput = useCallback((params: AutocompleteRenderInputParams) => <TextField {...params} size="small" fullWidth label="Projeto" />, [])

    const findAllProjects = useCallback(async () => {
        try {
            const { data } = await Projects.index({ user_id: 'uBlYYME5Hdrcn3GeKpe_6' });
            setOptions(data.map(project => ({
                label: project.name,
                value: project
            })))
        } catch (error) {
            console.error(error);
        }
    }, [])

    useEffect(() => {
        findAllProjects()
    }, [findAllProjects])

    return (
        <Autocomplete
            id="select-project"
            freeSolo
            clearOnBlur
            selectOnFocus
            handleHomeEndKeys
            value={selected}
            options={options}
            onChange={onChangeOption}
            renderInput={renderInput}
            renderOption={renderOption}
            filterOptions={filterOptions}
            getOptionLabel={optionsLabel}
        />
    )
}