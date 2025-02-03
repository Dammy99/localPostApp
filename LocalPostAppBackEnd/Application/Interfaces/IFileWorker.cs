using Microsoft.AspNetCore.Http;

namespace Application.Interfaces
{
    public interface IFileWorker
    {
        Task SaveFileToDisk(string forUserName, IFormFile file);
        Task SaveFilesToDisk(string forUserName, IFormFileCollection files);
    }
}