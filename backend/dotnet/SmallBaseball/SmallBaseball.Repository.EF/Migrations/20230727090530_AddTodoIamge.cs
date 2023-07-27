using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SmallBaseball.Repository.EF.Migrations
{
    /// <inheritdoc />
    public partial class AddTodoIamge : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChatListItems_Athletes_AthleteId",
                table: "ChatListItems");

            migrationBuilder.DropForeignKey(
                name: "FK_ChatMessages_Athletes_AthleteId",
                table: "ChatMessages");

            migrationBuilder.DropForeignKey(
                name: "FK_ChatMessages_Athletes_AthleteId1",
                table: "ChatMessages");

            migrationBuilder.DropIndex(
                name: "IX_ChatMessages_AthleteId",
                table: "ChatMessages");

            migrationBuilder.DropIndex(
                name: "IX_ChatMessages_AthleteId1",
                table: "ChatMessages");

            migrationBuilder.DropIndex(
                name: "IX_ChatListItems_AthleteId",
                table: "ChatListItems");

            migrationBuilder.DropColumn(
                name: "AthleteId",
                table: "ChatMessages");

            migrationBuilder.DropColumn(
                name: "AthleteId1",
                table: "ChatMessages");

            migrationBuilder.DropColumn(
                name: "AthleteId",
                table: "ChatListItems");

            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "Todos",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: "2301D884-221A-4E7D-B509-0113DCC043E1",
                column: "ConcurrencyStamp",
                value: "47640ce1-ece2-4c0d-a708-f50559ff20bc");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: "78A7570F-3CE5-48BA-9461-80283ED1D94D",
                column: "ConcurrencyStamp",
                value: "d7936b69-e339-4f7a-89b6-1780e3c58016");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: "7D9B7113-A8F8-4035-99A7-A20DD400F6A3",
                column: "ConcurrencyStamp",
                value: "efe0f59a-7ace-4326-afb3-d70a006a88ab");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "B22698B8-42A2-4115-9631-1C2D1E2AC5F7",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "a8953053-65af-4670-b3ab-c4ade081c860", "AQAAAAEAACcQAAAAEBPC/2ILrfKqIWQaZixTslDwhIeyIHAFZCV6bHg2yHMCyBqK0fY6u7uw1KIWkjJEmA==" });

            migrationBuilder.CreateIndex(
                name: "IX_ChatMessages_ReceiverId",
                table: "ChatMessages",
                column: "ReceiverId");

            migrationBuilder.CreateIndex(
                name: "IX_ChatMessages_SenderId",
                table: "ChatMessages",
                column: "SenderId");

            migrationBuilder.CreateIndex(
                name: "IX_ChatListItems_UserId",
                table: "ChatListItems",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_ChatListItems_Athletes_UserId",
                table: "ChatListItems",
                column: "UserId",
                principalTable: "Athletes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ChatMessages_Athletes_ReceiverId",
                table: "ChatMessages",
                column: "ReceiverId",
                principalTable: "Athletes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ChatMessages_Athletes_SenderId",
                table: "ChatMessages",
                column: "SenderId",
                principalTable: "Athletes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChatListItems_Athletes_UserId",
                table: "ChatListItems");

            migrationBuilder.DropForeignKey(
                name: "FK_ChatMessages_Athletes_ReceiverId",
                table: "ChatMessages");

            migrationBuilder.DropForeignKey(
                name: "FK_ChatMessages_Athletes_SenderId",
                table: "ChatMessages");

            migrationBuilder.DropIndex(
                name: "IX_ChatMessages_ReceiverId",
                table: "ChatMessages");

            migrationBuilder.DropIndex(
                name: "IX_ChatMessages_SenderId",
                table: "ChatMessages");

            migrationBuilder.DropIndex(
                name: "IX_ChatListItems_UserId",
                table: "ChatListItems");

            migrationBuilder.DropColumn(
                name: "Image",
                table: "Todos");

            migrationBuilder.AddColumn<Guid>(
                name: "AthleteId",
                table: "ChatMessages",
                type: "char(36)",
                nullable: true,
                collation: "ascii_general_ci");

            migrationBuilder.AddColumn<Guid>(
                name: "AthleteId1",
                table: "ChatMessages",
                type: "char(36)",
                nullable: true,
                collation: "ascii_general_ci");

            migrationBuilder.AddColumn<Guid>(
                name: "AthleteId",
                table: "ChatListItems",
                type: "char(36)",
                nullable: true,
                collation: "ascii_general_ci");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: "2301D884-221A-4E7D-B509-0113DCC043E1",
                column: "ConcurrencyStamp",
                value: "9a529fbf-66f7-475b-9221-8fcecab58d3d");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: "78A7570F-3CE5-48BA-9461-80283ED1D94D",
                column: "ConcurrencyStamp",
                value: "6bef5c7b-a86d-4785-8a08-5ac848d8573f");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: "7D9B7113-A8F8-4035-99A7-A20DD400F6A3",
                column: "ConcurrencyStamp",
                value: "7fc13565-aea4-4a3f-8ca8-20677a45ded4");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: "B22698B8-42A2-4115-9631-1C2D1E2AC5F7",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "1ea05777-f714-4352-8547-e71e09d0689d", "AQAAAAEAACcQAAAAENLt3JYyqbBY4XuRCvrkd0rDs1kUMdBmFf+FyMUqvrzcswCxe2dia+Trgv6neFfQaw==" });

            migrationBuilder.CreateIndex(
                name: "IX_ChatMessages_AthleteId",
                table: "ChatMessages",
                column: "AthleteId");

            migrationBuilder.CreateIndex(
                name: "IX_ChatMessages_AthleteId1",
                table: "ChatMessages",
                column: "AthleteId1");

            migrationBuilder.CreateIndex(
                name: "IX_ChatListItems_AthleteId",
                table: "ChatListItems",
                column: "AthleteId");

            migrationBuilder.AddForeignKey(
                name: "FK_ChatListItems_Athletes_AthleteId",
                table: "ChatListItems",
                column: "AthleteId",
                principalTable: "Athletes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ChatMessages_Athletes_AthleteId",
                table: "ChatMessages",
                column: "AthleteId",
                principalTable: "Athletes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ChatMessages_Athletes_AthleteId1",
                table: "ChatMessages",
                column: "AthleteId1",
                principalTable: "Athletes",
                principalColumn: "Id");
        }
    }
}
