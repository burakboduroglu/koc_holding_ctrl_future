# Week - 2 Database Architecture

- Fundamentals of Database Systems
- DBMS Languages, Interfaces & Classification
- Database System Environment
- DBMS Architecture
- Basic Concepts of Entity-Relationship Model
- Introduction to Relational Data Model

### Fundamentals of Database Systems

- A database is a collection of data, typically describing the activities of one or more related organizations.
- A database management system (DBMS) is a collection of programs that enables users to create and maintain a database.
- A database system is a high-level definition of the structure and relationship between stored data, a database or databases, users and the hardware or operating system used for the storage.

### DBMS Languages, Interfaces & Classification

- A database language is a language designed for the manipulation of data stored in a database.
- A database language may also incorporate features like:
  - DBMS-specific Configuration and management of storage engine
  - Computations to modification of query results by computations, like summing, counting, averaging, grouping, sorting and cross-referencing Constraint enforcement Application Programming Interface
- Interfaces
  - Command-line interface
  - Graphical user interface
  - Web-based user interface
  - Forms-based user interface
  - Natural language interface
  - Menu-driven interface
  - Touch user interface
- Classification
    - Data Definition Language (DDL)
    - Data Manipulation Language (DML)
    - Data Control Language (DCL)
    - Transaction Control Language (TCL)
`DDL: ` is used to define the database structure or schema. `DDL` is also used to specify additional properties of the data. These properties are used to optimize the database design. `DDL` statements are auto-committed. `DDL` statements can't be rolled back. `DDL` allows you to add, alter, and drop schema objects. `DDL` commands are `CREATE`, `ALTER`, `DROP`, `TRUNCATE`, `COMMENT`, `RENAME`.

`DML: ` is used for managing data within schema objects. `DML` does not auto-commit. It allows you to insert, update, and delete records from a table. `DML` commands are `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `MERGE`, `CALL`, `EXPLAIN PLAN`, `LOCK TABLE`, `WITH`.

`DCL: ` is used to control access to data stored in a database. `DCL` commands are `GRANT`, `REVOKE`.

`TCL: ` allows you to control and manage transactions to maintain the integrity of data within SQL statements. `TCL` commands are `COMMIT`, `ROLLBACK`, `SAVEPOINT`, `SET TRANSACTION`.

### Database System Environment

- A database system environment is defined as the combination of hardware, software, people, procedures and data that are configured to collect, manipulate, store and process data into information.
- The database system environment is divided into two main components:
  - The database and its management system
  - The application programs that access the database through the DBMS

### DBMS Architecture

- The architecture of a database system is greatly influenced by the underlying computer system on which the database system runs.
- The architecture of a database system is concerned mainly with the way the data is stored and retrieved from the storage media.
- The architecture of a database system is also influenced by the hardware and software environment in which it is implemented.
- The architecture of a database system is divided into three levels:
  - External level
  - Conceptual level
  - Internal level


### Basic Concepts of Entity-Relationship Model

- The entity-relationship model is a conceptual model used in database design to improve the conceptual quality of a database system.


### Introduction to Relational Data Model

- The relational model represents the database as a collection of relations.
- A relation is nothing but a table of values.
- Each row in a table represents a collection of related data values.
- Each column in a table represents a particular data item.
- The value of a row in a table is called a tuple.
- The value of a column in a table is called an attribute.
- The relational model is based on the mathematical concept of a relation.

![DBMS ARCHITECTURE](https://media.geeksforgeeks.org/wp-content/uploads/20200827091919/DBMS.png)

> Source: [GeeksforGeeks](https://www.geeksforgeeks.org/structure-of-database-management-system/)