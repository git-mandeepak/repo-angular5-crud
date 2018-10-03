using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EM.DataAccess
{
    public interface IBaseRepository<T>
    {
        IEnumerable<T> Get(int pageNumber, int pageSize);
        IEnumerable<T> Get(DateTime fromDate, DateTime toDate);
        T GetById(int id);
        int Create(T obj);
        int Delete(T obj);
        int Update(T emp);
    }
}
