using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ComuteBackend.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    UserSurname = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    UserPhone = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    UserEmail = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    UserPassword = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    VehicleDescription = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    VehicleRegistration = table.Column<string>(type: "nvarchar(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "CarPools",
                columns: table => new
                {
                    CarPoolId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    DepartureTime = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    ArrivalTime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Origin = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DaysAvailable = table.Column<int>(type: "int", nullable: false),
                    Destination = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AvailableSeats = table.Column<int>(type: "int", nullable: false),
                    Owner = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarPools", x => x.CarPoolId);
                    table.ForeignKey(
                        name: "FK_CarPools_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CarPools_UserId",
                table: "CarPools",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CarPools");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
