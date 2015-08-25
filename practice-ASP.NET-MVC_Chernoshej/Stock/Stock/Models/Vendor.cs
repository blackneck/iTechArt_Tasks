using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Stock.Models
{
    public class Vendor
    {
        public Vendor ()
        {
            //this.Ingredients = new HashSet<Ingredient>();
        }

        [Key]
        public int ID { get; set; }
        public string Name { get; set; }
        public int Quickness { get; set; }

        public virtual ICollection<Ingredient> Ingredients { get; set; }
    }
}