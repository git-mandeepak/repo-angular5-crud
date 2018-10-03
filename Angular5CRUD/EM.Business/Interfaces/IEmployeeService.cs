using EM.DataAccess;
using EM.DataAccess.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EM.Business.Interfaces
{
    public interface IEmployeeService
    {
        IEnumerable<EmployeeDTO> Get(int pageNumber, int pageSize);
        EmployeeDTO GetById(int id);
        int Create(Employee emp);
        int Update(Employee emp);
        int Delete(Employee obj);
    }
}
