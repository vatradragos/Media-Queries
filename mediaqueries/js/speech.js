var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();
var textbox = $("#input-name");
var instructions = $("#instructions");
var content = "";
recognition.continuous = true;

recognition.onstart = function() {

    instructions.text("Voice Recognition is On")
   
   }

recognition.onspeechend = function() {

    instructions.text("No Activity")
   
   }

recognition.onresult = function(event) {

    var current = event.resultIndex;
   
    var transcript = event.results[current][0].transcript;
   
   
   
    content += transcript;
   
    textbox.val(content);
   
   }

$("#start-btn").click(function(event) {

    recognition.start()
   
   })

textbox.on("input", function() {

    content = $(this).val()
   
   })