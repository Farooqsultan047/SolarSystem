import React from "react";

const EnergyTable = ({ energy }) => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card shadow" style={{ width: "95%", maxWidth: "900px", borderRadius: "12px" }}>
        <div className="card-body">
          <h4 className="card-title text-center mb-4">Energy Generation Data</h4>

          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover mb-0">
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

        </div>
      </div>
    </div>
  );
};

export default EnergyTable;