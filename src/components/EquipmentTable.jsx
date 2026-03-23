import React from "react";

const EquipmentTable = ({ equipment }) => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card shadow" style={{ width: "95%", maxWidth: "900px", borderRadius: "12px" }}>
        <div className="card-body">
          <h4 className="card-title text-center mb-4">Equipment List</h4>

          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover mb-0">
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

        </div>
      </div>
    </div>
  );
};

export default EquipmentTable;