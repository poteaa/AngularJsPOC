namespace DataModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UserCanReviewProp : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Users", "CanReview", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Users", "CanReview");
        }
    }
}
