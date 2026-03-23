const PlantTable = ({ plants }) => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card shadow" style={{ width: "90%", maxWidth: "800px", borderRadius: "12px" }}>
        <div className="card-body">
          <h4 className="card-title text-center mb-4">Plant List</h4>

          <div className="table-responsive">
            <table className="table table-striped table-bordered mb-0">
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
          </div>

        </div>
      </div>
    </div>
  );
};

export default PlantTable;