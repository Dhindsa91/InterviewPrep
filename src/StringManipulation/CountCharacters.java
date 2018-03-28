package StringManipulation;

public class CountCharacters {

	public static void main(String args[]) {
        
		
        String input = "Today is Monday"; 
      
         int Occurences = 0;
        
        
        for(int i =0 ; i<input.length(); i++){
            if(input.charAt(i) == 'a'){
                Occurences++;
            }
        }
        System.out.println("Occurences: " + Occurences);
      
        char[] c = input.toCharArray();
        System.out.println();
  
        
       String num = "123";
       int strToNum = Integer.parseInt(num);
       System.out.println(strToNum-3);
       
       String num2 = "78";
       int strToNum2 = Integer.parseInt(num2);
       System.out.println(strToNum2/4+" "+strToNum2%4);
       
       
    }     
	
	
}





