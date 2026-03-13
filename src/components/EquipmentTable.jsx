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
          {equipment.map((eq) => (
            <tr key={eq.id}>
              <td>{eq.id}</td>
              <td>{eq.plantId}</td>
              <td>{eq.type}</td>
              <td>{eq.installationDate}</td>
              <td>{eq.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EquipmentTable; 
