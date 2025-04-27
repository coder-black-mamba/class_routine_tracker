export const scheduleData = {
    "rpi": {
      "cs/5/1/NA": {
        "0": [{
          "name": "cs/5/1/1",
          "start": "8:00",
          "end": "8:45",
          "period": 1,
          "day": 0,
          "c_by": "Abdul Wadud",
          "room": 2305,
          "code": "28554",
          "type": "Lecture",
          "added_by": "abu_sayed"
        },
        {
          "name": "cs/5/1/2",
          "start": "8:45",
          "end": "9:30",
          "period": 2,
          "day": 0,
          "c_by": "Abdul Wadud",
          "room": 2305,
          "code": "28554",
          "type": "Lecture",
          "added_by": "abu_sayed"
        },
        {
          "name": "cs/5/1/3",
          "start": "9:30",
          "end": "10:15",
          "period": 3,
          "day": 0,
          "c_by": "Abdul Wadud",
          "room": 2305,
          "code": "28554",
          "type": "Lecture",
          "added_by": "abu_sayed"
        },
        {
          "name": "cs/5/1/4",
          "start": "10:15",
          "end": "11:00",
          "period": 4,
          "day": 0,
          "c_by": "Abdul Wadud",
          "room": 2305,
          "code": "28554",
          "type": "Lecture",
          "added_by": "abu_sayed"
        },
        {
          "name": "cs/5/1/5",
          "start": "11:00",
          "end": "11:45",
          "period": 5,
          "day": 0,
          "c_by": "Abdul Wadud",
          "room": 2305,
          "code": "28554",
          "type": "Lecture",
          "added_by": "abu_sayed"
        },
        {
          "name": "cs/5/1/6",
          "start": "11:45",
          "end": "12:30",
          "period": 6,
          "day": 0,
          "c_by": "Abdul Wadud",
          "room": 2305,
          "code": "28554",
          "type": "Lecture",
          "added_by": "abu_sayed"
        },
        {
          "name": "cs/5/1/7",
          "start": "12:30",
          "end": "13:15",
          "period": 7,
          "day": 0,
          "c_by": "Abdul Wadud",
          "room": 2305,
          "code": "28554",
          "type": "Lecture",
          "added_by": "abu_sayed"
        }],
        "1": [{
          "name": "cs/5/1/1",
          "start": "8:00",
          "end": "8:45",
          "period": 1,
          "day": 1,
          "c_by": "Saifur Rahman",
          "room": 3201,
          "code": "28553",
          "type": "Lecture",
          "added_by": "abu_sayed"
        },
        {
          "name": "cs/5/1/2",
          "start": "8:45",
          "end": "9:30",
          "period": 2,
          "day": 1,
          "c_by": "Saifur Rahman",
          "room": 3201,
          "code": "28553",
          "type": "Lecture",
          "added_by": "abu_sayed"
        }]
      },
      "cs/3/1/A": {
        "0": [{
          "name": "cs/3/1/1", 
          "start": "8:00",
          "end": "8:45",
          "period": 1,
          "day": 0,
          "c_by": "Mahmuda Naznin",
          "room": 2201,
          "code": "25521",
          "type": "Lecture",
          "added_by": "abu_sayed"
        }]
      },
      "ee/4/2/B": {
        "2": [{
          "name": "ee/4/2/1",
          "start": "10:15",
          "end": "11:00",
          "period": 4,
          "day": 2,
          "c_by": "Shahidul Islam",
          "room": 1105,
          "code": "21435",
          "type": "Lab",
          "added_by": "abu_sayed"
        }]
      }
    }
  };
  
  export const roomData = {
    "1105": {
      "building": "Main Building",
      "floor": 1,
      "capacity": 35,
      "facilities": ["Whiteboard", "Projector"]
    },
    "2201": {
      "building": "Science Block",
      "floor": 2,
      "capacity": 40,
      "facilities": ["Computers", "AC", "Whiteboard"] 
    },
    "2305": {
      "building": "Science Block",
      "floor": 2,
      "capacity": 45,
      "facilities": ["Projector", "Smart Board", "AC"]
    },
    "3201": {
      "building": "Technology Wing",
      "floor": 3,
      "capacity": 60,
      "facilities": ["Lab Equipment", "Computers", "Projector"]
    }
  };


  // Helper functions to extract available options
export function getInstitutes() {
    return Object.keys(scheduleData);
  }
  
  export function getScheduleKeys(institute) {
    if (!institute) return [];
    return Object.keys(scheduleData[institute] || {});
  }
  
  export function parseScheduleKey(key) {
    if (!key) return {};
    const [dept, sem, shift, group] = key.split('/');
    return { dept, sem, shift, group };
  }
  
  export function getDepartments(institute) {
    if (!institute) return [];
    const keys = getScheduleKeys(institute);
    const departments = new Set();
    
    keys.forEach(key => {
      const { dept } = parseScheduleKey(key);
      departments.add(dept);
    });
    
    return Array.from(departments);
  }
  
  export function getSemesters(institute, dept) {
    if (!institute || !dept) return [];
    const keys = getScheduleKeys(institute);
    const semesters = new Set();
    
    keys.forEach(key => {
      const parsed = parseScheduleKey(key);
      if (parsed.dept === dept) {
        semesters.add(parsed.sem);
      }
    });
    
    return Array.from(semesters);
  }
  
  export function getShifts(institute, dept, sem) {
    if (!institute || !dept || !sem) return [];
    const keys = getScheduleKeys(institute);
    const shifts = new Set();
    
    keys.forEach(key => {
      const parsed = parseScheduleKey(key);
      if (parsed.dept === dept && parsed.sem === sem) {
        shifts.add(parsed.shift);
      }
    });
    
    return Array.from(shifts);
  }
  
  export function getGroups(institute, dept, sem, shift) {
    if (!institute || !dept || !sem || !shift) return [];
    const keys = getScheduleKeys(institute);
    const groups = new Set();
    
    keys.forEach(key => {
      const parsed = parseScheduleKey(key);
      if (parsed.dept === dept && parsed.sem === sem && parsed.shift === shift) {
        groups.add(parsed.group);
      }
    });
    
    return Array.from(groups);
  }
  
  export function getSchedule(institute, dept, sem, shift, group) {
    if (!institute || !dept || !sem || !shift || !group) return null;
    const key = `${dept}/${sem}/${shift}/${group}`;
    return scheduleData[institute]?.[key] || null;
  }
  
  export function getRoomInfo(roomId) {
    return roomData[roomId] || null;
  }
  