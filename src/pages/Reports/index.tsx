import { Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useCallback, useEffect, useState } from "react"
import { summary as reports, Summary } from "../../resources/reports"
import { Block, ProjectContainer } from "./styles";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box } from "@mui/system";
import { toHHMMSS } from "../../utils/time";

const start_date = new Date('2022-01-01T03:00:00.000Z');
const end_date = new Date('2022-01-31T03:00:00.000Z');

export const Reports = () => {

    const [summary, setSummary] = useState<Summary>();
    const [open, setOpen] = useState(false);

    const time = useCallback(toHHMMSS, []);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await reports({
                    start_date,
                    end_date,
                    user_id: 'uBlYYME5Hdrcn3GeKpe_6'
                })
                setSummary(data);
            } catch (error) {
                console.log(error)
            }
        })();
    }, [])

    return (
        <div>
            <h1>Reports</h1>
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell align="right">Valor rentável</TableCell>
                            <TableCell align="right">Tempo</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {summary && summary.projects.map(({ id, billableHoursAmount, name, color, currency, totalTime }) => (
                            <TableRow
                                key={id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <ProjectContainer>
                                        <Block backgroundColor={color} />
                                        <span>
                                            {name}
                                        </span>
                                    </ProjectContainer>
                                </TableCell>
                                <TableCell align="right">{`${billableHoursAmount} ${currency}`}</TableCell>
                                <TableCell align="right">{totalTime}</TableCell>
                            </TableRow>
                        ))}
                        {summary && (
                            <>
                                {summary.nonBillableHours.timeEntries.length > 0 && (
                                    <>
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell>
                                                <IconButton
                                                    aria-label="expand row"
                                                    size="small"
                                                    onClick={() => setOpen(!open)}
                                                >
                                                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                                </IconButton>
                                            </TableCell>
                                            <TableCell component="th" scope="row">Horas não rentáveis</TableCell>
                                            <TableCell align="right">{summary?.nonBillableHours.totalTime}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                                <Collapse in={open} timeout="auto" unmountOnExit>
                                                    <Box sx={{ margin: 1 }}>
                                                        <Typography variant="h6" gutterBottom component="div">
                                                            Apontamentos
                                                        </Typography>
                                                        <Table size="small" aria-label="purchases">
                                                            <TableHead>
                                                                <TableRow>
                                                                    <TableCell>Description</TableCell>
                                                                    <TableCell>Time</TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {summary.nonBillableHours.timeEntries.map(({ id, description, start, stop }) => (
                                                                    <TableRow key={id}>
                                                                        <TableCell>
                                                                            {description}
                                                                        </TableCell>
                                                                        <TableCell align="right">{time({ start, stop })}</TableCell>
                                                                    </TableRow>
                                                                ))}
                                                            </TableBody>
                                                        </Table>
                                                    </Box>
                                                </Collapse>
                                            </TableCell>
                                        </TableRow>
                                    </>
                                )}
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell></TableCell>
                                    <TableCell align="right">{summary.totalAmountByCurrency.map(({ amount, currency }) => (
                                        <div key={amount}>
                                            <span>{`${amount} ${currency}`}</span><br />
                                        </div>
                                    ))}</TableCell>
                                    <TableCell align="right">{summary.totalTime}</TableCell>
                                </TableRow>
                            </>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}