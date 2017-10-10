namespace DataModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Cities",
                c => new
                    {
                        CityId = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        CountryId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.CityId)
                .ForeignKey("dbo.Countries", t => t.CountryId, cascadeDelete: true)
                .Index(t => t.CountryId);
            
            CreateTable(
                "dbo.Countries",
                c => new
                    {
                        CountryId = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.CountryId);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        UserId = c.Int(nullable: false, identity: true),
                        UserName = c.String(),
                        Password = c.String(),
                        FirstName = c.String(),
                        LastName = c.String(),
                        ProjectId = c.Int(nullable: false),
                        CityId = c.Int(nullable: false),
                        Portrait = c.String(),
                    })
                .PrimaryKey(t => t.UserId)
                .ForeignKey("dbo.Cities", t => t.CityId, cascadeDelete: true)
                .ForeignKey("dbo.Projects", t => t.ProjectId, cascadeDelete: true)
                .Index(t => t.ProjectId)
                .Index(t => t.CityId);
            
            CreateTable(
                "dbo.Goals",
                c => new
                    {
                        GoalId = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        Description = c.String(),
                        StartDate = c.DateTime(nullable: false),
                        EndDate = c.DateTime(nullable: false),
                        Status = c.Int(nullable: false),
                        UserId = c.Int(),
                        ReviewerId = c.Int(),
                    })
                .PrimaryKey(t => t.GoalId)
                .ForeignKey("dbo.Users", t => t.UserId)
                .ForeignKey("dbo.Users", t => t.ReviewerId)
                .Index(t => t.UserId)
                .Index(t => t.ReviewerId);
            
            CreateTable(
                "dbo.Projects",
                c => new
                    {
                        ProjectId = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.ProjectId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Goals", "ReviewerId", "dbo.Users");
            DropForeignKey("dbo.Users", "ProjectId", "dbo.Projects");
            DropForeignKey("dbo.Goals", "UserId", "dbo.Users");
            DropForeignKey("dbo.Users", "CityId", "dbo.Cities");
            DropForeignKey("dbo.Cities", "CountryId", "dbo.Countries");
            DropIndex("dbo.Goals", new[] { "ReviewerId" });
            DropIndex("dbo.Goals", new[] { "UserId" });
            DropIndex("dbo.Users", new[] { "CityId" });
            DropIndex("dbo.Users", new[] { "ProjectId" });
            DropIndex("dbo.Cities", new[] { "CountryId" });
            DropTable("dbo.Projects");
            DropTable("dbo.Goals");
            DropTable("dbo.Users");
            DropTable("dbo.Countries");
            DropTable("dbo.Cities");
        }
    }
}
