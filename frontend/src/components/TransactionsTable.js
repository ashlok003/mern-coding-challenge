
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TransactionsTable() {
    const [transactions, setTransactions] = useState([]);
    const [month, setMonth] = useState('March');
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchTransactions();
    }, [month, search]);

    const fetchTransactions = async () => {
        try {
            const response = await axios.get('/api/transactions', {
                params: { search, month }
            });
            setTransactions(response.data.transactions);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Transactions Table</h2>
            <label>
                Select Month:
                <select value={month} onChange={(e) => setMonth(e.target.value)}>
                    {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((m) => (
                        <option key={m} value={m}>{m}</option>
                    ))}
                </select>
            </label>
            <input
                type="text"
                placeholder="Search transactions"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Date of Sale</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((txn) => (
                        <tr key={txn._id}>
                            <td>{txn.title}</td>
                            <td>{txn.description}</td>
                            <td>{txn.price}</td>
                            <td>{new Date(txn.dateOfSale).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TransactionsTable;
