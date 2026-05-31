import { useState } from "react";

const Admin = () => {
  const [search, setSearch] = useState("");

  const [plants, setPlants] = useState([
    { id: 1, name: "Solar Plant A", location: "Mianwali", capacity: 50 },
    { id: 2, name: "Wind Plant B", location: "Faisalabad", capacity: 30 },
  ]);

  const [newPlant, setNewPlant] = useState({
    name: "",
    location: " ",
    capacity: " ",
  
  });

  const [editId, setEditId] = useState(null);

  const addPlant = () => {
    if (!newPlant.name || !newPlant.location || !newPlant.capacity) return;

    const newData = {
      id: plants.length + 1,
      ...newPlant,
    };

    setPlants([...plants, newData]);
    setNewPlant({ name: "", location: "", capacity: "" });
  };

  const savePlant = (id, field, value) => {
    setPlants((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  const deletePlant = (id) => {
    setPlants(plants.filter((p) => p.id !== id));
  };

  return (
    <div className="container-fluid px-2 px-md-5 py-3">

      <h2 className="text-center mb-4">Admin Dashboard</h2>

      {/* SEARCH */}
      <div className="row mb-3">
        <div className="col-12 col-md-6 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search Plant..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* FORM */}
      <div className="row g-2 mb-4">
        <div className="col-12 col-md-4">
          <input
            className="form-control"
            placeholder="Plant Name"
            value={newPlant.name}
            onChange={(e) =>
              setNewPlant({ ...newPlant, name: e.target.value })
            }
          />
        </div>

        <div className="col-12 col-md-4">
          <input
            className="form-control"
            placeholder="Location"
            value={newPlant.location}
            onChange={(e) =>
              setNewPlant({ ...newPlant, location: e.target.value })
            }
          />
        </div>

        <div className="col-12 col-md-2">
          <input
            className="form-control"
            placeholder="Capacity"
            value={newPlant.capacity}
            onChange={(e) =>
              setNewPlant({ ...newPlant, capacity: e.target.value })
            }
          />
        </div>

        <div className="col-12 col-md-2">
          <button className="btn btn-success w-100" onClick={addPlant}>
            Add
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover text-center align-middle">

          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Location</th>
              <th>Capacity</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {plants
              .filter((p) =>
                p.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>

                  <td>
                    {editId === p.id ? (
                      <input
                        className="form-control form-control-sm"
                        value={p.name}
                        onChange={(e) =>
                          savePlant(p.id, "name", e.target.value)
                        }
                      />
                    ) : (
                      p.name
                    )}
                  </td>

                  <td>
                    {editId === p.id ? (
                      <input
                        className="form-control form-control-sm"
                        value={p.location}
                        onChange={(e) =>
                          savePlant(p.id, "location", e.target.value)
                        }
                      />
                    ) : (
                      p.location
                    )}
                  </td>

                  <td>
                    {editId === p.id ? (
                      <input
                        className="form-control form-control-sm"
                        value={p.capacity}
                        onChange={(e) =>
                          savePlant(p.id, "capacity", e.target.value)
                        }
                      />
                    ) : (
                      p.capacity
                    )}
                  </td>

                  <td>
                    {editId === p.id ? (
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => setEditId(null)}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning btn-sm me-1"
                        onClick={() => setEditId(p.id)}
                      >
                        Edit
                      </button>
                    )}

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deletePlant(p.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Admin;