export function formatMMR(value: number): string {
    const v = Math.abs(value);

    if (v >= 1_000_000) {
        return `${round(value / 1_000_000, 2)}M`;
    } else if (v >= 100_000) {
        return `${round(value / 1_000, 1)}k`;
    } else if (v >= 1000) {
        return `${round(value / 1_000, 2)}k`;
    } else {
        return `${value}`;
    }
}

function round(value: number, precision: number) {
    const multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
