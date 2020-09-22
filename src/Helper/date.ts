import { replace } from 'lodash';
import parse from 'date-fns/parse';
import format from 'date-fns/format';

export function parseTime(time: string): string {
    return format(parse(replace(time, '+00', ''), 'HH:mm:ss', new Date()), 'h:mma');
}

export function getCurrentMonth(): string {
    return format(new Date(), 'MMMM');
}

export function getCurrentYear(): string {
    return format(new Date(), 'yyyy');
}
