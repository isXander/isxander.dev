const ranges = [
    { divider: 1e18, suffix: 'E' },
    { divider: 1e15, suffix: 'P' },
    { divider: 1e12, suffix: 'T' },
    { divider: 1e9, suffix: 'B' },
    { divider: 1e6, suffix: 'M' },
    { divider: 1e3, suffix: 'k' }
];

export const formatNumberMetricUnits = (n: number) => {
    for (let i = 0; i < ranges.length; i++) {
        if (n >= ranges[i].divider) {
            const decimal = n / ranges[i].divider;
            const suffix = ranges[i].suffix;
            return decimal.toFixed(2) + suffix;
        }
    }
    return n.toString();
}