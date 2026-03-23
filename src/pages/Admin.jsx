import { useState } from "react";

const Admin = () => {

  // ✅ Search state (component ke andar)
  const [search, setSearch] = useState(""); // 🔥 SEARCH STATE

  // Initial plants data
  const [plants, setPlants] = useState([
    { id: 1, name: "Solar Plant A", location: "Mianwali", capacity: 50 },
    { id: 2, name: "Wind Plant B", location: "Faisalabad", capacity: 30 },
  ]);

  // Form state
  const [newPlant, setNewPlant] = useState({
    name: "",
    location: "",
    capacity: "",
  });

  const [editId, setEditId] = useState(null);

  // ADD
  const addPlant = () => {
    if (!newPlant.name || !newPlant.location || !newPlant.capacity) {
      alert("Please fill all fields");
      return;
    }

    const newData = {
      id: plants.length + 1,
      ...newPlant,
    };

    setPlants([...plants, newData]);

    setNewPlant({ name: "", location: "", capacity: "" });
  };

  // UPDATE
  const updatePlant = (id) => {
    setEditId(id);
  };

  // SAVE
  const savePlant = (id, field, value) => {
    const updated = plants.map((p) =>
      p.id === id ? { ...p, [field]: value } : p
    );
    setPlants(updated);
  };

  // DELETE
  const deletePlant = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      setPlants(plants.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="container mt-4">

      <h1 className="mb-4 text-center">Admin Dashboard</h1>

      {/* 🔥 SEARCH INPUT (table ke upar best place) */}
      <input
        type="text"
        placeholder="Search Plant..."
        className="form-control mb-3"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Add Plant Form */}
      <div className="card p-3 mb-4 shadow-sm">
        <h4>Add New Plant</h4>

        <input
          type="text"
          placeholder="Plant Name"
          className="form-control mb-2"
          value={newPlant.name}
          onChange={(e) =>
            setNewPlant({ ...newPlant, name: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Location"
          className="form-control mb-2"
          value={newPlant.location}
          onChange={(e) =>
            setNewPlant({ ...newPlant, location: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Capacity"
          className="form-control mb-2"
          value={newPlant.capacity}
          onChange={(e) =>
            setNewPlant({ ...newPlant, capacity: e.target.value })
          }
        />

        <button className="btn btn-success" onClick={addPlant}>
          Add Plant
        </button>
      </div>

      {/* Table */}
      <table className="table table-bordered table-striped shadow-sm">
        <thead className="table-dark text-center">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Capacity</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {
            // 🔥 FILTER APPLY HERE
            plants
              .filter((p) =>
                p.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>

                  <td>
                    {editId === p.id ? (
                      <input
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
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => setEditId(null)}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => updatePlant(p.id)}
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
              ))
          }
        </tbody>
      </table>

    </div>
  );
};

export default Admin;