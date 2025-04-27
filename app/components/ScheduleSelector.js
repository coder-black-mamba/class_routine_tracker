export default function ScheduleSelector({
    institutes,
    institute,
    setInstitute,
    departments,
    dept,
    setDept,
    semesters,
    sem,
    setSem,
    shifts,
    shift,
    setShift,
    groups,
    group,
    setGroup
  }) {
    const formatDeptName = (dept) => {
      const deptMap = {
        'cs': 'Computer Science',
        'ee': 'Electrical Engineering',
        'me': 'Mechanical Engineering',
        'ce': 'Civil Engineering',
        'ch': 'Chemical Engineering'
      };
      return deptMap[dept] || dept.toUpperCase();
    };
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 bg-white p-4 rounded-lg shadow">
        <div>
          <label className="block text-sm font-medium mb-2">Institute</label>
          <select
            className="w-full p-2 border rounded"
            value={institute}
            onChange={(e) => setInstitute(e.target.value)}
          >
            <option value="">Select Institute</option>
            {institutes.map((inst) => (
              <option key={inst} value={inst}>
                {inst.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Department</label>
          <select
            className="w-full p-2 border rounded"
            value={dept}
            onChange={(e) => setDept(e.target.value)}
            disabled={!institute}
          >
            <option value="">Select Department</option>
            {departments.map((d) => (
              <option key={d} value={d}>
                {formatDeptName(d)}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Semester</label>
          <select
            className="w-full p-2 border rounded"
            value={sem}
            onChange={(e) => setSem(e.target.value)}
            disabled={!dept}
          >
            <option value="">Select Semester</option>
            {semesters.map((s) => (
              <option key={s} value={s}>
                {s}{getOrdinalSuffix(s)} Semester
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Shift</label>
          <select
            className="w-full p-2 border rounded"
            value={shift}
            onChange={(e) => setShift(e.target.value)}
            disabled={!sem}
          >
            <option value="">Select Shift</option>
            {shifts.map((s) => (
              <option key={s} value={s}>
                Shift {s}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Group</label>
          <select
            className="w-full p-2 border rounded"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            disabled={!shift}
          >
            <option value="">Select Group</option>
            {groups.map((g) => (
              <option key={g} value={g}>
                {g === "NA" ? "No Group" : `Group ${g}`}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
  
  // Helper function for ordinal numbers
  function getOrdinalSuffix(num) {
    const n = parseInt(num);
    if (isNaN(n)) return '';
    
    if (n % 10 === 1 && n % 100 !== 11) {
      return 'st';
    } else if (n % 10 === 2 && n % 100 !== 12) {
      return 'nd';
    } else if (n % 10 === 3 && n % 100 !== 13) {
      return 'rd';
    }
    return 'th';
  }
  