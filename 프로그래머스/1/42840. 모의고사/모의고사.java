import java.util.*;

class Solution {
    public int[] solution(int[] answers) {
        ArrayList<Integer> arr = new ArrayList<>();
        int[] pattern1 = {1, 2, 3, 4, 5};
        int[] pattern2 = {2, 1, 2, 3, 2, 4, 2, 5};
        int[] pattern3 = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};
        
        int[] score = new int[3];
      
        for(int i=0; i<answers.length; i++){
            if(answers[i] == pattern1[i%pattern1.length]){
                score[0]++;
            }
            
             if(answers[i] == pattern2[i%pattern2.length]){
                score[1]++;
            }
            
             if(answers[i] == pattern3[i%pattern3.length]){
                score[2]++;
            }        
        }
        int max = Math.max(score[0], Math.max(score[1], score[2]));
        
        if(max == score[0]) arr.add(1);
        if(max == score[1]) arr.add(2);
        if(max == score[2]) arr.add(3);
        
        int[] answer = new int[arr.size()];
        for(int i=0; i<arr.size(); i++){
            answer[i] = arr.get(i);
        }
        
        return answer;
        
    }
}