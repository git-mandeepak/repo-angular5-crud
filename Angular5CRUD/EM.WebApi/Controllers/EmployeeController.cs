using Angular5CRUD.Models;
using EM.Business.Interfaces;
using EM.DataAccess;
using System;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace EM.WebApi.Controllers
{
    public class EmployeeController : ApiController
    {
        IEmployeeService _employeeService;
        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }
        protected override void Initialize(HttpControllerContext controllerContext)
        {
            //_employeeService = IOCConfig.Container.Resolve<IEmployeeService>();
            base.Initialize(controllerContext);
        }

        [HttpPost, Route("api/getemployees")]
        public IHttpActionResult Get(PagerModel pagerModel)
        {
            try
            {   
                var result = _employeeService.Get(pagerModel.CurrentPage, pagerModel.PageSize);
                return Json(result);
            }
            catch(Exception e)
            {
                return BadRequest("Portal Error:" + e);
            }
        }

        [HttpPost, Route("api/createemployee")]
        public IHttpActionResult CreateEmployee(Employee employee)
        {
            try
            {
                var rowCount = _employeeService.Create(employee);
                return Ok(rowCount);
            }
            catch (Exception ex)
            {
                return BadRequest("Error has occured: " + ex);
            }
        }

        [HttpPut, Route("api/editemployee")]
        public IHttpActionResult EditEmployee(Employee employee)
        {
            try
            {
                var rowCount = _employeeService.Update(employee);
                return Ok(rowCount);
            }
            catch (Exception ex)
            {
                return BadRequest("Error has occured: " + ex);
            }
        }
    }
}
