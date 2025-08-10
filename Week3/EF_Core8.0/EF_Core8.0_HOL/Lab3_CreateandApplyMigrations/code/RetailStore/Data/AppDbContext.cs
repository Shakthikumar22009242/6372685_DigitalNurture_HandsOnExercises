using Microsoft.EntityFrameworkCore;
using RetailStore.Models;

namespace RetailStore.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // For SQL Server:
            // optionsBuilder.UseSqlServer("Server=.;Database=RetailStoreDB;Trusted_Connection=True;");

            // For SQLite:
            optionsBuilder.UseSqlite("Data Source=RetailStore.db");
        }
    }
}
