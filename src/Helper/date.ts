import parse from 'date-fns/parse';
import format from 'date-fns/format';

export function parseTime(time: string): string {
    return format(parse(time.substr(0, 8), 'HH:mm:ss', new Date()), 'h:mma');
}

export function getCurrentMonth(): string {
    return format(new Date(), 'MMMM');
}

export function getCurrentYear(): string {
    return format(new Date(), 'yyyy');
}

export function parseDate(date: string): string {
    return format(new Date(date), 'MM/dd/yy')
}

export function getCurrentTime(): string {
    return format(new Date(), 'h:mma')
}
