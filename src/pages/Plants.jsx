import PlantTable from "../components/PlantTable";
import { plants } from "../data/Plant";

const Plants = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Plants Data</h2>
      <PlantTable plants={plants} />
    </div>
  );
};

export default Plants;