import React from "react";

const EnergyTable = ({ energy }) => {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Energy Generation Data</h2>
      <table className="table table-striped table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Plant ID</th>
            <th>Timestamp</th>
            <th>Generated Energy (kWh)</th>
            <th>Exported Energy (kWh)</th>
          </tr>
        </thead>
        <tbody>
          {energy.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.plantId}</td>
              <td>{e.timestamp}</td>
              <td>{e.generated}</td>
              <td>{e.exported}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnergyTable;