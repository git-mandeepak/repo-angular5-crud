using EM.Business.Interfaces;
using EM.DataAccess;
using EM.DataAccess.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EM.Business
{
    public class EmployeeService : IEmployeeService
    {
        IBaseRepository<Employee> _empRepository;
        public EmployeeService(IBaseRepository<Employee> empRepository)
        {
            _empRepository = empRepository;
        }

        public int Create(Employee emp)
        {
            return _empRepository.Create(emp);
        }

        public int Delete(Employee obj)
        {
            return _empRepository.Delete(obj);
        }

        public IEnumerable<EmployeeDTO> Get(int pageNumber, int pageSize)
        {
            return _empRepository.Get(pageNumber, pageSize).Select(x=> new EmployeeDTO {
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
        }

        public EmployeeDTO GetById(int id)
        {
            var employee = _empRepository.GetById(id);
            return new EmployeeDTO
            {
                TotalRecords = employee.TotalRecords,
                EmployeeID = employee.EmployeeID,
                LastName = employee.LastName,
                FirstName = employee.FirstName,
                Title = employee.Title,
                TitleOfCourtesy = employee.TitleOfCourtesy,
                BirthDate = employee.BirthDate,
                HireDate = employee.HireDate,
                Address = employee.Address,
                City = employee.City,
                Region = employee.Region,
                PostalCode = employee.PostalCode,
                Country = employee.Country,
                HomePhone = employee.HomePhone,
                Extension = employee.Extension,
                Photo = employee.Photo,
                Notes = employee.Notes,
                ReportsTo = employee.ReportsTo,
                PhotoPath = employee.PhotoPath
            };
        }

        public int Update(Employee emp)
        {
            return _empRepository.Update(emp);
        }
    }
}
