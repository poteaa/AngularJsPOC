using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel
{
    public class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int ProjectId { get; set; }
        public int CityId { get; set; }
        public string Portrait { get; set; }
        public bool CanReview { get; set; }
        public virtual Project Project { get; set; }
        public virtual City City { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<Goal> Goals { get; set; }
        [InverseProperty("Reviewer")]
        public virtual ICollection<Goal> ReviewGoals { get; set; }
    }
}
