USE EnterpriseDb

SELECT Employee.NAME, DATEDIFF(dd,CAST(Career.StartDate AS DATE), CAST( ISNULL(Career.EndDate, GETDATE()) AS DATE)) EXPERIENCE 
FROM Employee JOIN Career ON Employee.EmployeeId = Career.EmployeeId