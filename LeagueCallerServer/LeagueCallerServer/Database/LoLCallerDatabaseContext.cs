using Microsoft.EntityFrameworkCore.SqlServer;
using Microsoft.EntityFrameworkCore;
using LeagueCallerServer.Model;
namespace LeagueCallerServer.Database
{
    public class LoLCallerDatabaseContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public LoLCallerDatabaseContext(DbContextOptions<LoLCallerDatabaseContext> options) : base(options) {
        
        }

        

    }
}
