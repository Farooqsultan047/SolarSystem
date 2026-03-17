import React from "react";

const EquipmentTable = ({ equipment }) => {
  return (
    <div className="container mt-4">
      <h2>Equipment List</h2>

      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Plant ID</th>
            <th>Equipment Type</th>
            <th>Installation Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {equipment && equipment.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.plantId}</td>
              <td>{e.type}</td>
              <td>{e.installationDate}</td>
              <td>{e.status}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default EquipmentTable;