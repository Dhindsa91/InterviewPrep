package Company;
import java.util.ArrayList;
import java.util.Collections;

public class Person<P> {

	ArrayList<P> people = new ArrayList();

	public Person(P p) {

		people.add(p);
		
		System.out.println(people.toString());

	}

	public static void main(String[] args) {

		Employee Bob = new Employee("Bob", 1, 10);
		Person c = new Person(Bob);

		Developer Tom = new Developer("Tom", 2, 20, 5, "hi");
		Person d = new Person(Tom);
		
		Employee Bill = new Employee("Bill", 2, 10);
		Person e = new Person(Bill);
		
		Person f = new Person("hello");
		
		Person g = new Person(5);
		

		Employee[]  emp = new Employee[2]; 
		
	     emp[0] = Bob;
	     emp[1] = Tom;
	     
//	     Collections.sort(emp);
	     
		
		
		
		
	}

}
