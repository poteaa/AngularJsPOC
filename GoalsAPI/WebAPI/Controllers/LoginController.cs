using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebAPI.Controllers
{
    [RoutePrefix("api/login")]
    public class LoginController : ApiController
    {
        Repository repository = new Repository();
        private HttpResponseMessage _response = new HttpResponseMessage();

        [HttpPost]
        [Route("")]
        public IHttpActionResult Post(Core.User user)
        {
            Core.User coreUser = null;
            try
            {
                coreUser = repository.Login(user.UserName, user.Password);
                if (coreUser == null)
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
            return Ok(coreUser);
        }
    }
}
