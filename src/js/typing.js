class typing {
    // Conduct textWriting animation with caret which common text editor has.
    textWritingAnimation(target, text) {
        console.log('Hello');
        var textField = document.querySelector(target);

        // Create text element and carot.
        textField.appendChild(document.createTextNode(''));
        textField.appendChild(document.createTextNode(''));

        console.log(target);
        console.log(text);
        
        // About writing animation.
        var writePos = textField.firstChild;
        wirteOnElement(writePos, text);

        // About caret animation. 
        var caretPos = caretField.lastChild;
        caretOn(caretPos);

        // Conduct a writing animation
        async function wirteOnElement(writePos, text) {
            // Iterate every word in textList to write
            for (var i = 0; i < text.length; i++) {
                if (text[i] === ' ' && Math.random() * 5 < 1) {
                    var waitOnSpace = Math.random() * 500 + 500;
                    await writeText(writePos, text[i], waitOnSpace);
                }
                else {
                    await writeText(writePos, text[i], 40);
                }
            }
        }

        // Actual writing function with an interval.
        function writeText(writePos, text, ms) {
            return new Promise(function(resolve) {
                window.setTimeout(function() {
                    writePos.appendData(text);
                    resolve();
                }, ms);
            });
        }

        // Conduct a caret animation
        function caretOn(caretPos) {
            return new Promise(function(resolve) {
                window.setInterval(function() {
                    if (caretPos.length === 0) {
                        caretPos.appendData('_');
                    } else {
                        caretPos.deleteData(0, 1);
                    }
                    resolve();
                }, 500);
            });
        }
    }
}