using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using RetailInventory;
class Program
{
    static void Main(string[] args)
    {
        using (var context = new RetailContext())
        {
            context.Database.EnsureCreated();

            Console.WriteLine("\n\n=== OUTPUT START ===\n");

            var products = context.Products.ToList();
            foreach (var product in products)
            {
                Console.WriteLine($"Product: {product.Name}, Category: {product.Category}, Stock: {product.Stock}");
            }

            Console.WriteLine("\n=== OUTPUT END ===\n\n");
        }
    }
}
