# Database Fundamentals – Conceptual Understanding

## 1. Why is db.json not suitable as a database for real projects?

Using `db.json` as a database is fine for practice or small demo projects, but it is not suitable for real-world applications.

### Limitations of file-based storage:

**Performance:**
- Every time data is read or updated, the entire file has to be accessed.
- When the file becomes large, the application becomes slow.

**Scalability:**
- File-based storage cannot handle large amounts of data.
- It is not suitable when the number of users increases.

**Concurrency:**
- If multiple users try to access or modify the file at the same time, data conflicts may occur.
- There is no proper way to manage simultaneous access.

**Reliability:**
- If the application crashes while writing data, the file can get corrupted.
- There is no automatic backup or recovery system.

Because of these problems, `db.json` is not reliable for real projects, and a proper database is required.

---

## 2. What are the ideal characteristics of a database system (apart from just storage)?

A database system should do more than just store data. Some important characteristics are:

**Performance:**
- The database should retrieve and update data quickly.
- Queries should be executed efficiently.

**Concurrency:**
- Multiple users should be able to access and modify data at the same time without errors.

**Reliability:**
- Data should remain safe even if the system crashes.
- Backup and recovery features should be available.

**Data Integrity:**
- The database should ensure data accuracy and consistency.
- It should prevent invalid or duplicate data.

**Scalability:**
- The database should handle growth in data and users.
- It should work well even as the application grows.

**Fault Tolerance:**
- The system should continue working even if part of it fails.
- Data loss should be avoided using backups or replication.

---

## 3. How many types of databases are there? What are their use cases or applications?

Databases are mainly divided into two types:

### a) Relational Databases (SQL)

Relational databases store data in tables with rows and columns and follow a fixed structure.

**Examples:**
- MySQL
- PostgreSQL
- Oracle
- SQL Server

**Use Cases:**
- Banking applications
- E-commerce websites
- Student and employee management systems

These databases are used where data consistency and accuracy are very important.

---

### b) Non-Relational Databases (NoSQL)

Non-relational databases store data in flexible formats like documents or key-value pairs.

**Examples:**
- MongoDB
- Redis
- Cassandra
- Neo4j

**Use Cases:**
- Social media applications
- Real-time data processing
- Applications with large and changing data

These databases are useful when high scalability and flexibility are required.
