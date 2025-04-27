export default function ClassSchedule({ schedule, onRoomClick }) {
    const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    // Create a structured schedule for rendering
    const structuredSchedule = {};
    
    // Initialize the structure for all 7 days and 7 periods
    for (let day = 0; day < 7; day++) {
      structuredSchedule[day] = {};
      for (let period = 1; period <= 7; period++) {
        structuredSchedule[day][period] = null;
      }
    }
    
    // Fill in classes from schedule data
    Object.keys(schedule).forEach(day => {
      const dayNumber = parseInt(day);
      schedule[day].forEach(classItem => {
        structuredSchedule[dayNumber][classItem.period] = classItem;
      });
    });
    
    return (
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <h2 className="text-xl font-semibold p-4 bg-blue-50">Class Schedule</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-3 border text-left text-sm font-medium text-gray-500">Period</th>
                <th className="p-3 border text-left text-sm font-medium text-gray-500">Time</th>
                {dayNames.slice(0, 6).map((day, index) => (
                  <th key={day} className="p-3 border text-left text-sm font-medium text-gray-500">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7].map(period => {
                // Get the first class of this period to extract time info
                const firstClassWithTime = Object.values(schedule)
                  .flat()
                  .find(cls => cls.period === period);
                
                const timeSlot = firstClassWithTime 
                  ? `${firstClassWithTime.start} - ${firstClassWithTime.end}`
                  : `Period ${period}`;
                  
                return (
                  <tr key={`period-${period}`} className="hover:bg-gray-50">
                    <td className="p-2 border text-center font-medium">{period}</td>
                    <td className="p-2 border text-sm">{timeSlot}</td>
                    
                    {[0, 1, 2, 3, 4, 5].map(day => {
                      const classItem = structuredSchedule[day][period];
                      
                      return (
                        <td key={`day-${day}-period-${period}`} className="p-1 border">
                          {classItem ? (
                            <div 
                              className="bg-blue-50 p-2 rounded cursor-pointer hover:bg-blue-100"
                              onClick={() => onRoomClick(classItem.room)}
                            >
                              <p className="font-medium">{classItem.code}</p>
                              <p className="text-sm text-gray-600">
                                Room: {classItem.room}
                              </p>
                              <p className="text-xs text-gray-500">
                                {classItem.c_by}
                              </p>
                              <p className="text-xs bg-blue-200 inline-block px-1 rounded">
                                {classItem.type}
                              </p>
                            </div>
                          ) : null}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  