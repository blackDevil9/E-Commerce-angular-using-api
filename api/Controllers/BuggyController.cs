using api.Errors;
using Infrastructure.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly DataContext _db;

        public BuggyController(DataContext db)
        {
            _db = db;
        }

        [HttpGet("notFound")]
        public ActionResult GetNotFoundRequest()
        {
            var thing = _db.Products.Find(-1);

            if(thing == null)
            {
                return NotFound(new ApiResponse(404));
            }
            return Ok();
        }

        [HttpGet("servererror")]
        public ActionResult GetServerError()
        {
            var thing = _db.Products.Find(-1);
            var thingToReturn = thing.ToString();

            return Ok(thingToReturn);
        }

        [HttpGet("badrequest")]
        public ActionResult GetBadRequest()
        {
            return BadRequest(new ApiResponse(400));
        }

        [HttpGet("badrequest/{id}")]
        public ActionResult GetNotFoundRequest(int id)
        {  
            return Ok();
        }
    }
}