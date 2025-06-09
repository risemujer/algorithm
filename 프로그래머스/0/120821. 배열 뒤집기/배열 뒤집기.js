function solution(num_list) {
    let reverse_list = [];
    const idx = num_list.length - 1;
    
    for(i=idx ; i >= 0 ; i--) {
        reverse_list.push(num_list[i])
    }
    
    return reverse_list;
}