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
    
    public partial class PizzaToOrder
    {
        public int PizzaId { get; set; }
        public int OrderId { get; set; }
        public int Count { get; set; }
    
        public virtual Order Order { get; set; }
        public virtual Pizza Pizza { get; set; }
    }
}
