import { initializeBlock, useBase, useRecords } from '@airtable/blocks/ui';
import React from 'react';

import AddFormRow from "./AddRowForm";

function HelloWorldTypescriptApp() {
    const base = useBase();
    const records = useRecords(base.getTableByName("todo"))

    return <>
        <ul>
            {records.map(r => (<li key={r.id}>{r.name}</li>))}
        </ul>
        <AddFormRow tableName="todo" />
    </>;
}

initializeBlock(() => <HelloWorldTypescriptApp />);
