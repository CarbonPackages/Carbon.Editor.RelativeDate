export default function getDate(options, formatDateFunction) {
    if (!options) {
        return null;
    }

    const { unit, amount } = options;
    if (typeof amount != "number") {
        return null;
    }

    if (!formatDateFunction) {
        if (unit === "hour" || unit === "minute") {
            formatDateFunction = (date) => date.toISOString();
        } else {
            formatDateFunction = (date) => date.toISOString().split("T")[0];
        }
    }

    const date = new Date();
    if (amount == 0) {
        return formatDateFunction(date);
    }

    switch (unit) {
        case "year":
            return formatDateFunction(new Date(date.setFullYear(date.getFullYear() + amount)));
        case "month":
            return formatDateFunction(new Date(date.setMonth(date.getMonth() + amount)));
        case "hour":
            return formatDateFunction(new Date(date.setHours(date.getHours() + amount)));
        case "minute":
            return formatDateFunction(new Date(date.setMinutes(date.getMinutes() + amount)));
        default:
            const days = unit == "week" ? amount * 7 : amount;
            return formatDateFunction(new Date(date.setDate(date.getDate() + days)));
    }
}
