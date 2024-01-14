// MetersPage.tsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import Appbar from '../components/appbar';
import '../css/MetersPage.css';

const MetersPage: React.FC = () => {
  const [meters, setMeters] = useState([
    { id: 1, name: 'Meter 1', serialNumber: 'SN123', type: 'Electric', location: 'Room A' },
    { id: 2, name: 'Meter 2', serialNumber: 'SN456', type: 'Water', location: 'Room B' },
    // Add more meters as needed
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMeter, setNewMeter] = useState({
    name: '',
    serialNumber: '',
    type: '',
    location: '',
    unitPrice: '',
  });

  const handleCreateMeter = () => {
    setMeters([...meters, { ...newMeter, id: meters.length + 1 }]);
    setNewMeter({
      name: '',
      serialNumber: '',
      type: '',
      location: '',
      unitPrice: '',
    });
    setIsModalOpen(false);
  };

  return (
    <div className="meters-container">
      <Appbar />
      <div className="widget-section">
        {meters.map((meter) => (
          <div key={meter.id} className="widget meter-widget">
            <p className="widget-title">{meter.name}</p>
            <p className="widget-value">Location: {meter.location}</p>
          </div>
        ))}
        <div className="widget create-meter-widget" onClick={() => setIsModalOpen(true)}>
          <span className="material-icons">add</span>
          <p>Create Meter</p>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Create Meter Form"
        className="modal"
      >
        <h2>Create Meter</h2>
        <form>
          <label>
            Meter Name:
            <input
              type="text"
              value={newMeter.name}
              onChange={(e) => setNewMeter({ ...newMeter, name: e.target.value })}
            />
          </label>
          <label>
            Serial Number:
            <input
              type="text"
              value={newMeter.serialNumber}
              onChange={(e) => setNewMeter({ ...newMeter, serialNumber: e.target.value })}
            />
          </label>
          <label>
            Meter Type:
            <input
              type="text"
              value={newMeter.type}
              onChange={(e) => setNewMeter({ ...newMeter, type: e.target.value })}
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              value={newMeter.location}
              onChange={(e) => setNewMeter({ ...newMeter, location: e.target.value })}
            />
          </label>
          <label>
            Unit Price:
            <input
              type="text"
              value={newMeter.unitPrice}
              onChange={(e) => setNewMeter({ ...newMeter, unitPrice: e.target.value })}
            />
          </label>
          <button type="button" onClick={handleCreateMeter}>
            Create Meter
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default MetersPage;
