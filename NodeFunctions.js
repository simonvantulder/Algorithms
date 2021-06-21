/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class Node {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
        this.data = data;
        /**
         * These properties are how this node is connected to other nodes to form
         * the tree. Similar to .next in a SinglyLinkedList except a BST node can
         * be connected to two other nodes. To start, new nodes will not be
         * connected to any other nodes, these properties will be set after
         * the new node is instantiated.
         */
        this.left = null;
        this.right = null;
    }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
    constructor() {
        /**
         * Just like the head of a linked list, this is the start of our tree which
         * branches downward from here.
         */
        this.root = null;
    }

    /**
     * Determines if this tree is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty() {
        if(this.root == null){
            return true;
        }
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} runner The node that is runnerly accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    min(runner = this.root) {
        if(this.root == null){
            return null;
        }
        while(runner.left != null)
        {
            runner = runner.left;
        }
        return runner.data;
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} runner The node that is runnerly accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    minRecursive(runner = this.root) {
        if(this.root == null){
            return null;
        }
        if(runner.left == null){
            return runner.data;
        }
        return this.minRecursive(runner.left);
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} runner The node that is runnerly accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    max(runner = this.root) { 
        if(this.root == null){
            return null;
        }
        while(runner.right != null)
        {
            runner = runner.right;
        }
        return runner.data;
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} runner The node that is runnerly accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    maxRecursive(runner = this.root) {
        if(this.root == null){
            return null;
        }
        if(runner.right == null){
            return runner.data;
        }
        // max is at the bottom right of the tree...keep going
        return this.maxRecursive(runner.right);
    }

    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }

    // Time Complexity : O(h), where h is height of binary search tree. In worst case the height is equal to number of nodes.
    // Space Complexity: O(1).
    insertRecursive(data, runner = this.root){
        const newNode = new Node(data)
        
        if(this.root === null){
            this.root = newNode;
            return this;
        } 
        if(data > runner.data && runner.right !== null){
            runner = runner.right;
        }
        if(data <= runner.data && runner.left !== null){
            runner = runner.left;
        }
        // end of tree if we get here
        else if(data > runner.data){
            runner.right = newNode;
            return this;
        }
        else if(data < runner.data){
            runner.left = newNode;
            return this;
        }
        return this.insertRecursive(data, runner);

    }
    
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new Node(10);
// twoNodeTree.maxRecursive();

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new Node(10);
twoLevelTree.root.left = new Node(5);
twoLevelTree.root.right = new Node(15);

/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/
/***************** Uncomment after insert method is created. ****************/
const fullTree = new BinarySearchTree();
fullTree
  .insertRecursive(25)
  .insertRecursive(15)
  .insertRecursive(10)
  .insertRecursive(22)
  .insertRecursive(4)
  .insertRecursive(12)
  .insertRecursive(18)
  .insertRecursive(24)
  .insertRecursive(50)
  .insertRecursive(35)
  .insertRecursive(70)
  .insertRecursive(31)
  .insertRecursive(44)
  .insertRecursive(66)
  .insertRecursive(90)
  .print();
