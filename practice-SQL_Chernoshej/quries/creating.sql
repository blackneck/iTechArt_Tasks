CREATE DATABASE EnterpriseDb;
USE EnterpriseDb
/******************************************************/
/*          �������������                             */ 
/******************************************************/
CREATE TABLE Department
       (DepartmentId INT IDENTITY(1,1)         -- ��� �������������
             PRIMARY KEY,
    Name NVARCHAR(50)    -- �������� �������������
             NOT NULL,  
    DepartmentAddress NVARCHAR(50) )  -- ����� �������������
;
 

CREATE TABLE Employee
       (EmployeeId INT IDENTITY(1,1)          -- ��� ���������
             PRIMARY KEY,
    Name NVARCHAR(30)     -- �������, ��� ���������
             NOT NULL, 
	SerName NVARCHAR(30)     -- �������, ��� ���������
             NOT NULL,
        Birthdate DATE)          -- ���� �������� ���������
;
/******************************************************/
/*          ���������                                 */ 
/******************************************************/
CREATE TABLE Job
       (JobId INT IDENTITY(1,1)         -- ��� ���������
             PRIMARY KEY,
    JobName NVARCHAR(30)     -- �������� ���������
             NOT NULL, 
        MinSalary INT)     -- ����������� �������� �����
;
 
/******************************************************/
/*          ��������� �������                         */ 
/******************************************************/
CREATE TABLE Career
       (JobId INT           -- ��� ���������
             REFERENCES Job(JobId) NOT NULL,
        EmployeeId INT          -- ��� ���������
             REFERENCES Employee(EmployeeId) NOT NULL,
        DepartmentId INT         -- ��� �������������
             REFERENCES Department(DepartmentId),
    StartDate DATE           -- ���� ������ �� ������
             NOT NULL, 
    EndDate DATE)            -- ���� ����������
--;
 
--/******************************************************/
--/*          ���������� �����                          */ 
--/******************************************************/
CREATE TABLE Salary
       (EmployeeId INT          -- ��� ���������
             REFERENCES Employee(EmployeeId),
        Month INT          -- �����
             CHECK(Month>0 AND Month<13),
        Year INT           -- ���
             CHECK(Year>2002 AND Year<2016),
    SalaryAmount INT)      -- ��������