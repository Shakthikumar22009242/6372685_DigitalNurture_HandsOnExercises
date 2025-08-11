using Microsoft.EntityFrameworkCore;
using RetailInventory.Models;
namespace RetailInventory;
public class RetailContext : DbContext
{
    public DbSet<Product> Products => Set<Product>();
    public DbSet<Category> Categories => Set<Category>();

   protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
{
    optionsBuilder.UseSqlite("Data Source=retail.db");
}

}
