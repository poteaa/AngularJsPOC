using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            Repository rep = new Repository();

            var country = new Core.Country
            {
                CountryId = 1,
                Name = "United States"
            };
            rep.AddCountry(country);

            var city = new Core.City
            {
                CityId = 1,
                Name = "Raccoon City",
                CountryId = rep.GetCountries().FirstOrDefault().CountryId
            };
            rep.AddCity(city);

            var project = new Core.Project
            {
                ProjectId = 1,
                Name = "Market Forward"
            };
            rep.AddProject(project);

            var user = new Core.User
            {
                UserId = 1,
                UserName = "Leon",
                Password = "1",
                FirstName = "Leon",
                LastName = "Kennedy",
                ProjectId = rep.GetProjects().FirstOrDefault().ProjectId,
                CityId = rep.GetCities().FirstOrDefault().CityId,
                Portrait = "LeonKennedy.jpg",
                CanReview = false
            };
            rep.AddUser(user);

            var user2 = new Core.User
            {
                UserId = 2,
                UserName = "Claire",
                Password = "1",
                FirstName = "Claire",
                LastName = "Redfield",
                ProjectId = rep.GetProjects().FirstOrDefault().ProjectId,
                CityId = rep.GetCities().FirstOrDefault().CityId,
                Portrait = "ClaireRedfield.jpg",
                CanReview = true
            };
            rep.AddUser(user2);

            var user3 = new Core.User
            {
                UserName = "Ada",
                Password = "1",
                FirstName = "Ada",
                LastName = "Wong",
                ProjectId = rep.GetProjects().FirstOrDefault().ProjectId,
                CityId = rep.GetCities().FirstOrDefault().CityId,
                Portrait = "AdaWong.jpg",
                CanReview = true
            };
            rep.AddUser(user3);

            var users = rep.GetUsers();

            List<int> userIds = new List<int>();
            foreach (var u in rep.GetUsers())
            {
                userIds.Add(u.UserId);
            }

            var goal = new Core.Goal
            {
                GoalId = 1,
                UserId = userIds[0],
                Title = "Angular",
                Description = "Learn angular 1.5 and create a proof of concept",
                StartDate = DateTime.Now,
                EndDate = DateTime.Now,
                Status = 1,
                ReviewerId = rep.GetUsers().Where(u => u.CanReview).FirstOrDefault().UserId
            };
            rep.AddGoal(goal);

            var goal2 = new Core.Goal
            {
                GoalId = 1,
                UserId = userIds[0],
                Title = "Xamarin",
                Description = "Learn Xamarin and create an application",
                StartDate = DateTime.Now,
                EndDate = DateTime.Now,
                Status = 1,
                ReviewerId = rep.GetUsers().Where(u => u.CanReview).FirstOrDefault().UserId
            };
            rep.AddGoal(goal2);

            var goal3 = new Core.Goal
            {
                GoalId = 1,
                UserId = userIds[1],
                Title = "React",
                Description = "Learn React 1.5 and create a proof of concept",
                StartDate = DateTime.Now,
                EndDate = DateTime.Now,
                Status = 1,
                ReviewerId = rep.GetUsers().Where(u => u.CanReview).FirstOrDefault().UserId
            };
            rep.AddGoal(goal3);

            var goal4 = new Core.Goal
            {
                GoalId = 1,
                UserId = userIds[1],
                Title = "TypeScript",
                Description = "Learn TypeScript and create an application",
                StartDate = DateTime.Now,
                EndDate = DateTime.Now,
                Status = 1,
                ReviewerId = rep.GetUsers().Where(u => u.CanReview).FirstOrDefault().UserId
            };
            rep.AddGoal(goal4);

            var goal5 = new Core.Goal
            {
                GoalId = 1,
                UserId = userIds[2],
                Title = "JQuery",
                Description = "Learn JQuery and create a project",
                StartDate = DateTime.Now,
                EndDate = DateTime.Now,
                Status = 1,
                ReviewerId = rep.GetUsers().Where(u => u.CanReview).FirstOrDefault().UserId
            };
            rep.AddGoal(goal5);

            var goal6 = new Core.Goal
            {
                GoalId = 1,
                UserId = userIds[2],
                Title = "JS",
                Description = "Learn advanced javascript an create a proof of concept",
                StartDate = DateTime.Now,
                EndDate = DateTime.Now,
                Status = 1,
                ReviewerId = rep.GetUsers().Where(u => u.CanReview).FirstOrDefault().UserId
            };
            rep.AddGoal(goal6);


            var goals = rep.GetGoals();
        }
    }
}
