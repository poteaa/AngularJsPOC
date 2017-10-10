using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebAPI.Controllers
{
    [RoutePrefix("api/goals")]
    public class GoalsController : ApiController
    {
        Repository repository = new Repository();
        private HttpResponseMessage response = new HttpResponseMessage();

        public string OptionsGoals()
        {
            return null;
        }

        // GET api/goals
        [Route("")]
        public IEnumerable<Core.Goal> Get()
        {
            return repository.GetGoals();
        }

        // GET api/goals/id
        [Route("{id:int?}")]
        public IHttpActionResult Get(int id)
        {
            Core.Goal goal;
            try
            {
                goal = repository.GetGoal(id);
                if (goal == null)
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
            return Ok(goal);
        }

        // POST api/goals
        [HttpPost]
        [Route("")]
        public HttpResponseMessage Post(Core.Goal goal)
        {
            try
            {
                repository.AddGoal(goal);
                response.StatusCode = HttpStatusCode.OK;
            }
            catch (Exception ex)
            {
                response = Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }

            return response;
        }
        
        // PUT api/goals
        [HttpPut]
        [Route("")]
        public HttpResponseMessage Put(Core.Goal goal)
        {
            try
            {
                repository.UpdateGoal(goal);
                response.StatusCode = HttpStatusCode.OK;
            }
            catch (Exception ex)
            {
                response = Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }

            return response;
        }

        // DELETE api/goals
        [HttpDelete]
        [Route("{id:int?}")]
        public HttpResponseMessage Delete(int id)
        {
            try
            {
                repository.DeleteGoal(id);
                response.StatusCode = HttpStatusCode.OK;
            }
            catch (Exception ex)
            {
                response = Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }

            return response;
        }

    }
}
