export const convertedMusicTime = (_duration: string) => {
    const numDuration = Number(_duration);
    const min = Math.floor(numDuration / 60000);
    const sec = Math.floor((numDuration % 60000) / 1000);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}