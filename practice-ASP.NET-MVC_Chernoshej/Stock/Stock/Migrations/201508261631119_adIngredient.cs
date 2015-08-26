namespace Stock.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class adIngredient : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Ingredient",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Price = c.Int(nullable: false),
                        Name = c.String(),
                        Weight = c.Int(nullable: false),
                        Photo = c.String(),
                        Family = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Vendor",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Quickness = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.VendorIngredient",
                c => new
                    {
                        VendorID = c.Int(nullable: false),
                        IngredientID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.VendorID, t.IngredientID })
                .ForeignKey("dbo.Vendor", t => t.VendorID, cascadeDelete: true)
                .ForeignKey("dbo.Ingredient", t => t.IngredientID, cascadeDelete: true)
                .Index(t => t.VendorID)
                .Index(t => t.IngredientID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.VendorIngredient", "IngredientID", "dbo.Ingredient");
            DropForeignKey("dbo.VendorIngredient", "VendorID", "dbo.Vendor");
            DropIndex("dbo.VendorIngredient", new[] { "IngredientID" });
            DropIndex("dbo.VendorIngredient", new[] { "VendorID" });
            DropTable("dbo.VendorIngredient");
            DropTable("dbo.Vendor");
            DropTable("dbo.Ingredient");
        }
    }
}
