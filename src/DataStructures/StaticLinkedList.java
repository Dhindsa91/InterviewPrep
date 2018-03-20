package DataStructures;

public class StaticLinkedList {
	
	Node head;
	
	public StaticLinkedList() {
		
	
		head = null;
	
	}
    public void addFirst(int data){
    	
    	Node n = new Node(data);
    	
    	n.next = head;
    	
    	head = n;
    }
    
    public void display(){
    	
    	
    	System.out.println(head.data);
    	
    }

    
    public static void main(String[] args){
    	
    	StaticLinkedList list = new StaticLinkedList();
    	
    	list.addFirst(5);
    	list.display();
    	list.addFirst(7);
    	list.display();
    	
    	System.out.println(list.head.next.data);
    	 	
    }
	
	
}


