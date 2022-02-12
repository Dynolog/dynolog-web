import { DateTimePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import { TimeEntry } from "../../../resources/time-entry";
import { ProjectAutoComplete } from "../../project/AutoComplete";

export type TimeEntryFromProps = {
    timeEntry?: Partial<TimeEntry>;
    onSubmit?: (timeEntry: Omit<TimeEntry, 'id'> & { id?: string }) => void;
}

export const TimeEntryForm = ({ timeEntry }: TimeEntryFromProps) => {

    const [start, setStart] = useState<Date | null>(timeEntry?.start ? new Date(timeEntry.start) : null);
    const [stop, setStop] = useState<Date | null>(timeEntry?.stop ? new Date(timeEntry.stop) : null);
    const [description, setDescription] = useState(timeEntry?.description || '');
    const [project, setProject] = useState<{
        id: string;
        name: string;
        color: string;
    } | undefined | null>(timeEntry?.project ?? null)

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} />
            <Grid item xs={7}>
                <TextField
                    size="small"
                    value={description}
                    onChange={({ target: { value } }) => setDescription(value)}
                    fullWidth
                    label="Descrição"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={5}>
                <ProjectAutoComplete
                    value={{ ...project }}
                    onChange={(value) => setProject(value)}
                />
            </Grid>
            <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        renderInput={(props: any) => <TextField fullWidth size="small" {...props} />}
                        label="Começo"
                        value={start}
                        inputFormat="dd/MM/yyyy HH:mm"
                        disableOpenPicker
                        onChange={(newValue) => {
                            setStart(newValue);
                        }}
                    />
                </LocalizationProvider>
            </Grid>
            <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker                        
                        renderInput={(props: any) => <TextField fullWidth size="small" {...props} />}
                        label="Fim"
                        value={stop}
                        inputFormat="dd/MM/yyyy HH:mm"
                        disableOpenPicker
                        minDate={start}
                        onChange={(newValue) => {
                            setStop(newValue);
                        }}
                    />
                </LocalizationProvider>
            </Grid>
        </Grid>
    )
}