function Node(data){
	this.data = data;
	this.next =	null;
}

function SinglyLinkedList(){
	this._length = 0;
	this.head = null;
}

SinglyLinkedList.prototype.add = function(value){
	var node = new Node(value);
	currentNode = this.head;

	if(!currentNode){
		this.head = node;
		this._length++;
		return node;
	}

	while(currentNode.next){
		currentNode = currentNode.next;
		// tranverse through the end of the SSL
	}

	currentNode.next = node;
	this._length++;
	return node;
}

SinglyLinkedList.prototype.findAt = function(position){
	var currentNode = this.head;
	var length = this._length;
	var count = 1;

	if(length === 0 || postion < 1 || position > length){
		return "no node exist";
	}

	while (count < position){
		currentNode = currentNode.next;
		count++;
	}

	return currentNode;
}

SinglyLinkedList.prototype.remove = function(value){
	var currentNode = this.head;
	var length = this._length;
	var count = 0;

	if(position < 0 || position > length){
		return "no node exist";
	}

	if(position === 1){
		this.head =	currentNode.next;
		var deletedNode = currentNode;
		currentNode = null;
		this._length--;

		return deletedNode;
	}

	while( count< position){
		var beforeDeleteNode = currentNode;
		var nodeToDelete = currentNode.next;
		currentNode = currentNode.next;
		count++;
	}

	beforeDeleteNode.next = nodeToDelete.next;
	var deletedNode = nodeToDelete;
	nodeToDelete = null;
	this._length--;

	return deletedNode;

}