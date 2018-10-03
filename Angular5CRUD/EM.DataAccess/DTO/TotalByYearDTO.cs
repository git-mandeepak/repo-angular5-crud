using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EM.DataAccess.DTO
{
    public class TotalByYearDTO
    {
        public Nullable<int> Month { get; set; }
        public Nullable<int> Year { get; set; }
        public string MonthOfYear { get; set; }
        public Nullable<int> TotalOrders { get; set; }
    }
}
