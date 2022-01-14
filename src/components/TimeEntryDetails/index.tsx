import { useCallback } from 'react';

import { format, intervalToDuration, set, sub } from 'date-fns';

import { Container, TotalHours } from './styles';
import { Debug } from '../Debug';
import { diffHours } from '../../utils/time';

interface TimeEntryDetailsProps {
    description: string;
    start: string;
    stop: string;
}

export const TimeEntryDetails = ({ description, start, stop }: TimeEntryDetailsProps) => {

    return (
        <Container>
            <span>{description}</span>
            <TotalHours>{diffHours(start, stop)}</TotalHours>
        </Container>
    )
}