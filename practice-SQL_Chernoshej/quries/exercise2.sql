USE EnterpriseDb

SELECT JobId, JobName
FROM Job
WHERE MinSalary <= 500;