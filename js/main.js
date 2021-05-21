function handleFileSelectSingle(evt) {
    var file = evt.target.files;

    var f = file[0]

        if (!f.type.match('image.*')) {
        alert("Только изображения....");
        }

        var reader = new FileReader();

        reader.onload = (function(theFile) {
        return function(e) {
            var span = document.createElement('span');
            span.innerHTML = ['<img class="img-thumbnail" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
            document.getElementById('output').innerHTML = "";
            document.getElementById('output').insertBefore(span, null);
        };
        })(f);

        reader.readAsDataURL(f);
    }

document.getElementById('file').addEventListener('change', handleFileSelectSingle, false);