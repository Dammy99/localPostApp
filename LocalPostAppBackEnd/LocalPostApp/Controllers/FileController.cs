using Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LocalPostApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileController : ControllerBase
    {
        private readonly IFileWorker _fileWorker;

        public FileController(IFileWorker fileWorker)
        {
            _fileWorker = fileWorker;
        }

        [HttpPost("upload")]
        public async Task<ActionResult> Post([FromForm] string forUserName, [FromForm] IFormFileCollection files)
        {
            await _fileWorker.SaveFilesToDisk(forUserName, files);

            return Ok();
        }

        [HttpGet("get")]
        public async Task<string> Get()
        {
            return "Hello from FileController";
        }
    }
}
