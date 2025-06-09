// split : 문자열을 문자 배열로 바꿈 
// => split은 문자열만 사용 가능, 
// => 스프레드 문법 : 문자열,배열,Set 모두 가능 & 유니코드 지원 
// reverse : 배열을 뒤집음
// join : 다시 문자열로 결합

function solution(my_string) {
    //return my_string.split('').reverse().join('');
    return [...my_string].reverse().join('');
}