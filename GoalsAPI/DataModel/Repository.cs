using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel
{
    public class Repository
    {
        //TODO: cache

        #region City

        public List<Core.City> GetCities()
        {
            List<Core.City> cities = null;
            using (var context = new GoalsContext())
            {
                cities = context.Cities
                    .Select(c => new Core.City
                    {
                        CityId = c.CityId,
                        Name = c.Name
                    }).ToList();
            }

            return cities;
        }

        public void AddCity(Core.City newCity)
        {
            using (var context = new GoalsContext())
            {
                var city = new City
                {
                    CityId = newCity.CityId,
                    Name = newCity.Name,
                    CountryId = newCity.CountryId
                };
                context.Cities.Add(city);
                context.SaveChanges();
            }
        }

        #endregion City

        #region Country

        public List<Core.Country> GetCountries()
        {
            List<Core.Country> countries = null;
            using (var context = new GoalsContext())
            {
                countries = context.Countries
                    .Select(c => new Core.Country
                    {
                        CountryId = c.CountryId,
                        Name = c.Name
                    }).ToList();
            }

            return countries;
        }

        public void AddCountry(Core.Country newCountry)
        {
            using (var context = new GoalsContext())
            {
                var country = new Country
                {
                    CountryId = newCountry.CountryId,
                    Name = newCountry.Name
                };
                context.Countries.Add(country);
                context.SaveChanges();
            }
        }

        #endregion Country

        #region Project

        public List<Core.Project> GetProjects()
        {
            List<Core.Project> projects = null;
            using (var context = new GoalsContext())
            {
                projects = context.Projects
                    .Select(p => new Core.Project
                    {
                        ProjectId = p.ProjectId,
                        Name = p.Name
                    }).ToList();
            }

            return projects;
        }

        public void AddProject(Core.Project newProject)
        {
            using (var context = new GoalsContext())
            {
                var project = new Project
                {
                    ProjectId = newProject.ProjectId,
                    Name = newProject.Name
                };
                context.Projects.Add(project);
                context.SaveChanges();
            }
        }

        #endregion Project

        #region Login

        public Core.User Login(string userName, string pass)
        {
            User user = null;
            using (var context = new GoalsContext())
            {
                user = context.Users.FirstOrDefault(u => u.UserName == userName && u.Password == pass);

                return user == null ? null :
                    new Core.User
                    {
                        UserId = user.UserId,
                        UserName = user.UserName,
                        FirstName = user.FirstName,
                        Password = user.Password,
                        LastName = user.LastName,
                        CityId = user.CityId,
                        CityName = user.City.Name,
                        Portrait = user.Portrait,
                        CanReview = user.CanReview,
                        ProjectId = user.ProjectId,
                        ProjectName = user.Project.Name
                    };
            }
        }

        #endregion Login

        #region User

        public List<Core.User> GetUsers()
        {
            List<Core.User> users = null;
            using (var context = new GoalsContext())
            {
                users = context.Users
                    .OrderBy(n => n.FirstName)
                    .Select(u => new Core.User
                    {
                        UserId = u.UserId,
                        UserName = u.UserName,
                        FirstName = u.FirstName,
                        Password = u.Password,
                        LastName = u.LastName,
                        CityId = u.CityId,
                        CityName = u.City.Name,
                        Portrait = u.Portrait,
                        CanReview = u.CanReview,
                        ProjectId = u.ProjectId,
                        ProjectName = u.Project.Name,
                        GoalsCount = u.Goals.Count
                    }).ToList();
            }

            return users;

        }

        public List<Core.User> GetReviewers()
        {
            List<Core.User> users = null;
            using (var context = new GoalsContext())
            {
                users = context.Users
                    .Where(u => u.CanReview)
                    .OrderBy(u => u.FirstName)
                    .Select(u => new Core.User
                    {
                        UserId = u.UserId,
                        UserName = u.UserName,
                        FirstName = u.FirstName,
                        Password = u.Password,
                        LastName = u.LastName,
                        CityId = u.CityId,
                        CityName = u.City.Name,
                        Portrait = u.Portrait,
                        CanReview = u.CanReview,
                        ProjectId = u.ProjectId,
                        ProjectName = u.Project.Name,
                        GoalsCount = u.Goals.Count
                    }).ToList();
            }

            return users;

        }

        public Core.User GetUser(int id)
        {
            Core.User user = null;
            using (var context = new GoalsContext())
            {
                user = context.Users
                    .Where(u => u.UserId == id)
                    .Select(u => new Core.User
                    {
                        UserId = u.UserId,
                        UserName = u.UserName,
                        FirstName = u.FirstName,
                        Password = u.Password,
                        LastName = u.LastName,
                        CityId = u.CityId,
                        CityName = u.City.Name,
                        Portrait = u.Portrait,
                        CanReview = u.CanReview,
                        ProjectId = u.ProjectId,
                        ProjectName = u.Project.Name
                    }).FirstOrDefault();
            }
            return user;
        }

        public void AddUser(Core.User newUser)
        {
            using (var context = new GoalsContext())
            {
                var user = new User
                {
                    UserName = newUser.UserName,
                    FirstName = newUser.FirstName,
                    Password = newUser.Password,
                    LastName = newUser.LastName,
                    CityId = newUser.CityId,
                    Portrait = newUser.Portrait,
                    CanReview = newUser.CanReview,
                    ProjectId = newUser.ProjectId
                };
                context.Users.Add(user);
                context.SaveChanges();
            }
        }

        public void UpdateUser(Core.User user)
        {
            using (var context = new GoalsContext())
            {
                var oldUser = context.Users.SingleOrDefault(u => u.UserId == user.UserId);

                oldUser.UserName = user.UserName;
                oldUser.FirstName = user.FirstName;
                oldUser.Password = user.Password;
                oldUser.LastName = user.LastName;
                oldUser.CityId = user.CityId;
                oldUser.Portrait = user.Portrait;
                oldUser.CanReview = user.CanReview;
                oldUser.ProjectId = user.ProjectId;

                context.SaveChanges();
            }
        }

        #endregion User

        #region Goal

        public List<Core.Goal> GetGoals()
        {
            List<Core.Goal> goals = null;
            using (var context = new GoalsContext())
            {
                goals = context.Goals
                    .Select(g => new Core.Goal
                    {
                        GoalId = g.GoalId,
                        Title = g.Title,
                        //Description = g.Description,
                        StartDate = g.StartDate,
                        EndDate = g.EndDate,
                        ReviewerId = g.ReviewerId,
                        ReviewerName = g.Reviewer.FirstName + " " + g.Reviewer.LastName,
                        Status = g.Status,
                        UserId = g.UserId,
                        UserName = g.User.FirstName + " " + g.User.LastName
                    }).ToList();
            }

            return goals;

        }

        public List<Core.Goal> GetGoalsByUser(int userId)
        {
            List<Core.Goal> goals = null;
            using (var context = new GoalsContext())
            {
                goals = context.Goals
                    .Where(g => g.User.UserId == userId)
                    .Select(g => new Core.Goal
                    {
                        GoalId = g.GoalId,
                        Title = g.Title,
                        //Description = g.Description,
                        StartDate = g.StartDate,
                        EndDate = g.EndDate,
                        ReviewerId = g.ReviewerId,
                        ReviewerName = g.Reviewer.FirstName + " " + g.Reviewer.LastName,
                        Status = g.Status,
                        UserId = g.UserId,
                        UserName = g.User.FirstName + " " + g.User.LastName
                    }).ToList();
            }

            return goals;

        }

        public Core.Goal GetGoal(int id)
        {
            Core.Goal goal = null;
            using (var context = new GoalsContext())
            {
                goal = context.Goals
                    .Where(g => g.GoalId == id)
                    .Select(g => new Core.Goal
                    {
                        GoalId = g.GoalId,
                        Title = g.Title,
                        Description = g.Description,
                        StartDate = g.StartDate,
                        EndDate = g.EndDate,
                        ReviewerId = g.ReviewerId,
                        ReviewerName = g.Reviewer.FirstName + " " + g.Reviewer.LastName,
                        Status = g.Status,
                        UserId = g.UserId,
                        UserName = g.User.FirstName + " " + g.User.LastName
                    }).FirstOrDefault();
            }

            return goal;

        }


        public void AddGoal(Core.Goal newGoal)
        {
            using (var context = new GoalsContext())
            {
                var goal = new Goal
                {
                    Title = newGoal.Title,
                    Description = newGoal.Description,
                    StartDate = newGoal.StartDate,
                    EndDate = newGoal.EndDate,
                    ReviewerId = newGoal.ReviewerId,
                    Status = newGoal.Status,
                    UserId = newGoal.UserId
                };
                context.Goals.Add(goal);
                context.SaveChanges();
            }
        }

        public void UpdateGoal(Core.Goal goal)
        {
            using (var context = new GoalsContext())
            {
                Goal oldGoal = context.Goals.SingleOrDefault(g => g.GoalId == goal.GoalId);
                if (oldGoal != null)
                {
                    oldGoal.Title = goal.Title;
                    oldGoal.Description = goal.Description;
                    oldGoal.StartDate = goal.StartDate;
                    oldGoal.EndDate = goal.EndDate;
                    oldGoal.ReviewerId = goal.ReviewerId;
                    oldGoal.Status = goal.Status;
                    oldGoal.UserId = goal.UserId;
                    context.SaveChanges();
                }
            }
        }

        public void DeleteGoal(int id)
        {
            using (var context = new GoalsContext())
            {
                string query = $"DELETE FROM [dbo].[Goals] WHERE [GoalId]={id}";
                var rows = context.Database.ExecuteSqlCommand(query);
            }
        }

        #endregion Goal
    }
}
