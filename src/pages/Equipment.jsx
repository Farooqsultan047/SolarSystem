import EquipmentTable from "../components/EquipmentTable";
import { equipment } from "../data/equipment";

const Equipment = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Equipment Management</h2>

      <p className="lead">
        This page shows all equipment installed in renewable energy plants.
      </p>

      <EquipmentTable equipment={equipment} />
    </div>
  );
};

export default Equipment;
 