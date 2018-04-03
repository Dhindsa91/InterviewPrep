package StringManipulation;

public class RecursiveStr {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		String str = "Hello World";
		

		  String reverseStr = reverseRecursively(str);
	      System.out.println("Reverse String in Java using Recursion: " + reverseStr);
		
	      MinusOne(6);
		
		System.out.println(str.substring(1));
		System.out.println(str.charAt(1));
	}
	
	
	public static int MinusOne(int num){
		
		if(num==0){
			
			return num;
		}
		System.out.println(num);
		
		return MinusOne(num-1);
		

		
	}
	public static long factorial(int n) { 
	    if (n == 1) return 1; 
	    return n * factorial(n-1); 
	} 
	

      public static String reverseRecursively(String str) {

          //base case to handle one char string and empty string
          if (str.length() < 2) {
              return str;
          }

         
          return reverseRecursively(str.substring(1)) + str.charAt(0);

      }



}
