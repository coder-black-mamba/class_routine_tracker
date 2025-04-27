export default function RoomInfo({ selectedRoom }) {
    if (!selectedRoom) {
      return (
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Room Information</h2>
          <p className="text-gray-500">Select a class to view room details</p>
        </div>
      );
    }
    
    return (
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Room Information</h2>
        
        <div className="mb-4">
          <h3 className="font-medium text-lg">Room {selectedRoom.id}</h3>
          <p className="text-gray-600">Building: {selectedRoom.building}</p>
          <p className="text-gray-600">Floor: {selectedRoom.floor}</p>
          <p className="text-gray-600">Capacity: {selectedRoom.capacity} students</p>
        </div>
        
        {selectedRoom.facilities && selectedRoom.facilities.length > 0 && (
          <div className="bg-gray-100 rounded p-4 mb-4">
            <h4 className="font-medium mb-2">Facilities</h4>
            <ul className="text-sm">
              {selectedRoom.facilities.map((facility) => (
                <li key={facility} className="mb-1">• {facility}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="border border-dashed border-gray-300 rounded p-4 bg-gray-50 text-center">
          <p className="text-gray-500 mb-2">3D Map View</p>
          <p className="text-sm text-gray-400">(Coming Soon)</p>
        </div>
      </div>
    );
  }