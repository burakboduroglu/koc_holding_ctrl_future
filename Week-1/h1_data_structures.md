# Week - 1 Data Structures

- Data Structures
- Introduction to Data Structures
- Data Types vs. Abstract Data Types
- Understanding the Void Pointers
- Understanding the Null Pointers
- Introduction to Linked List
- Array vs. Single Linked List (In Terms of Representation)
- Creating the Node of a Single Linked List
- Algorithms and Data Structures
- Statements & Functions
- Intro to Algorithms
- Data Structures

## What is a Data Types?

- Data types are the classification or categorization of data items. It represents the kind of value that tells what operations can be performed on a particular data.

- Two important thing about data types:

  - Defines a certain domain of values.
  - Defines operations allowed on those values.

- `User defined data types` are those which are defined by user at the time of writing program to solve the problem. Example of user defined data types are: `structure`, `union`, `enumeration` and `typedef` defined data types.

- `Abstract Data Types` are those which are defined by user but some of their properties are hidden from user. Example of abstract data types are: `stack`, `queue`, `list`, `graph`, `tree` etc. It provides hidden implementation of data structures.

## What is the `void pointer`?

- The `void pointer` is a pointer which has no associated data type with it. A `void pointer` can hold address of any type and can be typcasted to any type.
- Example of `void pointer`:

```c
void *ptr;
int x = 10;
ptr = &x; // ptr holds address of integer x

printf("%d", *(int *)ptr); // Output: 10
```

## What is the `null pointer`?

- The `null pointer` is a pointer which points nothing. Some uses of the `null pointer` are:

  - To initialize a pointer variable when that pointer variable isn't assigned any valid memory address yet.
  - To pass a null pointer to a function argument when we don't want to pass any valid memory address.

- Example of `null pointer`:

```c
int *ptr = NULL;
```
