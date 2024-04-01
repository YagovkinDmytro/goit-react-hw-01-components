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
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
