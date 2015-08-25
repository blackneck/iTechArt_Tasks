using Stock.Models;
using System.Collections.Generic;

namespace Stock.DAL
{
    public class StockInitializer : System.Data.Entity.DropCreateDatabaseIfModelChanges<StockContext>
    {
        protected override void Seed(StockContext context)
        {
            var ingredients = new List<Ingredient>
            {
                new Ingredient{ Family = "meat", Name = "meat sousage", Price = 300, Weight = 100  },
                new Ingredient{ Family = "meat", Name = "ham", Price = 300, Weight = 100  },
            };

            ingredients.ForEach(s => context.Ingredients.Add(s));
            context.SaveChanges();

            var vendors = new List<Vendor>
            {
                new Vendor{ Name = "Boris. ltd", Quickness = 3},
                new Vendor{ Name = "BAT. ltd", Quickness = 1 },
                new Vendor{ Name = "Santa Bremor. ltd", Quickness = 2 },
                new Vendor{ Name = "Spartak. ltd", Quickness = 4 },
                new Vendor{ Name = "Communarka. ltd", Quickness = 8 }
            };

            vendors.ForEach(s => context.Vendors.Add(s));
            context.SaveChanges();
        }
    }
}
