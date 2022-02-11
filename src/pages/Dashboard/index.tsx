import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Container, Card, Action, Description, Time } from './styles';

const appointments = [
  {
    description: 'Criando infra do back end',
    time: '03:12:00',
    project: {
      id: 'asdfdg',
      name: "fleye",
      color: '#7B70EA'
    }
  },
  {
    description: 'Mudando serviço de SMTP',
    time: '01:30:00',
    project: {
      id: 'asdfdg',
      name: "fleye",
      color: '#7B70EA'
    }
  },
  {
    description: 'Modelando entidades',
    time: '00:23:07',
    project: {
      id: 'asdfdg',
      name: "fleye",
      color: '#7B70EA'
    }
  },
  {
    description: 'Refatorando componente',
    time: '04:22:15',
    project: {
      id: 'asdfdg',
      name: "fleye",
      color: '#7B70EA'
    }
  }
]

export const Dashboard = () => (
  <Container>
    <h1>Lançamentos!</h1>
    {appointments.map(({ description, time, project: { color, name } }) => (
      <Card>
        <Description>
          <Chip size="small" label={name} style={{ backgroundColor: color, color: '#fff' }} variant="outlined" />
          {description}
        </Description>
        <div className="timeContainer">
          <Time>{time}</Time>
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