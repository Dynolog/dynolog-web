import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { TimeEntryForm } from '../../components/time-entry/Form';
import { useDialog } from '../../hooks/use-dialog';
import TimeEntries, { TimeEntry } from '../../resources/time-entry';
import { toHHMMSS } from '../../utils/time';
import { Action, Card, Container, Description, Project, Time } from './styles';

const start_date = new Date('2022-01-01T03:00:00.000Z');
const end_date = new Date('2022-01-31T03:00:00.000Z');

export const Dashboard = () => {
  const [appointments, setAppointments] = useState<TimeEntry[]>([]);

  const { showDialog } = useDialog();

  const time = useCallback(toHHMMSS, []);

  // const now = new Date();
  // const start_date = startOfMonth(now);
  // const end_date = endOfMonth(now);



  useEffect(() => {
    (async () => {
      try {
        const { data: { content } } = await TimeEntries.index({
          start_date,
          end_date,
          user_id: 'uBlYYME5Hdrcn3GeKpe_6',
        })
        setAppointments(content);
      } catch (error) {
        console.log(error)
      }
    })();
  }, [])

  return (
    <Container>
      <h1>Lançamentos!</h1>
      {appointments.map((timeEntry) => (
        <Card key={timeEntry.id}>
          <Description>
            {timeEntry.project && (
              <Project background={timeEntry.project.color} color="#fff">
                {timeEntry.project.name}
              </Project>
            )}
            {timeEntry.description}
          </Description>
          <div className="timeContainer">
            <Time>{time({ start: timeEntry.start, stop: timeEntry.stop })}</Time>
            <Action>
              <Button onClick={() => showDialog({
                title: 'Editar apontamento',
                content: <TimeEntryForm timeEntry={timeEntry} />
              })}>
                <EditIcon />
              </Button>
              <Button>
                <DeleteIcon />
              </Button>
            </Action>
          </div>
        </Card>
      ))}
    </Container>
  );
}