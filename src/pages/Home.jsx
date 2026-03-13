const Home = () => {
  return (
    <div className="container mt-4">
      {/* Main Heading */}
      <h1 className="mb-4 text-center">
        Renewable Energy Plant Monitoring & Revenue Optimization System
      </h1>

      {/* Description */}
      <p className="lead">
        This system monitors renewable energy plants including solar and wind facilities. 
        It stores high-frequency generation data, tracks equipment lifecycle, manages maintenance operations, 
        and calculates revenue based on Power Purchase Agreements (PPA).
      </p>

      {/* System Overview Card */}
      <div className="card mb-4">
        <div className="card-header bg-primary text-white">
          System Overview
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Monitoring Solar and Wind Power Plants</li>
            <li className="list-group-item">Equipment Lifecycle Management</li>
            <li className="list-group-item">Sensor-Based Generation Monitoring</li>
            <li className="list-group-item">Fault Detection and Maintenance Tracking</li>
            <li className="list-group-item">Weather-Based Performance Analysis</li>
            <li className="list-group-item">Automated Revenue Calculation</li>
          </ul>
        </div>
      </div>

      {/* Dashboard Summary */}
      <div className="card mb-4">
        <div className="card-header bg-success text-white">
          Dashboard Summary
        </div>
        <div className="card-body">
          <div className="row text-center">
            <div className="col-md-2 col-6 border-end py-2">
              <h5>Total Plants</h5>
              <p className="mb-0">3</p>
            </div>
            <div className="col-md-2 col-6 border-end py-2">
              <h5>Total Equipment</h5>
              <p className="mb-0">5</p>
            </div>
            <div className="col-md-2 col-6 border-end py-2">
              <h5>Total Sensors</h5>
              <p className="mb-0">4</p>
            </div>
            <div className="col-md-3 col-6 border-end py-2">
              <h5>Total Energy Generated</h5>
              <p className="mb-0">230 MW</p>
            </div>
            <div className="col-md-3 col-6 py-2">
              <h5>Active Maintenance Tasks</h5>
              <p className="mb-0">1</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Functional Modules */}
      <div className="card mb-4">
        <div className="card-header bg-info text-white">
          Key Functional Modules
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Plant Management System</li>
            <li className="list-group-item">Equipment Monitoring</li>
            <li className="list-group-item">Energy Production Tracking</li>
            <li className="list-group-item">Fault Logging & Maintenance Scheduling</li>
            <li className="list-group-item">Weather Correlation Analysis</li>
            <li className="list-group-item">Revenue Calculation using PPA Tariff</li>
          </ul>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="card mb-4">
        <div className="card-header bg-warning text-dark">
          Performance Metrics
        </div>
        <div className="card-body">
          <p className="mb-1">
            <strong>Capacity Utilization:</strong> (Actual Energy Output ÷ Installed Capacity) × 100
          </p>
          <p>
            <strong>Performance Ratio (PR):</strong> Actual Output ÷ Theoretical Output (Weather Adjusted)
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="card mb-4">
        <div className="card-header bg-secondary text-white">
          Navigation
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">View Plants Information</li>
            <li className="list-group-item">View Equipment Details</li>
            <li className="list-group-item">Analyze Energy Production</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;