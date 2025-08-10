using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Sqlite;
using RetailInventory;
using RetailInventory.Models;
using System;
using System.Threading.Tasks;
using System.Linq;

class Program
{
    static async Task Main(string[] args)
    {
        using var context = new AppDbContext();

        // Ensure DB and tables exist
        await context.Database.EnsureCreatedAsync();

        // Seed data if empty
        if (!await context.Products.AnyAsync())
        {
            var electronics = new Category { Name = "Electronics" };
            var groceries = new Category { Name = "Groceries" };

            var product1 = new Product { Name = "Laptop", Price = 75000, Category = electronics };
            var product2 = new Product { Name = "Rice Bag", Price = 1200, Category = groceries };

            await context.Categories.AddRangeAsync(electronics, groceries);
            await context.Products.AddRangeAsync(product1, product2);
            await context.SaveChangesAsync();
        }

        // ===== 1. Filter and Sort (with casting to double for SQLite) =====
        var filtered = await context.Products
            .Where(p => p.Price > 1000)
            .OrderByDescending(p => (double)p.Price)
            .ToListAsync();

        Console.WriteLine("Filtered and Sorted Products:");
        foreach (var p in filtered)
            Console.WriteLine($"{p.Name} - ₹{p.Price}");

        // ===== 2. Project into DTO =====
        var productDTOs = await context.Products
            .Select(p => new { p.Name, p.Price })
            .ToListAsync();

        Console.WriteLine("\nProduct DTOs:");
        foreach (var dto in productDTOs)
            Console.WriteLine($"{dto.Name} - ₹{dto.Price}");
    }
}
