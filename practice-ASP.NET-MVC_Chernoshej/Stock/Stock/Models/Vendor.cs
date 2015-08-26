using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Stock.Models
{
    public class Vendor
    {         
        public int ID { get; set; }
        public string Name { get; set; }
        public int Quickness { get; set; }

        public ICollection<Ingredient> Ingredients { get; set; }
    }
}