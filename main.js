const Form = document.getElementById("formSearch");
const Input = document.querySelector("input");

// Access Speech Recognition Interface
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

if(SpeechRecognition){
    Form.insertAdjacentHTML("beforeend",'<button class="send" type="button"><i class="fas fa-microphone"></i></button>');
    Form.insertAdjacentHTML("beforeend",'<button type="button" id="reset"><i class="fas fa-sync-alt"></i></</button>');
    const micBtn = Form.querySelector("button");
    const micIcon = micBtn.querySelector("i");
    const Reset = document.getElementById("reset").querySelector("i")
    // Declare an instance of speech recognition
    const recognition = new SpeechRecognition();
    recognition.continuous

    micBtn.addEventListener("click", micBtnClick);
    function micBtnClick(){
        if(micIcon.classList.contains("fa-microphone")){
            recognition.start()   
        }else{
            recognition.stop()
        }
    }

    recognition.onstart = function(){
        micIcon.classList.remove("fa-microphone");
        micIcon.classList.add("fa-microphone-slash");
        console.log("started");
        Input.focus()
        
    }

    recognition.onend = function(){
        micIcon.classList.remove("fa-microphone-slash");
        micIcon.classList.add("fa-microphone");
        console.log("stopped");
        Input.focus()
    }

     recognition.addEventListener("result", getResult);
     function getResult(res){
        console.log(res);
        const currentIndex = res.resultIndex;
        const Transcript = res.results[currentIndex][0].transcript;
        Input.value = Transcript
        setTimeout(Submit, "5500");
        function Submit(){
            Form.submit()
        }
     }
     Reset.addEventListener("click", ()=>{
        Input.value = " "
    
     })
}else{
    alert("Speech Synthesis not suported by Browser, check other browsers")
}