import java.util.*;
class Anagramornot
{
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        String s, s1;
        s = sc.next();
        s1 = sc.next();
        if (s.length() != s1.length()) {
            System.out.println("NO");
            return;
        }
        char[] a=s.toLowerCase().toCharArray();
        Arrays.sort(a);
        String s2=new String(a);
        char[] b=s1.toLowerCase().toCharArray();
        Arrays.sort(b);
        String s3=new String(b);
        if(s2.equals(s3))
        {
            System.out.println("YES");
        }
        else {
            System.out.println("NO");
        }
    }

}