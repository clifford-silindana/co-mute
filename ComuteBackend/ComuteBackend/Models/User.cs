using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ComuteBackend.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string UserName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string UserSurname { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string UserPhone { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string UserEmail { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string UserPassword { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string VehicleDescription { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string VehicleRegistration { get; set; }
    }
}
