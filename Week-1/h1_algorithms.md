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
    int mid = Math.floor((start + end) / 2);

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

## Quicksort:

- Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.

- The sub-arrays are then sorted recursively. This can be done in-place, requiring small additional amounts of memory to perform the sorting.

- Quicksort is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation (formally, a total order) is defined.

`Example:` Quicksort with JavaScript

```javascript
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
```

`Example:` Quicksort with Java

```java
public class QuickSort {

    public static void sort(int[] array, int low, int high) {
        if (low < high) {
            int pivot = partition(array, low, high);
            sort(array, low, pivot - 1);
            sort(array, pivot + 1, high);
        }
    }

    private static int partition(int[] array, int low, int high) {
        int pivot = array[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (array[j] <= pivot) {
                i++;
                int temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        int temp = array[i + 1];
        array[i + 1] = array[high];
        array[high] = temp;
        return i + 1;
    }

    public static void main(String[] args) {
        int[] array = {5, 3, 1, 8, 2, 9, 7, 6, 4};
        sort(array, 0, array.length - 1);
        for (int i = 0; i < array.length; i++) {
            System.out.println(array[i]);
        }
    }
}
```

`Example:` Quicksort with GIF

![Quicksort](https://upload.wikimedia.org/wikipedia/commons/9/9c/Quicksort-example.gif)

> [Source of GIF](https://commons.wikimedia.org/wiki/File:Quicksort-example.gif)
