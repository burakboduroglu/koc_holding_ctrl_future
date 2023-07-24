# Week - 1 Algorithms

- Recursion
- Binary Search
- Quicksort
- Merge Sort
- Bubble Sort
- Memoization and Dynamic Programming

## Recursion:

- Recursion is a method of solving problems that involves breaking a problem down into smaller and smaller subproblems until you get to a small enough problem that it can be solved trivially.

- Usually recursion involves a function calling itself.

- While it may not seem like much on the surface, recursion allows us to write elegant solutions to problems that may otherwise be very difficult to program.

`Example:` Fibonacci Series with JavaScript

```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

`Example:` File Count with Java

```java
public static int countFiles(File dir) {
  int count = 0;
  File[] files = dir.listFiles();
  for (File file : files) {
    if (file.isFile()) {
      count++;
    } else {
      count += countFiles(file);
    }
  }
  return count;
}
```

## Binary Search:

- Binary search is a fast search algorithm with run-time complexity of Ο(log n). This search algorithm works on the principle of divide and conquer. For this algorithm to work properly, the data collection should be in the sorted form.

- Binary search looks for a particular item by comparing the middle most item of the collection. If a match occurs, then the index of item is returned. If the middle item is greater than the item, then the item is searched in the sub-array to the left of the middle item. Otherwise, the item is searched for in the sub-array to the right of the middle item. This process continues on the sub-array as well until the size of the subarray reduces to zero.

`Example:` Binary Search with JavaScript

```javascript
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  if (start > end) return -1;

  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element is present at mid, return True
    if (arr[mid] === target) return true;
    // Else look in left or right half accordingly
    else if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }

  return false;
}
```

`Example:` Binary Search with Java

```java
public static int binarySearch(int[] arr, int target) {
  int start = 0;
  int end = arr.length - 1;

  if(start > end){
    return -1;
  }

  while (start <= end) {
    int mid = (start + end) / 2;

    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}
```

`Example:` Binary Search with GIF

![Binary Search](https://media.tenor.com/Jl0YrqxnHmAAAAAd/binary-search-sequence-search.gif)

> [Source of GIF](https://tenor.com/tr/view/binary-search-sequence-search-gif-20595028)

### Quicksort:
