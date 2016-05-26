require("babel-polyfill");
var spawn = require('child_process').spawn

exports.handler = async function(event, context) {
    var dest = '';
    var ffmpeg = spawn('ffmpeg', ['--version']);

    ffmpeg.stdout.on('data', (data) => {
      dest = data;
    });

    ffmpeg.stderr.on('data', (data) => {
      dest = data;
    });

    ffmpeg.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code == 0) {
          context.succeed(dest);  // Echo back the first key value
        } else {
          context.succeed(dest);  // Echo back the first key value
        }
    });

    // //console.log('Received event:', JSON.stringify(event, null, 2));
    // console.log('value1 =', event.key1);
    // console.log('value2 =', event.key2);
    // console.log('value3 =', event.key3);
    // // context.fail('Something went wrong');
};
