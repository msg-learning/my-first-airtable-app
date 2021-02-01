import React, { useState } from "react";
import { useBase } from "@airtable/blocks/ui";

interface Props {
    tableName: string;
}


const AddRowForm: React.FC<Props> = ({ tableName }: Props) => {
    const base = useBase();
    const table = base.getTableByName(tableName);
    const [value, setValue] = useState<string>("");

    const onsubmit = event => {
        event.preventDefault();
        table.createRecordAsync({ Name: value });
    }
    return (
        <form onSubmit={onsubmit}>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    )
};

export default AddRowForm;