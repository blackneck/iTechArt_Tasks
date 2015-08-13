USE EnterpriseDb

SELECT Name, convert(int,DATEDIFF(d, Birthdate, getdate())/365.25) age
FROM Employee
WHERE Birthdate = (SELECT MIN(Birthdate) FROM Employee)
