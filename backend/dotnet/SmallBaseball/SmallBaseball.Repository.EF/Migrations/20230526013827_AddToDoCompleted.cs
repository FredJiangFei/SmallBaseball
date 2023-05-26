using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SmallBaseball.Repository.EF.Migrations
{
    /// <inheritdoc />
    public partial class AddToDoCompleted : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Completed",
                table: "Todos",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: "2301D884-221A-4E7D-B509-0113DCC043E1",
                column: "ConcurrencyStamp",
                value: "262bfe09-e2f0-4842-926d-67669685025e");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: "78A7570F-3CE5-48BA-9461-80283ED1D94D",
                column: "ConcurrencyStamp",
                value: "d8e9266e-1d00-4f10-b78c-fb6f50769031");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: "7D9B7113-A8F8-4035-99A7-A20DD400F6A3",
                column: "ConcurrencyStamp",
                value: "5dee2911-c5a3-4e8f-ab06-bb6f07598cae");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "B22698B8-42A2-4115-9631-1C2D1E2AC5F7",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "4c59bd89-b2d2-42ab-bfbe-c47abd6b2026", "AQAAAAEAACcQAAAAEE7aFT6ceYYx9ABGrsRyyvjMB2N8GhxqQeHd96ugV/YMx8RSG28Hz2wQwe2psYpXEA==" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Completed",
                table: "Todos");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: "2301D884-221A-4E7D-B509-0113DCC043E1",
                column: "ConcurrencyStamp",
                value: "11142d5c-651e-428b-bea3-65cb1d548793");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: "78A7570F-3CE5-48BA-9461-80283ED1D94D",
                column: "ConcurrencyStamp",
                value: "c351dec4-2754-465e-8dae-94dd093c8a37");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: "7D9B7113-A8F8-4035-99A7-A20DD400F6A3",
                column: "ConcurrencyStamp",
                value: "4629ed14-0205-4a8d-bb71-cd46b09115f9");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "B22698B8-42A2-4115-9631-1C2D1E2AC5F7",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "a9388daa-0667-459f-b2cf-32be49c3efc8", "AQAAAAEAACcQAAAAEHzR/R9lT14vsI+x+wsP0+8mohk7otPQanLqGhekjxI/tUhUkwNQHUau3xOdSvPB2A==" });
        }
    }
}
