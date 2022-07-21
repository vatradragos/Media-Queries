navigator.mediaDevices.getUserMedia({audio:true}).then(() => {
    const SR  = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recog = new SR();
    recog.onresult = (evt) => {
        let said = evt.results[0][0].transcript.toLowerCase();
        if(cmd[said]) {cmd[said]();}
        recog.stop();
    };
    recog.start();
});