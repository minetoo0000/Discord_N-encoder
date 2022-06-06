let input_text = document.querySelector("#inputText");  // 디코더 입력칸 선택자
let output_text = document.querySelector("#outputText");  // 디코더 출력 선택자
let encode_button = document.querySelector("#encodeButton");
/*위 3개의 선택자들은 아직 해당하는 DOM이 로드되지 않았기 때문에 3개 각각에 null이 들어간다*/



addEventListener("DOMContentLoaded", function() {    
    input_text = document.querySelector("#inputText");  // 디코더 입력칸 선택자
    output_text = document.querySelector("#outputText");  // 디코더 출력 선택자
    encode_button = document.querySelector("#encodeButton");
    /*DOM이 모두 로드되고 난 후 다시 선택자를 선택한다. 여기에선 정상적으로 원하는 쿼리가 선택된다.*/
    
    console.log(`뷰페이지 로드 완료 및 선택자 덮어쓰기 완료.`);
    
    encodeText();
    encode_button.addEventListener("click", function() {encodeText();});
    input_text.addEventListener("keypress", function() {encodeText();});
    input_text.addEventListener("keyup", function() {encodeText();});
});


function encodeText() {
    if (input_text.value != "") {
        let result_text = "||" + (input_text.value.split("").join("||||")) + "||";
        output_text.value = result_text;
    } else output_text.value = "";
}