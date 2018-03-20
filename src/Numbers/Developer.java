package Numbers;
//Written by Arvind Dhindsa

public class Developer extends Employee{
	
	int age;
	String department;

	Developer(String name, int id, int salary, int age, String department) {
		super(name, id, salary);
		this.age=age;
		this.department = department;
		
		
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	@Override
	public String toString() {
		return super.toString() + "Developer [age=" + age + ", department=" + department + "]";
	}


	
	
}
