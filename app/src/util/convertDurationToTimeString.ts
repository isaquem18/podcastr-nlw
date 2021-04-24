export default function convertDurationToTimeString(duration: number): string {
    const hours = Math.floor(duration / 3600) ;
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration - (hours * 60 * 60) - (minutes * 60);

    const timestring = [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '0'))
        .join(':');

    return timestring;
};
