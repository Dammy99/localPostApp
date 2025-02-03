using Application.Interfaces;
using Microsoft.AspNetCore.Http;

namespace Application.Implementations
{
    public class FileWorker : IFileWorker
    {
        public async Task SaveFilesToDisk(string forUserName, IFormFileCollection files)
        {
            foreach (var file in files)
            {
                await SaveFileToDisk(forUserName, file);
            }
        }

        public async Task SaveFileToDisk(string forUserName, IFormFile file)
        {
            var desktopPath = Environment.GetFolderPath(Environment.SpecialFolder.Desktop);
            var extension = Path.GetExtension(file.FileName);
            var notValidatedName = forUserName.ToLower();
            var name = char.ToUpper(notValidatedName[0]) + notValidatedName[1..];
            var randomValue = Guid.NewGuid().ToString().Substring(0, 4);
            var fileName = $"{name}_{DateTime.Now:yyyyMMddHHmmss}_{randomValue}_{extension}";

            var folderPath = Path.Combine(desktopPath, name);

            if (!Directory.Exists(folderPath))
            {
                Directory.CreateDirectory(folderPath);
            }
            string fullPath = Path.Combine(folderPath, fileName);

            using var stream = new FileStream(fullPath, FileMode.CreateNew, FileAccess.Write, FileShare.None);
            await file.CopyToAsync(stream);
        }
    }
}
