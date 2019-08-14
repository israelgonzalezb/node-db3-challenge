# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

- `SELECT ProductName, CategoryName FROM Products as P JOIN Categories as C ON P.CategoryID = C.CategoryID`

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

- `SELECT OrderID, ShipperName FROM Orders as O JOIN Shippers as S ON O.ShipperID = S.ShipperID WHERE OrderDate < '1997-01-09'`

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

- `SELECT ProductName, Quantity FROM OrderDetails as O INNER JOIN Products as P ON O.ProductID = P.ProductID WHERE O.OrderID = 10251 ORDER BY ProductName`

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

- `SELECT O.OrderID, C.CustomerName, E.LastName FROM Orders as O JOIN Customers as C ON O.CustomerID = C.CustomerID JOIN Employees as E ON O.EmployeeID = E.EmployeeID`

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
