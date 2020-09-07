export function getColor(type: string): string {
    switch (type) {
        case 'primary':
            return '#fff'
        case 'secondary':
            return  '#F7F7F7'
        case 'transparent':
            return 'transparent'
        default:
            return '#fff'
    }
}
