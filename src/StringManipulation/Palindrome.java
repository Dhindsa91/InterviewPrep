package StringManipulation;


public class Palindrome {

	public static void main(String[] args){ 
		
		String word = "HelloWorld";
		
		
		String reverse = new StringBuffer(word).reverse().toString();
		
		System.out.println(reverse);
		
		System.out.println(word.length());
		
		
		for(int i=word.length()-1;i>=0;i--){
			char holder;
			holder = word.charAt(i);
			System.out.println(holder);
			
		}
		
	}

	
//	public static String reverse(String word){
//		
//			if(word==null || word.isEmpty()){
//				System.out.println("blank");
//				
//			}
//			
//			for(i=0)
//		
//	}
}
