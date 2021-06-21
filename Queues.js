// Import our stack data structure to use in this file.
/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
const Stack = require("./Stack");

/**
 * Class to represent a Queue but is implemented using two stacks to store the
 * queued items without using any other objects or arrays to store the items.
 * Retains the FIFO (First in First Out) ordering when adding / removing items.
 */
class TwoStackQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }


  /**
   * Adds a new item to the back of the queue.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} item To be added.
   * @returns {number} The new number of items in the queue.
   */
  enqueue(item) {
    return this.stack1.push(item);
  }

  /**
   * stack1 4
   * 
   * stack2 9
   */

  /**
   * Removes the next item in the line / queue.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The removed item.
   */
  dequeue() {
    // move everything in stack1 to stack2
    if (this.stack2.isEmpty()) {
      while (!stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }
    // pop stack2 and return it
    return this.stack2.pop();
  }

  enqueue(val) {
    const newTail = new Node(val);

    if (this.isEmpty()) {
      this.head = newTail;
      this.tail = newTail;
    } else {
      this.tail.next = newTail;
      this.tail = newTail;
    }
    // pre-increment so the new size is returned otherwise old size is returned
    return ++this.size;
  }

  // Time: O(1) constant
  // Space: O(1)
  dequeue() {
    // remove head
    if (!this.head) {
      return null;
    }

    const dequeued = this.head;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    this.size--;
    return dequeued.data;
  }
}
/*
 * 
*/

sumOfHalvesEqual(q1)
{
  let sum1 = 0;
  let i = 0;
  while (i < this.size() / 2) {
    //dequeue
    sum1 += this.front();
    this.enqueue(this.dequeue())
    i++;
  }
  let sum2 = 0;
  // loop thruogh second half
  for (let i = 0; i < this.size() / 2; i++) {
    sum2 += this.front();
    this.enqueue(this.dequeue());
  }
  return sum1 === sum2;
}
// Create a method on the array Queue class that returns whether or not the sum of the first half of the queue is equal to the sum of the second half
