class Solution {
    public int solution(String myString, String pat) {
        // 둘다 소문자로 바꾸고 시작
        myString = myString.toLowerCase();
        pat = pat.toLowerCase();
        
        if(myString.contains(pat)){
            return 1;
        } else{
            return 0;
        }

    }
}