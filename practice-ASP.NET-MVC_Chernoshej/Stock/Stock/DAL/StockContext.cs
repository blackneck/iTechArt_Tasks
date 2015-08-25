using Stock.Models;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace Stock.DAL
{
    public class StockContext : DbContext
    {
        public StockContext() : base ("StockContext")
        {

        }

        public DbSet<Vendor> Vendors { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<VendorIngredient> VendorIngredients { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}