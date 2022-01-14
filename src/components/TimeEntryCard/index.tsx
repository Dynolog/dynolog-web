import { useState } from "react";
import { TimeEntry } from "../../resources/time-entry";
import { TimeEntryDetails } from "../TimeEntryDetails";
import { TimeEntryForm } from "../TimeEntryForm";
import { Container } from "./styles";

type TimeEntryCardProps = {
    timeEntry: TimeEntry;
    onChange?: (timeEntry: TimeEntry) => void
}

export const TimeEntryCard = ({ timeEntry, onChange }: TimeEntryCardProps) => {
    const [editing, setEditing] = useState(false);

    return (
        <Container
            editing={editing}
            onClick={() => !editing && setEditing(true)}
        >
            {!editing && <TimeEntryDetails
                description={timeEntry.description}
                start={timeEntry.start}
                stop={timeEntry.stop}
            />}

            {editing && <TimeEntryForm
                timeEntry={timeEntry}
                onClose={() => setEditing(false)}
                onChange={(entry) => {
                    onChange && onChange(entry);
                    setEditing(false);
                }}
            />}
        </Container>
    )
}