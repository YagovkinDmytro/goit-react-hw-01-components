const TransactionHistory = ({ items }) => {
  // const transactionList = items =>
  //   items.map(({ id, type, amount, currency }) => (
  //     <tr key={id}>
  //       <td>{type}</td>
  //       <td>{amount}</td>
  //       <td>{currency}</td>
  //     </tr>
  //   ));
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th className="transaction-head">Type</th>
          <th className="transaction-head">Amount</th>
          <th className="transaction-head">Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }, idx) => (
          <tr
            className={`transaction-block ${idx % 2 ? 'grey' : 'light'}`}
            key={id}
          >
            <td className="transaction-block">{type}</td>
            <td className="transaction-block">{amount}</td>
            <td className="transaction-block">{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
