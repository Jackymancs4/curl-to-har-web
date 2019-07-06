var curlToHar = require('curl-to-har');

window.onload = function () {
    var $ = function (id) {
        return document.getElementById(id);
    };

    $('beautifycheckbox').onchange = function () {
        let out = $('curltext');
        let text = JSON.parse(out.value)

        if ($('beautifycheckbox').checked) {
            out.value = JSON.stringify(text, null, 4);
        } else {
            out.value = JSON.stringify(text);
        }

    }

    $('hartext').onchange = function () {
        var out, result, harText = $('hartext').value;

        if (!harText) {
            return;
        }

        out = $('curltext');
        try {
            result = curlToHar(harText);
        } catch (e) {
            out.value = 'Error parsing HAR: ' + e.message + '.';
            if (e.stack) {
                out.value += '\n\n' + e.stack;
            }

            return;
        }

        if (Array.isArray(result)) {
            result.forEach(function (command, i) {
                if (!command) {
                    command = 'Unable to parse at index ' + i + '.';
                }

                if (i > 0) {
                    out.value += '\n\n' + JSON.stringify(command);
                } else {
                    out.value = JSON.stringify(command);
                }
            });
        } else {
            out.value = JSON.stringify(result);
        }
    };
};
