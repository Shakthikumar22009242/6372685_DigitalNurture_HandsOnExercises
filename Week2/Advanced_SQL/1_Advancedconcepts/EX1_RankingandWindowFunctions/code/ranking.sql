DROP TABLE IF EXISTS Products;

CREATE TABLE Products (
    ProductID INTEGER PRIMARY KEY,
    ProductName TEXT,
    Category TEXT,
    Price REAL
);

INSERT INTO Products (ProductID, ProductName, Category, Price) VALUES
(1, 'iPhone 14', 'Electronics', 999.99),
(2, 'MacBook Pro', 'Electronics', 1999.99),
(3, 'AirPods', 'Electronics', 199.99),
(4, 'Samsung Galaxy', 'Electronics', 899.99),
(5, 'T-shirt', 'Clothing', 29.99),
(6, 'Jeans', 'Clothing', 59.99),
(7, 'Jacket', 'Clothing', 119.99),
(8, 'Dress', 'Clothing', 89.99),
(9, 'Refrigerator', 'Home Appliances', 799.99),
(10, 'Microwave', 'Home Appliances', 299.99),
(11, 'Washing Machine', 'Home Appliances', 499.99),
(12, 'TV', 'Home Appliances', 999.99);

SELECT *
FROM (
    SELECT *,
        ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum
    FROM Products
) 
WHERE RowNum <= 3;

SELECT *
FROM (
    SELECT *,
        RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS RankNum
    FROM Products
) 
WHERE RankNum <= 3;

SELECT *
FROM (
    SELECT *,
        DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS DenseRankNum
    FROM Products
) 
WHERE DenseRankNum <= 3;
