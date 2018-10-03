using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EM.DataAccess
{
    public class OrderRepository : IBaseRepository<spTotalOrdersByMonth_Result>
    {
        public int Create(spTotalOrdersByMonth_Result obj)
        {
            throw new NotImplementedException();
        }

        public int Delete(spTotalOrdersByMonth_Result obj)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<spTotalOrdersByMonth_Result> Get(int pageNumber, int pageSize)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<spTotalOrdersByMonth_Result> Get(DateTime fromDate, DateTime toDate)
        {
            using (var ctx = new NorthwindEntities())
            {
                return ctx.spTotalOrdersByMonth(fromDate, toDate).ToList();
            }
        }

        public spTotalOrdersByMonth_Result GetById(int id)
        {
            throw new NotImplementedException();
        }

        public int Update(spTotalOrdersByMonth_Result emp)
        {
            throw new NotImplementedException();
        }
    }
}
