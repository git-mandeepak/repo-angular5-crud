using EM.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EM.DataAccess
{
    public class EmployeeRepository: IBaseRepository<Employee>
    {
        public int Delete(Employee emp)
        {
            using (var ctx = new NorthwindEntities())
            {
                var empObj = ctx.Employees.FirstOrDefault(x => x.EmployeeID == emp.EmployeeID);
                if (empObj != null)
                {
                    ctx.Employees.Remove(empObj);
                }

                return ctx.SaveChanges();
            }
        }

        public IEnumerable<Employee> Get(int pageNumber, int pageSize)
        {
            using (var ctx = new NorthwindEntities())
            {
                var employees = ctx.spGetEmployeeRecords(pageNumber, pageSize).Select(x => new Employee
                {
                    TotalRecords = x.TotalRecords,
                    EmployeeID = x.EmployeeID,
                    LastName = x.LastName,
                    FirstName = x.FirstName,
                    Title = x.Title,
                    TitleOfCourtesy = x.TitleOfCourtesy,
                    BirthDate = x.BirthDate,
                    HireDate = x.HireDate,
                    Address = x.Address,
                    City = x.City,
                    Region = x.Region,
                    PostalCode = x.PostalCode,
                    Country = x.Country,
                    HomePhone = x.HomePhone,
                    Extension = x.Extension,
                    Photo = x.Photo,
                    Notes = x.Notes,
                    ReportsTo = x.ReportsTo,
                    PhotoPath = x.PhotoPath
                });

                return employees.ToList();
            }
        }

        public Employee GetById(int id)
        {
            throw new NotImplementedException();
        }

        public int Create(Employee obj)
        {
            using (var ctx = new NorthwindEntities())
            {
                ctx.Employees.Add(obj);
                return ctx.SaveChanges();
            }
        }

        public int Update(Employee emp)
        {
            using (var ctx = new NorthwindEntities())
            {
                var empObj = ctx.Employees.FirstOrDefault(x => x.EmployeeID == emp.EmployeeID);
                if (empObj == null) return ctx.SaveChanges();
                empObj.Address = emp.Address;
                empObj.BirthDate = emp.BirthDate;
                empObj.City = emp.City;
                empObj.Country = emp.Country;
                empObj.Employee1 = emp.Employee1;
                empObj.Employees1 = emp.Employees1;
                empObj.Extension = emp.Extension;
                empObj.FirstName = emp.FirstName;
                empObj.HireDate = emp.HireDate;
                empObj.HomePhone = emp.HomePhone;
                empObj.LastName = emp.LastName;
                empObj.Notes = emp.Notes;
                empObj.Photo = emp.Photo;
                empObj.PhotoPath = emp.PhotoPath;
                empObj.PostalCode = emp.PostalCode;
                empObj.Region = emp.Region;
                empObj.ReportsTo = emp.ReportsTo;
                empObj.Title = emp.Title;
                empObj.TitleOfCourtesy = emp.TitleOfCourtesy;

                return ctx.SaveChanges();
            }
        }

        public IEnumerable<Employee> Get(DateTime fromDate, DateTime toDate)
        {
            throw new NotImplementedException();
        }
    }
}
