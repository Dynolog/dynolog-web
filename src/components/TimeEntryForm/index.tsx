import { useState } from "react";
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import { FaTimes } from 'react-icons/fa';
import { FiSave } from 'react-icons/fi';
import { TimeEntry } from "../../resources/time-entry";
import { Input } from "../Input";
import { Calendars, Container, SaveButton } from "./styles";


interface TimeEntryFormProps {
    timeEntry: TimeEntry
    onChange?: (timeEntry: TimeEntry) => void
    onClose?: () => void
}

export const TimeEntryForm = ({ timeEntry, onChange, onClose }: TimeEntryFormProps) => {

    const [description, setDescription] = useState(timeEntry.description);
    const [start, setStart] = useState(new Date(timeEntry.start));
    const [stop, setStop] = useState(new Date(timeEntry.stop));

    return (
        <Container>
            <Input value={description} onChange={({ target: { value } }) => setDescription(value)} />
            <Calendars>
                <DateTimePicker
                    onChange={setStart}
                    value={start}
                />
                <DateTimePicker
                    onChange={setStop}
                    value={stop}
                />
            </Calendars>
            <div className="buttons">
                <SaveButton onClick={() => onChange && onChange({
                    ...timeEntry,
                    description,
                    start: start.toISOString(),
                    stop: stop.toISOString()
                })}>
                    <FiSave />
                </SaveButton>
                <button onClick={() => onClose && onClose()}>
                    <FaTimes />
                </button>
            </div>
        </ Container>
    )
}