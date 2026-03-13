const PlantTable = ({ plants }) => {
  return (
     <table className="table table-striped table-bordered">
         <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Location</th>
          <th>Capacity</th>
        </tr>
      </thead>

      <tbody>
        {plants.map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>{p.location}</td>
            <td>{p.capacity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlantTable;