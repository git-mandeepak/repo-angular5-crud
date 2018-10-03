using EM.DataAccess.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EM.Business.Interfaces
{
    public interface IOrderService
    {
        IEnumerable<TotalByYearDTO> Get(DateTime fromDate, DateTime toDate);
    }
}
