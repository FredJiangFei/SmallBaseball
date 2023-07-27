using Amazon.S3.Model;
using Amazon.S3;
using SmallBaseball.Domain.Interfaces.Repository;
using SmallBaseball.Domain.Models.Aggregates.TodoAggregate;
using Amazon.Runtime;
using Amazon;

namespace SmallBaseball.Application.Commands.Todos
{
    public class CreateTodoCommandHandler : ICommandHandler<CreateTodoCommand, bool>
    {
        private readonly IRepository<Athlete> _athleteRepository;
        private const string bucketName = "fred-jiang-bucket";

        public CreateTodoCommandHandler(IRepository<Athlete> athleteRepository)
        {
            _athleteRepository = athleteRepository;
        }

        public async Task<bool> Handle(CreateTodoCommand request, CancellationToken cancellationToken)
        {
            var athlete = _athleteRepository.Get(request.UserId);

            var url = "";
            if (request.Image != null)
            {
                url = await WritingAnObjectAsync(request);
            }

            athlete.AddTodo(request.Title, url);
            await _athleteRepository.UpdateAsync(athlete);
            return true;
        }

        static async Task<string> WritingAnObjectAsync(CreateTodoCommand request)
        {
            string accessKey = "AKIA5QXA5ZI7JKCBBLDQ";
            string secretKey = "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";
            AWSCredentials credentials = new BasicAWSCredentials(accessKey, secretKey);
            var client = new AmazonS3Client(credentials, RegionEndpoint.USEast2);

            var putRequest1 = new PutObjectRequest
            {
                BucketName = bucketName,
                Key = request.Image.FileName,
                InputStream = request.Image.OpenReadStream()
            };
            putRequest1.Metadata.Add("Content-Type", request.Image.ContentType);


            PutObjectResponse response1 = await client.PutObjectAsync(putRequest1);
            var url = $"https://{bucketName}.s3.{RegionEndpoint.USEast2.SystemName}.amazonaws.com/{request.Image.FileName}";
            return url;
        }
    }
}
