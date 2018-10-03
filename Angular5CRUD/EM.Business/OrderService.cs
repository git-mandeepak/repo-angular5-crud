using EM.Business.Interfaces;
using EM.DataAccess.DTO;
using EM.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EM.Business
{
    public class OrderService : IOrderService
    {
        IBaseRepository<spTotalOrdersByMonth_Result> _orderRepository;
        public OrderService(IBaseRepository<spTotalOrdersByMonth_Result> orderRepository)
        {
            _orderRepository = orderRepository;
        }
        public IEnumerable<TotalByYearDTO> Get(DateTime fromDate, DateTime toDate)
        {
            return _orderRepository.Get(fromDate, toDate).Select(x=> new TotalByYearDTO
            {
                Month = x.Month,
                MonthOfYear = x.MonthOfYear,
                TotalOrders = x.TotalOrders,
                Year = x.Year
            });
        }
    }
}
