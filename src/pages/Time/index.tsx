import { useCallback, useEffect, useState } from 'react';
import { TimeEntryCard } from '../../components/TimeEntryCard';
import { TimeEntryDetails } from '../../components/TimeEntryDetails';
import TimeEntries, { TimeEntry } from '../../resources/time-entry';
import { Container } from './styles';

export const Time = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);

  const search = useCallback(async () => {
    try {
      const { data: { content } } = await TimeEntries.index()
      setTimeEntries(content);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const onChange = useCallback((timeEntry: TimeEntry) => {
    setTimeEntries(old => old.map(time => time.id === timeEntry.id ? timeEntry : time));
  }, []);

  useEffect(() => {
    search();
  }, [search]);

  return (
    <Container>
      <div>
        <h1>Time entries</h1>
      </div>
      <ul>
        {timeEntries.map(timeEntry => (
          <TimeEntryCard
            key={timeEntry.id}
            onChange={onChange}
            timeEntry={timeEntry}
          />
        ))}
      </ul>
    </Container>
  )
};