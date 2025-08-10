using Microsoft.EntityFrameworkCore;
using RetailStore.Models;

namespace RetailStore
{
    public class AppDbContext : DbContext
    {
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=RetailStore.db");
        }
    }
}
