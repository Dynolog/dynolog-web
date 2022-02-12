import { DateTimePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import { ProjectAutoComplete } from "../../project/AutoComplete";

export const TimeEntryForm = () => {

    const [start, setStart] = useState<Date | null>(new Date());
    const [stop, setStop] = useState<Date | null>(new Date());


    return (
        <Grid style={{ marginTop: 5 }} container spacing={3}>
            <Grid item xs={7}>
                <TextField size="small" fullWidth label="Descrição" variant="outlined" />
            </Grid>
            <Grid item xs={5}>
                <ProjectAutoComplete />
            </Grid>
            <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        renderInput={(props: any) => <TextField size="small" {...props} />}
                        label="Começo"
                        value={start}
                        onChange={(newValue) => {
                            setStart(newValue);
                        }}
                    />
                </LocalizationProvider>
            </Grid>
            <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        renderInput={(props: any) => <TextField size="small" {...props} />}
                        label="Fim"
                        value={stop}
                        onChange={(newValue) => {
                            setStop(newValue);
                        }}
                    />
                </LocalizationProvider>
            </Grid>
        </Grid>
    )
}