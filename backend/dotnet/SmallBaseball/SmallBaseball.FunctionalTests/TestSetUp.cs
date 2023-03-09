using SmallBaseball.Infrastructure.Repository.EF;

namespace SmallBaseball.FunctionalTests
{
    [SetUpFixture]
    public class TestSetUp
    {
        [OneTimeSetUp]
        public void GlobalSetup()
        {
            TestData<DataContext>.SetUpDatabase();
        }

        [OneTimeTearDown]
        public void GlobalTeardown()
        {
            TestData<DataContext>.TeardownDatabase();
        }
    }
}
