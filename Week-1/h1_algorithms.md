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

- Big O Notation: O(log n)

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

- Big O Notation: O(n log n)

- Worst Case: O(n^2)

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

  public static void swap(int[] array, int firstIndex, int secondIndex) {
    int temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
  }

  public static int pivot(int[] array, int pivotIndex, int endIndex) {
    int swapIndex = pivotIndex;
    for(int i = pivotIndex + 1; i <= endIndex; i++) {
      if(array[i] < array[pivotIndex]) {
        swapIndex++;
        swap(array, i, swapIndex);
        }
      }
      swap(array, pivotIndex, swapIndex);
      return swapIndex;
    }

    public static void quickSortHelper(int[] array, int left, int right){
      if(left < right){
        int pivotIndex = pivot(array, left, right);
        quickSortHelper(array, left, pivotIndex - 1);
        quickSortHelper(array, pivotIndex + 1, right);
      }
    }

    public static void quickSort(int[] array){
      quickSortHelper(array, 0, array.length - 1);
    }


    public static void main(String[] args) {
      int[] array = {5, 3, 1, 8, 2, 9, 7, 6, 4};
      quickSort(array);
      System.out.println(Arrays.toString(array));
    }
}
```

`Example:` Quicksort with GIF

![Quicksort](https://upload.wikimedia.org/wikipedia/commons/9/9c/Quicksort-example.gif)

> [Source of GIF](https://commons.wikimedia.org/wiki/File:Quicksort-example.gif)

## Merge Sort:

- Merge sort is a sorting technique based on divide and conquer technique. With worst-case time complexity being Ο(n log n), it is one of the most respected algorithms.

- Merge sort first divides the array into equal halves and then combines them in a sorted manner.

- Big O Notation: O(n log n)

`Example:` Merge Sort with JavaScript

```javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) result.push(left.shift());
    else result.push(right.shift());
  }

  return [...result, ...left, ...right];
}
```

`Example:` Merge Sort with Java

```java
public class MergeSort {

    public static void sort(int[] array, int low, int high) {
        if (low < high) {
            int mid = (low + high) / 2;
            sort(array, low, mid);
            sort(array, mid + 1, high);
            merge(array, low, mid, high);
        }
    }

    private static void merge(int[] array, int low, int mid, int high) {
        int[] temp = new int[high - low + 1];
        int i = low;
        int j = mid + 1;
        int k = 0;
        while (i <= mid && j <= high) {
            if (array[i] <= array[j]) {
                temp[k] = array[i];
                i++;
            } else {
                temp[k] = array[j];
                j++;
            }
            k++;
        }
        while (i <= mid) {
            temp[k] = array[i];
            i++;
            k++;
        }
        while (j <= high) {
            temp[k] = array[j];
            j++;
            k++;
        }
        for (k = low; k <= high; k++) {
            array[k] = temp[k - low];
        }
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

`Example:` Merge Sort with GIF

![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif?20151222172210)

> [Source of GIF](https://commons.wikimedia.org/wiki/File:Merge-sort-example-300px.gif)
