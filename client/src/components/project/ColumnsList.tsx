import {TicketState} from "@models/TicketModel.ts";
import TicketsList from "@components/project/TicketsList.tsx";
import {Column} from "@components/project/Column.tsx";

type ColumnListProps = {
    search: { value: string };
}

const columns = Object.values(TicketState);
const columnNames = {
    [TicketState.Open]: 'Open',
    [TicketState.InProgress]: 'In Progress',
    [TicketState.Review]: 'Review',
    [TicketState.Done]: 'Done',
};

export default function ColumnsList({search}: ColumnListProps) {
    return (
        columns.map(column =>
            <Column columnName={columnNames[column]} key={column}>
                <TicketsList ticketState={column} search={search}/>
            </Column>
        )

    )
}