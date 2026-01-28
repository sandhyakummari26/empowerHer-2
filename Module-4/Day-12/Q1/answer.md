## 1. What is Schema Design and What Does a Database Schema Represent?

Schema design is the process of structuring a relational database by defining tables, columns, data types, relationships, and constraints.  
A **database schema** represents the logical blueprint of the database. It describes **how data is organized** and **how different pieces of data relate to each other**, but it does not store the actual data itself.

For example, in an e-commerce application, the schema may define tables such as `users`, `products`, and `orders`, along with relationships between them.

---

## 2. Why Schema Design is Required Before Writing Backend Code

Schema design must be done before backend development because the backend logic depends on how data is stored and accessed.

- Backend APIs read from and write to database tables.
- A well-designed schema ensures predictable data structure.
- It reduces changes later, which can break backend code.

Without a proper schema, backend code becomes complex, error-prone, and difficult to maintain.

---

## 3. Impact of Poor Schema Design

Poor schema design can cause serious problems:

### a) Data Consistency
- Duplicate or conflicting data may appear.
- Updates in one place may not reflect in others.

### b) Maintenance Issues
- Hard to understand table structure.
- Small changes require changes in many places.

### c) Scalability Problems
- Queries become slow as data grows.
- Difficult to add new features without restructuring tables.

---

## 4. Validations in Schema Design and Why Databases Enforce Them

Validations are rules applied at the database level to ensure data correctness.

Common validations include:
- **NOT NULL** – Ensures a column always has a value.
- **UNIQUE** – Prevents duplicate values.
- **DEFAULT** – Assigns a default value if none is provided.
- **PRIMARY KEY** – Uniquely identifies each record.

Databases enforce validations to protect data integrity, even if backend validation fails.

---

## 5. Difference Between a Database Schema and a Database Table

- A **database schema** is the overall structure or design of the database.
- A **database table** is a single component within the schema that stores data about one entity.

In simple terms, the schema is the plan, and tables are the building blocks inside that plan.

---

## 6. Why a Table Should Represent Only One Entity

Each table should represent only one real-world entity to avoid confusion and duplication.

For example:
- A `users` table should store only user-related data.
- Order details should be stored in a separate `orders` table.

This approach follows normalization principles and makes data easier to manage.

---

## 7. Why Redundant or Derived Data Should Be Avoided

Redundant data means storing the same information in multiple places, which can lead to inconsistencies.

Derived data is data that can be calculated from existing data.

Example:
- Storing `total_price` when it can be calculated from `quantity × price`.

Avoiding redundancy:
- Saves storage space
- Prevents update anomalies
- Improves data accuracy

---

## 8. Importance of Choosing Correct Data Types

Choosing the correct data type:
- Improves performance
- Reduces storage usage
- Prevents invalid data

Examples:
- Use `INTEGER` for age, not `TEXT`
- Use `DATE` or `TIMESTAMP` for dates
- Use `BOOLEAN` for true/false values

Correct data types help the database enforce rules efficiently.

---

## Conclusion

Schema design is a foundational step in relational database development. A well-designed schema ensures data integrity, simplifies backend development, improves performance, and supports scalability. Careful planning at the schema level saves time and prevents major issues in later stages of application development.
"""

path = Path("/mnt/data/answer.md")
path.write_text(content, encoding="utf-8")

path
