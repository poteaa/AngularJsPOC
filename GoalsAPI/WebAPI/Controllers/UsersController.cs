using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebAPI.Controllers
{
    [RoutePrefix("api/users")]
    public class UsersController : ApiController
    {
        Repository repository = new Repository();
        private HttpResponseMessage _response = new HttpResponseMessage();

        // GET api/users
        [Route("")]
        public IEnumerable<Core.User> Get()
        {
            return repository.GetUsers();
        }

        // GET api/users/1
        // This data anotation is necessary because there is another Get action with id
        [Route("{id:int}")]
        public IHttpActionResult Get(int id)
        {
            Core.User user;
            try
            {
                user = repository.GetUser(id);
                if (user == null)
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

            return Ok(user);
        }

        // GET api/users/GetReviewers
        [Route("GetReviewers")]
        public IEnumerable<Core.User> GetReviewers()
        {
            return repository.GetReviewers();
        }

        // GET api/users/GetGoalsByUser/id
        [Route("GetGoalsByUser/{id:int}")]
        public IEnumerable<Core.Goal> GetGoals(int id)
        {
            return repository.GetGoalsByUser(id);
        }

    }
}
