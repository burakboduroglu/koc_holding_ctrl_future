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

## What is the Linked List?

- A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers.

- In simple words, a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.

- A linked list is represented by a pointer to the first node of the linked list. The first node is called the head. If the linked list is empty, then the value of the head is NULL.

- Each node in a list consists of at least two parts:

  - Data
  - Pointer (Or Reference) to the next node

- Example of a linked list:

![Linked List](https://cdn.procoding.org/datastructures/linkedlist/singly-linked-list/singly-linked-list-insert-at-end.gif)

> Image Source: [ProCoding](https://www.procoding.org/linked-list/)

### `There are three types of linked list:`

- `Singly Linked List`: In this type of linked list, every node stores address or reference of next node in list and the last node has next address or reference as NULL.

- `Doubly Linked List`: In this type of linked list, every node stores address or reference of previous node and next node in list and the first node has previous address or reference as NULL.

- `Circular Linked List`: In this type of linked list, every node stores address or reference of next node in list and the last node has next address or reference as address or reference of first node in list.

## Selection, Merge and Dijkstra’s Algorithm:

- Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list.

- Merge sort is a sorting technique based on divide and conquer technique. With worst-case time complexity being Ο(n log n), it is one of the most respected algorithms.

- Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later.

## Arrays, Strings, Matrix, Struct, Node, Queue, Stack, Tree, Graph:

- An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array).

- A string is a sequence of characters. In C programming, an array of characters is used to represent a string.

- A matrix is a two-dimensional data structure where numbers are arranged into rows and columns. For example, a matrix of size 3x4 should have 3 rows and 4 columns.

- A structure is a user-defined data type in C/C++. A structure creates a data type that can be used to group items of possibly different types into a single type.

- A node represents a single data point in a data structure. While data structures are built to contain multiple data items, nodes are the building blocks of such structures. They form the basis for linked lists, stacks, queues, trees, and more.

- A queue is a linear data structure that stores items in First In First Out (FIFO) manner. With a queue the least recently added item is removed first. A good example of queue is any queue of consumers for a resource where the consumer that came first is served first.

- A stack is a linear data structure that stores items in Last-In/First-Out (LIFO) or First-In/Last-Out (FILO) manner. In stack, a new element is added at one end and an element is removed from that end only. The insert and delete operations are often called push and pop.

- A tree is a nonlinear data structure, compared to arrays, linked lists, stacks and queues which are linear data structures. A tree can be empty with no nodes or a tree is a structure consisting of one node called the root and zero or one or more subtrees.

- A graph is a pictorial representation of a set of objects where some pairs of objects are connected by links. The interconnected objects are represented by points termed as vertices, and the links that connect the vertices are called edges.
