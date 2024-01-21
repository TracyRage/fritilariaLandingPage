
export default function generateTimastamp (): string {

    const currentDate: Date = new Date();
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
    }

    const currentTime: string = currentDate.toLocaleString('ro-RO', options);
    return currentTime
}