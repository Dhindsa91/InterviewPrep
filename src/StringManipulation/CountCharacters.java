package StringManipulation;

public class CountCharacters {

	public static void main(String args[]) {
        
        String input = "Today is Monday"; 
      
    
   
        int charCount = 0;
        for(int i =0 ; i<input.length(); i++){
            if(input.charAt(i) == 'a'){
                charCount++;
            }
        }
        System.out.println("coun" + charCount);
      
      
      
        charCount = 0;
        for(char ch: input.toCharArray()){
            if(ch == 'a'){
                charCount++;
            }
        }     
        System.out.println("Occurences: " + charCount);
    }
  
        
}





