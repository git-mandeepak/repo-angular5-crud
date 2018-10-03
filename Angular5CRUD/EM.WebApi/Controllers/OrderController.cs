using Angular5CRUD.Models;
using EM.Business.Interfaces;
using EM.DataAccess;
using EM.WebApi.Models;
using System;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace EM.WebApi.Controllers
{
    public class OrderController : ApiController
    {
        IOrderService _orderService;
        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;                
        }

        [HttpPost, Route("api/getTotalOrdersByMonth")]
        public IHttpActionResult Get([FromBody] DateRangeModel dateRangeModel)
        {
            try
            {
                var result = _orderService.Get(dateRangeModel.FromDate, dateRangeModel.ToDate);
                return Json(result);
            }
            catch (Exception ex)
            {

                return BadRequest("Server Error:" + ex);
            }
        }
    }
}
