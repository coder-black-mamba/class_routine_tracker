import { 
    getSchedule, 
    getDepartments, 
    getSemesters, 
    getShifts, 
    getGroups 
  } from '../../lib/scheduleData';
  
  export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const institute = searchParams.get('institute');
    const dept = searchParams.get('dept');
    const sem = searchParams.get('sem');
    const shift = searchParams.get('shift');
    const group = searchParams.get('group');
    
    if (institute && dept && sem && shift && group) {
      const scheduleData = getSchedule(institute, dept, sem, shift, group);
      return Response.json(scheduleData || {});
    }
    
    // If we're just querying for options
    if (searchParams.has('getDepartments') && institute) {
      return Response.json(getDepartments(institute));
    }
    
    if (searchParams.has('getSemesters') && institute && dept) {
      return Response.json(getSemesters(institute, dept));
    }
    
    if (searchParams.has('getShifts') && institute && dept && sem) {
      return Response.json(getShifts(institute, dept, sem));
    }
    
    if (searchParams.has('getGroups') && institute && dept && sem && shift) {
      return Response.json(getGroups(institute, dept, sem, shift));
    }
    
    return Response.json({});
  }