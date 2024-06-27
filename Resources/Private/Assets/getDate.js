function formatDate(date) {
    return date.toISOString().split("T")[0];
}

export default function getDate(options, formatDateFunction = formatDate) {
    if (!options) {
        return null;
    }
    const { unit, amount } = options;
    if (typeof amount != "number") {
        return null;
    }

    const date = new Date();
    if (amount == 0) {
        return formatDateFunction(date);
    }

    if (unit == "year") {
        return formatDateFunction(new Date(date.setFullYear(date.getFullYear() + amount)));
    }

    if (unit == "month") {
        return formatDateFunction(new Date(date.setMonth(date.getMonth() + amount)));
    }

    const days = unit == "week" ? amount * 7 : amount;
    return formatDateFunction(new Date(date.setDate(date.getDate() + days)));
}
