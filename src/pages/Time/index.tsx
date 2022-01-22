import { useCallback, useEffect, useState } from 'react';
import { TimeEntryCard } from '../../components/TimeEntryCard';
import { TimeEntryDetails } from '../../components/TimeEntryDetails';
import Reports, { Summary } from '../../resources/reports';
import TimeEntries, { TimeEntry } from '../../resources/time-entry';
import { Container } from './styles';

export const Time = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);
  const [summary, setSummary] = useState<Summary>();
  const search = useCallback(async () => {
    try {
      const { data: { content } } = await TimeEntries.index({ user_id: 1 })
      setTimeEntries(content);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getSummary = async () => {
    try {
      const { data: summary } = await Reports.summary({
        user_id: 1,
        start_date: new Date("2022-01-01T00:00:00"),
        end_date: new Date("2022-01-31T23:59:59")
      })
      setSummary(summary);
    } catch (error) {
      console.error(error);
    }
  }

  const onChange = useCallback((timeEntry: TimeEntry) => {
    setTimeEntries(old => old.map(time => time.id === timeEntry.id ? timeEntry : time));
  }, []);

  useEffect(() => {
    search();
    getSummary();
  }, [search]);

  return (
    <Container>
      <div>
        <h1>Time entries</h1>
        <p>Total hours: {summary?.totalTime}</p>
        <p>Amount: {summary?.billableHoursAmount}</p>
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