import { useCallback, useEffect, useState } from 'react';
import { Debug } from '../../components/Debug';
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

  useEffect(() => {
    search();
  }, [search]);

  return (
    <Container>
      <h1>hello</h1>
      <Debug data={timeEntries} />
    </Container>
  )
};