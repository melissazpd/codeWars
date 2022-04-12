function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        const el = arr[i];
        const next = arr[i + 1];

        if (next - el !== 1) {
            return next;
        }
    }
    return null;
}

//git commit --amend --date="2022-03-25 13:00:00"