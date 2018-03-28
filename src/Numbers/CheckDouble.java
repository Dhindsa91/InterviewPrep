package Numbers;

import java.util.HashSet;
import java.util.Set;

public class CheckDouble {

    public static void main(String args[])  {
        
        String[] withDuplicates = new String[] {"one","two","three","one"};
         String[] withoutDuplicates = new String[] {"one","two","three"};
       
         System.out.println("Checking array with duplicate using brute force: " + bruteforce(withDuplicates));
         System.out.println("Checking array without any duplicate using brute force: " + bruteforce(withoutDuplicates));
         
         
         System.out.println("_________________________________________________________");
         
         System.out.println("Checking array with duplicate using Set and List: " + checkDuplicateUsingAdd(withDuplicates));
         System.out.println("Checking array without any duplicate using Set and List: " + checkDuplicateUsingAdd(withoutDuplicates));




	
}
    public static String bruteforce(String[] input) {
        for (int i = 0; i < input.length; i++) {
            for (int j = 0; j < input.length; j++) {
                if (input[i].equals(input[j]) && i != j) {
                    return input[i] + " " + input[j];
                }
            }
        }
		return "NO MATCHES";
       
    }

    
    
    
    //ONLY CHECKS IF IS OR IS NOT A DUPLICATE 
    public static boolean checkDuplicateUsingAdd(String[] input) {
        Set tempSet = new HashSet();
        for (String str : input) {
            if (!tempSet.add(str)) {
                return true;
            }
        }
        return false;
    }
    
    


}