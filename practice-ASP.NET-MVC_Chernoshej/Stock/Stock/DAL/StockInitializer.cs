using Stock.Models;
using System.Collections.Generic;

namespace Stock.DAL
{
    public class StockInitializer : System.Data.Entity.DropCreateDatabaseIfModelChanges<StockContext>
    {
        protected override void Seed(StockContext context)
        {
            
        }
    }
}
