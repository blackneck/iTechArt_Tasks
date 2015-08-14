USE EnterpriseDb

SELECT Department.DepartmentId, Name, COUNT (Career.EmployeeId) personal
FROM Department, Career
WHERE  Department.DepartmentId = Career.DepartmentId AND EndDate IS NULL
GROUP BY Name, Department.DepartmentId
