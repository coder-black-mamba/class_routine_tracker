'use client';
import { useState, useEffect } from 'react';
import ScheduleSelector from './components/ScheduleSelector';
import ClassSchedule from './components/ClassSchedule';
import RoomInfo from './components/RoomInfo';
import { 
  getInstitutes, 
  getDepartments, 
  getSemesters, 
  getShifts, 
  getGroups, 
  getSchedule,
  getRoomInfo
} from './lib/scheduleData';

export default function Home() {
  const [institute, setInstitute] = useState('');
  const [dept, setDept] = useState('');
  const [sem, setSem] = useState('');
  const [shift, setShift] = useState('');
  const [group, setGroup] = useState('');
  const [schedule, setSchedule] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  
  // Available options
  const [institutes] = useState(getInstitutes());
  const [departments, setDepartments] = useState([]);
  const [semesters, setSemesters] = useState([]);
  const [shifts, setShifts] = useState([]);
  const [groups, setGroups] = useState([]);

  // Update departments when institute changes
  useEffect(() => {
    if (institute) {
      setDepartments(getDepartments(institute));
      setDept('');
      setSem('');
      setShift('');
      setGroup('');
    } else {
      setDepartments([]);
    }
  }, [institute]);

  // Update semesters when department changes
  useEffect(() => {
    if (institute && dept) {
      setSemesters(getSemesters(institute, dept));
      setSem('');
      setShift('');
      setGroup('');
    } else {
      setSemesters([]);
    }
  }, [institute, dept]);

  // Update shifts when semester changes
  useEffect(() => {
    if (institute && dept && sem) {
      setShifts(getShifts(institute, dept, sem));
      setShift('');
      setGroup('');
    } else {
      setShifts([]);
    }
  }, [institute, dept, sem]);

  // Update groups when shift changes
  useEffect(() => {
    if (institute && dept && sem && shift) {
      setGroups(getGroups(institute, dept, sem, shift));
      setGroup('');
    } else {
      setGroups([]);
    }
  }, [institute, dept, sem, shift]);

  // Update schedule when group changes
  useEffect(() => {
    if (institute && dept && sem && shift && group) {
      const scheduleData = getSchedule(institute, dept, sem, shift, group);
      setSchedule(scheduleData);
    } else {
      setSchedule(null);
    }
  }, [institute, dept, sem, shift, group]);

  const handleRoomClick = (roomId) => {
    const roomInfo = getRoomInfo(roomId);
    setSelectedRoom({
      id: roomId,
      ...roomInfo
    });
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Institute Class Schedule</h1>
      
      <div className="mb-6">
        <ScheduleSelector
          institutes={institutes}
          institute={institute}
          setInstitute={setInstitute}
          departments={departments}
          dept={dept}
          setDept={setDept}
          semesters={semesters}
          sem={sem}
          setSem={setSem}
          shifts={shifts}
          shift={shift}
          setShift={setShift}
          groups={groups}
          group={group}
          setGroup={setGroup}
        />
      </div>
      {console.log(schedule)}
      {schedule ? (
        // <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        //   <div className="lg:col-span-2">
        //     <ClassSchedule 
        //       schedule={schedule} 
        //       onRoomClick={handleRoomClick} 
        //     />
        //   </div>
        //   <div>
        //     <RoomInfo selectedRoom={selectedRoom} />
        //   </div>
        // </div>
        <h1 className="text-3xl font-bold mb-6 text-center">Class Schedule</h1>
        
      ) : (
        <div className="text-center py-12 text-gray-500">
          Select institute, department, semester, shift and group to view schedule
        </div>
      )}
    </main>
  );
}