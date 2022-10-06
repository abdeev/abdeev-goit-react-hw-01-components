import React from "react";
import css from './TransactionsStyles.module.css';

export const TransactionHistory = (data) => {
    return (
        <table className={css.table_transaction}>
            <thead className={css.table_head}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {data.map(rowData => (
                    <tr className={css.table_row} key={rowData.id}>
                    
                        <td>{rowData.type}</td>
                        <td>{rowData.amount}</td>
                        <td>{rowData.currency}</td>
                    
                    </tr>
                )
                )}
            </tbody>
        </table>
    )
}