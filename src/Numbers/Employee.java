package Numbers;
//Written by Arvind Dhindsa

public class Employee implements Comparable {

	int credit = 1000;
	String name;
	int id;
	int salary;

	Employee(String name, int id, int salary) {

		this.name = name;
		;
		this.id = id;
		this.salary = salary;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getSalary() {
		return salary;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}

	public int compareTo(Object o) {

		Employee e = (Employee) o;

		if (getId() < e.getId()) {
			return -1;

		} else if (getId() > e.getId()) {
			return 1;
		} else
			return 0;

	}

	public String toString() {

		return "Employee [name=" + name + ", id=" + id + ", salary=" + salary + "]";
	}

}
