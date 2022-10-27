using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ComuteBackend.Models
{
    public class CarPool
    {

        
        [Key]
        public int CarPoolId { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string DepartureTime { get; set; }

        public string ArrivalTime { get; set; }

        public string Origin { get; set; }

        public int DaysAvailable { get; set; }

        public string Destination { get; set; }

        public int AvailableSeats { get; set; }

        public string Owner { get; set; }

        public string Notes { get; set; }
    }
}
