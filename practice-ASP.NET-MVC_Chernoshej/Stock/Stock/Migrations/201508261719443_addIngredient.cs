namespace Stock.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addIngredient : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Ingredients",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Price = c.Int(nullable: false),
                        Name = c.String(),
                        Weight = c.Int(nullable: false),
                        Photo = c.String(),
                        Family = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Vendors",
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
                        VendorId = c.Int(nullable: false),
                        IngredientId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.VendorId, t.IngredientId })
                .ForeignKey("dbo.Vendors", t => t.VendorId, cascadeDelete: true)
                .ForeignKey("dbo.Ingredients", t => t.IngredientId, cascadeDelete: true)
                .Index(t => t.VendorId)
                .Index(t => t.IngredientId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.VendorIngredient", "IngredientId", "dbo.Ingredients");
            DropForeignKey("dbo.VendorIngredient", "VendorId", "dbo.Vendors");
            DropIndex("dbo.VendorIngredient", new[] { "IngredientId" });
            DropIndex("dbo.VendorIngredient", new[] { "VendorId" });
            DropTable("dbo.VendorIngredient");
            DropTable("dbo.Vendors");
            DropTable("dbo.Ingredients");
        }
    }
}
