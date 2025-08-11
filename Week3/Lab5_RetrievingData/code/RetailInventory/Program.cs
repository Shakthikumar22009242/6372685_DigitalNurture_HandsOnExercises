using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Sqlite;
using System;
using System.Threading.Tasks;
using RetailInventory;
using RetailInventory.Models;
class Program
{
    static async Task Main(string[] args)
    {
        using var context = new AppDbContext();

        // Ensure DB and tables exist
        await context.Database.EnsureCreatedAsync();

        // ===== Seed Data if Empty =====
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

        // ===== 1. Retrieve All Products =====
        var products = await context.Products.ToListAsync();
        foreach (var p in products)
            Console.WriteLine($"{p.Name} - ₹{p.Price}");

        // ===== 2. Find by ID =====
        var product = await context.Products.FindAsync(1);
        Console.WriteLine($"Found: {product?.Name}");

        // ===== 3. FirstOrDefault with Condition =====
        var expensive = await context.Products.FirstOrDefaultAsync(p => p.Price > 50000);
        Console.WriteLine($"Expensive: {expensive?.Name}");
    }
}
