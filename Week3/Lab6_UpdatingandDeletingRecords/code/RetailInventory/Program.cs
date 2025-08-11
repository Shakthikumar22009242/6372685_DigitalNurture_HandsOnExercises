using Microsoft.EntityFrameworkCore;
using RetailInventory;
using RetailInventory.Models;
using System;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        using var context = new AppDbContext();

        // Ensure DB exists
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

        // ===== 1. Update a Product =====
        var product = await context.Products.FirstOrDefaultAsync(p => p.Name == "Laptop");
        if (product != null)
        {
            product.Price = 70000;
            await context.SaveChangesAsync();
            Console.WriteLine($"Updated Laptop price to ₹{product.Price}");
        }

        // ===== 2. Delete a Product =====
        var toDelete = await context.Products.FirstOrDefaultAsync(p => p.Name == "Rice Bag");
        if (toDelete != null)
        {
            context.Products.Remove(toDelete);
            await context.SaveChangesAsync();
            Console.WriteLine("Deleted product: Rice Bag");
        }

        // ===== Display Remaining Products =====
        var products = await context.Products.ToListAsync();
        Console.WriteLine("\nProducts in DB after update & delete:");
        foreach (var p in products)
            Console.WriteLine($"{p.Name} - ₹{p.Price}");
    }
}
