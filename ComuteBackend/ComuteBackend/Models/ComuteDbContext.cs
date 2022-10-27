using Microsoft.EntityFrameworkCore;

namespace ComuteBackend.Models
{
    public class ComuteDbContext : DbContext
    {
        public ComuteDbContext(DbContextOptions<ComuteDbContext> options):base(options)
        {
            
        }

        public DbSet<User> Users { get; set; }
        public DbSet<CarPool> CarPools { get; set; }
    }
}
