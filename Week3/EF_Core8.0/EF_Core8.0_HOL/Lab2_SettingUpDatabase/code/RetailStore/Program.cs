using RetailStore.Data;
using RetailStore.Models;
using Microsoft.EntityFrameworkCore; // ✅ Fix for Include()

Console.WriteLine("Creating database and adding sample data...");

using var db = new AppDbContext();
db.Database.EnsureCreated();

if (!db.Categories.Any())
{
    var electronics = new Category { Name = "Electronics" };
    electronics.Products.Add(new Product { Name = "Laptop", Price = 55000 });
    electronics.Products.Add(new Product { Name = "Smartphone", Price = 30000 });

    db.Categories.Add(electronics);
    db.SaveChanges();
}

foreach (var category in db.Categories.Include(c => c.Products))
{
    Console.WriteLine($"Category: {category.Name}");
    foreach (var product in category.Products)
    {
        Console.WriteLine($" - {product.Name} : ₹{product.Price}");
    }
}
