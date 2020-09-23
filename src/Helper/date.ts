import parse from 'date-fns/parse'
import format from 'date-fns/format'

export function parseTime(time: string): string {
    return format(parse(time.substr(0, 8), 'HH:mm:ss', new Date()), 'h:mma')
}

export function getCurrentMonth(): string {
    return format(new Date(), 'MMMM')
}

export function getCurrentYear(): string {
    return format(new Date(), 'yyyy')
}
