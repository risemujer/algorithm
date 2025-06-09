// reverse() : JS 내장 배열 메서드로 쉽게 뒤집음
// slice() : 배열을 얕게 복사해서 원본을 손상하지 않게 처리

function solution(num_list) {
    return num_list.slice().reverse();
}