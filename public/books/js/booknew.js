    //prevent clicking on submit if not all fields are filled
    function disableMissingForm() {
        let d = document, [inputs, button] = [
            d.querySelectorAll('input[type="text"], input[type="date"], \
	                        input[type="file"], input[type="textarea"], \
				input[type="number"], select'),
            d.querySelector('#submit_button')
        ]

        // per ogni evento di ogni input ricontrolla la presenza dei dati nei campi.
        // in caso negativo "submit" è disabilitato.
        button.disabled = true;
        /*
        for (i = 0; i < inputs.length; i++) {
            function addMultipleEventListener(el, events_list)
            {
                events_list.split(" ").forEach(function(ev) {
                    el.addEventListener(ev, function() {
                        let values = []
                        inputs.forEach(v => values.push(v.value))
                        //inputs.forEach(v => console.log(v.value))
                        button.disabled = values.includes('')
                    })
                })
            }
            addMultipleEventListener(inputs[i], "input change keypress focusout")
        }
        */
       
        inputs.forEach(el0 => {
            function addMultipleEventListener(el, events_list) {
                events_list.split(" ").forEach(function(ev) {
                    el.addEventListener(ev, function() {
                        let values = []
                        inputs.forEach(v => values.push(v.value))
                        //inputs.forEach(v => console.log(v.value))
                        button.disabled = values.includes('')
                    })
                })
            }
            addMultipleEventListener(el0, "input change keypress focusout")
        })        
        /*
        for (i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('input', () => {
                let values = []
                inputs.forEach(v => values.push(v.value))
                inputs.forEach(v => console.log(v.value))
                button.disabled = values.includes('')
            })
        }
         */
    }
    disableMissingForm()

