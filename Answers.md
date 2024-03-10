
Answer = 1 => Based on the given diagram, the relationship between the "Product" and "Product_Category" tables is likely a one-to-many relationship, where one category can have multiple products  associated with it, but each product belongs to only one category.

Answer = 2 =>  To ensure that each product in the "Product" table has a valid category assigned to it , we can use a foreign key constraint between the "Product" table and the "Category" table.   This constraint will ensure that the value entered in the "category_id" column of the "Product" table must already exist in the "id" column of the "Product_Category" table.  This ensures that only valid categories can be assigned to products.
