using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Data
{
    public class DataContextSeed
    {
        public static async Task SeedAsync(DataContext db, ILoggerFactory loggerFactory)
        {
            try
            {
                if (!db.ProductBrands.Any())
                {
                    var brandsData = File.ReadAllText("../Infrastructure/data/SeedData/brands.json");

                    var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);

                    foreach (var item in brands)
                    {
                        db.ProductBrands.Add(item);
                    }
                    await db.SaveChangesAsync(); 
                }

                if (!db.ProductTypes.Any())
                {
                    var typesData = File.ReadAllText("../Infrastructure/data/SeedData/types.json");

                    var types = JsonSerializer.Deserialize<List<ProductType>>(typesData);

                    foreach (var item in types)
                    {
                        db.ProductTypes.Add(item);
                    }
                    await db.SaveChangesAsync();
                }

                if (!db.Products.Any())
                {
                    var productsData = File.ReadAllText("../Infrastructure/data/SeedData/products.json");

                    var products = JsonSerializer.Deserialize<List<Product>>(productsData);

                    foreach (var item in products)
                    {
                        db.Products.Add(item);
                    }
                    await db.SaveChangesAsync();
                }
            }
            catch(Exception ex){
                var logger = loggerFactory.CreateLogger<DataContextSeed>();
                logger.LogError(ex.Message);
            }
        }
    }
}