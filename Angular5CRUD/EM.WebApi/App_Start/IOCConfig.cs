using Autofac;
using Autofac.Integration.WebApi;
using EM.Business;
using EM.Business.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Http;
using EM.DataAccess;

namespace EM.WebApi
{
    public class IOCConfig
    {
        public static IContainer Container { get; set; }
        public static void Run()
        {
            var configuration = GlobalConfiguration.Configuration;
            var builder = new ContainerBuilder();
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());
            builder.RegisterType<EmployeeService>().As<IEmployeeService>().SingleInstance();
            builder.RegisterType<OrderService>().As<IOrderService>().SingleInstance();
            builder.RegisterType<EmployeeRepository>().As<IBaseRepository<Employee>>().SingleInstance();
            builder.RegisterType<OrderRepository>().As<IBaseRepository<spTotalOrdersByMonth_Result>>().SingleInstance();
            Container = builder.Build();
            var resolver = new AutofacWebApiDependencyResolver(Container);
            configuration.DependencyResolver = resolver;
        }
    }
}