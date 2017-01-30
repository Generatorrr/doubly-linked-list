const Node = require('./node');

class LinkedList {

    constructor() {
    	this.length = 0;
    	this._head = null;
    	this._tail = null;
    }

    append(data) {
    	var node = new Node(data);

    	if (this.length) {
    		this._tail.next = node;
    		node.previous = this._tail;
    		this._tail = node;
    	}
    	else {
    		this._head = node;
    		this._tail = node;
    	}
    	this.length++;

    	return node;
    }

    head() {

    	if (this._head) {
    		return this._head.data;
    	}
    	else {
    		return null;
    	}
    }

    tail() {

    	if (this._tail) {
    		return this._tail.data;
    	}
    	else {
    		return null;
    	}
    }

    at(index) {

    	var sNode = this._head,
    	length = this.length,
    	count = 0;
    	message = {failure: "Ошибка: в данном списке нет узлов."};

    	if (index < 0 || index >= length) {
        throw new Error(message.failure);
    	}

    	while (count < index) {
        sNode = sNode.next;
        count++;
    	}

    	return sNode.data;
    }

    insertAt(index, data) {

    	var sNode = this._head,
    	var insNode = new Node(data),
    	count = 0;

    	if (!sNode) {
    		this.append(data);
    	}
    	else {
    		while (count < index) {
    			sNode = sNode.next;
    			count++;
    		}

    		insNode.prev = sNode.prev;
    		insNode.next = sNode;
    		sNode.prev.next = insNode;
    		sNode.prev = insNode;
    		this.length++;
    	}

    	return this;
    }

    isEmpty() {

    	if (this.length === 0) {
    		return true;
    	}
    	else {
    		return false;
    	}

    }

    clear() {

    	this.length = 0;
    	this._head = null;
    	this._tail = null;
    	return this;

    }

    deleteAt(index) {

    	if (index < this.length) {

			var node = this._head;
            var count = 0;
            while (i < index) {
                node = node.next;
                i++;
        	}
            while (i != this.length - 1) {
                node.value = node.next.value;
                this._tail = node;
                node = node.next;
                i++;
            }
            node.value = null;
            node.next = null;
            this.length--;
            return this;
        } 
        else {
            throw new Error("Выбранный индекс превышает количество элементов.");
        }

    }

    reverse() {

    	while (true) {
            this._head.prev = [this._head.next, this._head.next = this._head.prev][0];

            if (!this._head.prev) break;
            else this._head = this._head.prev;
        }
        
        var sNode = this._head,
            i = 1;

        while (i < this.length) {
            sNode = sNode.next;
            count++;
        }

        this._tail = sNode;

		return this;

    }

    indexOf(data) {

    	var sNode = this._head,
		index = 0;

        while (sNode.data != data) {
            if (!sNode.next) return -1;
            else {
                sNode = sNode.next;
                index++;
            }
        }

	return index;

    }
}

module.exports = LinkedList;
