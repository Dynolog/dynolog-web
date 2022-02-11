import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Container, Card, Action, Description, Time } from './styles';
import { useCallback, useState } from 'react';
import TimeEntries, { TimeEntry } from '../../resources/time-entry';
import { differenceInMilliseconds, getMilliseconds, intervalToDuration, startOfMonth } from 'date-fns';
import { useEffect } from 'react';
import { endOfMonth } from 'date-fns/esm';
import { toHHMMSS } from '../../utils/time';


export const Dashboard = () => {
  const [appointments, setAppointments] = useState<TimeEntry[]>([]);


  const start_date = new Date('2022-01-01T03:00:00.000Z');
  const end_date = new Date('2022-01-31T03:00:00.000Z');

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
      {appointments.map(({ description, start, stop, project: { color, name } }) => (
        <Card>
          <Description>
            <Chip size="small" label={name} style={{ backgroundColor: color, color: '#fff' }} variant="outlined" />
            {description}
          </Description>
          <div className="timeContainer">
            <Time>{time({ start, stop })}</Time>
            <Action>
              <Button>
                <EditIcon />
              </Button>
              <Button>
                <DeleteIcon />
              </Button>
            </Action>
          </div>
        </Card>
      ))}
      <Dialog
        open={false}
        onClose={() => console.log("")}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => console.log("")}>Disagree</Button>
          <Button onClick={() => console.log("")} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}