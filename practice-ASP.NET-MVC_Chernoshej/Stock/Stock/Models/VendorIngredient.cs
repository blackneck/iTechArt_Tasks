using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace Stock.Models
{
    public class VendorIngredient
    {
        [ForeignKey("Vendor")]
        [Key, Column(Order = 0)]
        public int VendorId { get; set; }

        [ForeignKey("Ingredient")]
        [Key, Column(Order = 1)]
        public int IngredientId { get; set; }

        public int Count { get; set; }

        [ScriptIgnore]
        public virtual Ingredient Ingredient { get; set; }

        [ScriptIgnore]
        public virtual Vendor Vendor { get; set; }
    }
}