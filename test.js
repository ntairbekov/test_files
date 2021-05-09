class mySet {
	constructor(items) {
		if (items instanceof mySet) {
			this.elements = items.values();
		}
		else if (items instanceof Array) {
			this.elements = [];
			for (let item of items) {
				if (!this.contains(item)) this.add(item);
			}
		} else {
			this.elements = [];
		}
	}
	isEmpty() {
		if (this.elements.length == 0) 
			return true;
		else
			return false;
	}
	clear() {
		this.elements = [];
	}
	values() {
		return [...this.elements];
	}
	contains(val) {
		for (let item of this.elements) {
			if (val == item || val === item) {
				return true;
			}
		}
		return false;
	}
	size() {
		return this.elements.length;
	}
	add(a) {
		if (!this.contains(a))
			this.elements[this.elements.length] = a;
	}
	remove(a) {
		if (this.contains(a))
			this.elements.splice(this.elements.indexOf(a), 1);
	}
	toString() {
		return "{" + this.elements.join(", ") + "}";
	}
	union(someSet) {
		let tempSet = new mySet(someSet);
		let result = new mySet(this.values());		
		for (let someItem of tempSet.values()) {
			if (!result.contains(someItem)) result.add(someItem);
		}
		return result;
	}
	intersection(someSet) {
		let tempSet = new mySet(someSet);
		let result = new mySet();		
		for (let someItem of tempSet.values()) {
			if (this.contains(someItem)) result.add(someItem);
		}
		return result;
	}
	difference(someSet) {
		let tempSet = new mySet(someSet);
		let result = new mySet(this.values());		
		for (let someItem of tempSet.values()) {
			if (this.contains(someItem)) result.remove(someItem);
		}
		return result;
	}
	symmetricDifference(someSet) {
		let tempSet = new mySet(someSet);
		let result = new mySet(this.values());
		for (let someItem of tempSet.values()) {
			if (this.contains(someItem)) 
				result.remove(someItem);
			else
				result.add(someItem);
		}
		return result;
	}
	equals(someSet) {
		let tempSet = new mySet(someSet);
		if (tempSet.size() != this.size())
			return false;
		for (let item of this.values()) {
			if (tempSet.contains(item)) tempSet.remove(item);
		}
		return tempSet.isEmpty();
	}
	isSubset(someSet) {
		let tempSet = new mySet(someSet);
		for (let item of this.values()) {
			if (!someSet.contains(item)) return false;
		}
		return true;
	}
	isSuperset(someSet) {
		let tempSet = new mySet(someSet);
		for (let item of tempSet.values()) {
			if (!this.contains(item)) return false;
		}
		return true;
	}
}