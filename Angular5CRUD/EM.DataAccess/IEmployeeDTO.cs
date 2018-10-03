using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EM.DataAccess
{
    public interface IEmployeeDTO
    {
        IEnumerable<Employee> Get();
    }
}
