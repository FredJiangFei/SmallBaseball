using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SmallBaseball.Infrastructure.Repository.EF.Migrations
{
    /// <inheritdoc />
    public partial class InsertedRoles : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "9dc1299a-cb07-43d0-868b-6f6f8eb7ebcc", "cda6a874-401e-4b93-bd1b-5d342c467140", "Admin", "Admin" },
                    { "d197e8db-8a09-4e94-ba05-5c010779ad69", "4b6b9305-df76-420a-87a4-7b276dc840cc", "User", "User" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9dc1299a-cb07-43d0-868b-6f6f8eb7ebcc");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d197e8db-8a09-4e94-ba05-5c010779ad69");
        }
    }
}
