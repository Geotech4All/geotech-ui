import React from "react";

interface DateProps {
    date: string;
    className?: string
};

export default function DateTime(props: DateProps) {
    const { date, className } = props;
    const [dateStr, setDateStr] = React.useState<string>();

    React.useEffect(() => {
        const newDate = new Date(Date.parse(date));
        setDateStr(newDate.toLocaleDateString("en-us", { day: "numeric", month: "long", year: "numeric"}))
    }, [date])

    return (
        <time dateTime={date}
            className={`text-sm font-semibold text-black/50 ${className}`} >{dateStr}</time>
    );
};
