//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Stock
{
    using System;
    using System.Collections.Generic;
    
    public partial class VendorIngredientToOrder
    {
        public int IngredientId { get; set; }
        public int VendorId { get; set; }
        public int VendorOrderId { get; set; }
    
        public virtual Ingredient Ingredient { get; set; }
        public virtual VendorIngredient VendorIngredient { get; set; }
        public virtual VendorOrder VendorOrder { get; set; }
        public virtual Vendor Vendor { get; set; }
    }
}
