package StringManipulation;


public class Palindrome {

	public static void main(String[] args){ 
		
		String word = "HelloWorld";
		
		
		String reverse = new StringBuffer(word).reverse().toString();
		
		System.out.println(reverse);
		
		
		
		
		
		
	}
	
	public static String reverse(String word){
		
			if(word==null || word.isEmpty()){
				System.out.println("blank");
			}
		
	}
}
