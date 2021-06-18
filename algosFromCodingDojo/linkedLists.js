/* 
- A Doubly Linked List is a singly linked list with the added functionality of being able to traverse in both directions.
- Since you can traverse forwards or backwards, that means you should be able to start at the head or tail (end). After creating the necessary classes, then build the following methods:
- Create the node class that allows for forwards and backwards traversal.
- insertAtFront
    - Given some new data, add it as the new head
- insertAtBack
    - Given some new data, add it to the back of the DList
- removeMiddleNode
*/

/**
 * Class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
class Node {
    /**
     * Constructs a new Node instance. Executed when the 'new' keyword is used.
     * @param {any} data The data to be added into this new instance of a Node.
     *    The data can be anything, just like an array can contain strings,
     *    numbers, objects, etc.
     * @returns {Node} A new Node instance is returned automatically without
     *    having to be explicitly written (implicit return).
     */
    constructor(data) {
        this.data = data;
        /**
         * This property is used to link this node to whichever node is next
         * in the list. By default, this new node is not linked to any other
         * nodes, so the setting / updating of this property will happen sometime
         * after this node is created.
         */
        this.next = null;
        this.previous = null;
    }
}

/**
 * Class to represent a list of linked nodes. Nodes CAN be linked together
 * without this class to form a linked list, but this class helps by providing
 * a place to keep track of the start node (head) of the list at all times and
 * as a place to add methods (functions inside an object) so that every new
 * linked list that is instantiated will inherit helpful the same helpful
 * methods, just like every array you create inherits helpful methods.
 */
class SinglyLinkedList {
    /**
     * Constructs a new instance of an empty linked list that inherits all the
     * methods.
     * @returns {SinglyLinkedList} The new list that is instantiated is implicitly
     *    returned without having to explicitly write "return".
     */
    constructor() {
        this.head = null;
    }
}
class DoublyLinkedList {
    /**
     * Constructs a new instance of an empty linked list that inherits all the
     * methods.
     * @returns {DoublyLinkedList} The new list that is instantiated is implicitly
     *    returned without having to explicitly write "return".
     */
    constructor() {
        this.head = null;
        this.tail = null;
    }


    insertAtFront(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        return this;
    }

    insertAtBack(data) {
        const NewNode = new Node(data);

        if (this.tail == null) {
            this.tail = NewNode;
            this.head = NewNode;
        }
        else {
            var temp = this.tail;
            this.tail = NewNode;
            this.tail.previous = temp;
            temp.next = this.tail;
        }
    }

    /**
 * Removes the middle node in this list.
 * - Time: O(0.5n) -> O(n) linear, n = list length.
 *    Since it's not constant we simplify it to O(n). Without the early
 *    exists, it would not be 0.5n.
 * - Space: O(1) constant.
 * @returns {any} The data of the removed node.
 */
    removeMiddleNode() {
        // when there is only 1 node, it is the middle, remove it.
        if (!this.isEmpty() && this.head === this.tail) {
            const removedData = this.head.data;
            this.head = null;
            this.tail = null;
            return removedData;
        }

        let forwardRunner = this.head;
        let backwardsRunner = this.tail;

        while (forwardRunner && backwardsRunner) {
            if (forwardRunner === backwardsRunner) {
                const midNode = forwardRunner;
                midNode.prev.next = midNode.next;
                midNode.next.prev = midNode.prev;
                return midNode.data;
            }

            // runners passed each other without stopping on the same node, even length, we can exit early
            if (forwardRunner.prev === backwardsRunner) {
                return null;
            }

            forwardRunner = forwardRunner.next;
            backwardsRunner = backwardsRunner.prev;
        }
        return null;
    }
    /**
     * Converts this list to an array of the node's data.
     * - Time: O(n) linear, n = list length.
     * - Space: O(n) linear, array grows as list length increases.
     * @returns {Array<any>} All the data of the nodes.
     */
    toArray() {
        const vals = [];
        let runner = this.head;

        while (runner) {
            vals.push(runner.data);
            runner = runner.next;
        }
        return vals;
    }

    /**
     * Adds all the given items to the back of this list.
     * @param {Array<any>} items Items to be added to the back of this list.
     * @returns {DoublyLinkedList} This list.
     */
    seedFromArr(items = []) {
        items.forEach((item) => this.insertAtBack(item));
        return this;
    }


    /**
 * Inserts a new node with the given newVal after the node that has the
 * given targetVal as it's data.
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} targetVal The node data to find.
 * @param {any} newVal Data for the new node.
 * @returns {boolean} Indicates if the new node was added.
 */
    insertAfter(targetVal, newVal) { 
        if(this.head == null){
            this.insertAtFront(newVal)
            return true; 
        }
        current = this.head;
        while(current){
            if(current.data == targetVal){
                const NewNode = new Node(newVal);
                temp = current.next;

                NewNode.next = temp;
                temp.previous = NewNode;

                current.next = NewNode;
                NewNode.previous = current;
                return true;
            }
        }
        return false;
    }

    /**
     * Inserts a new node with the given newVal before the node that has the
     * given targetVal as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    insertBefore(targetVal, newVal) { 
        if(this.head == null){
            this.insertAtFront(newVal)
            return true; 
        }
        current = this.head;
        while(current){
            if(current.data == targetVal){
                const NewNode = new Node(newVal);
                temp = current.previous;

                NewNode.next = current;
                current.previous = NewNode;

                temp.next = NewNode;
                NewNode.previous = temp;
                return true;
            }
        }
        return false;
    }
}