require("babel-polyfill");
require('shelljs/global');
var spawn = require('child_process').spawn

process.env['PATH'] = process.env['PATH'] + ':/tmp/:' + process.env['LAMBDA_TASK_ROOT']

exports.handler = async function(event, context) {
  exec('ffmpeg --version', function(code, stdout, stderr) {
    console.log('Exit code:', code);
    console.log('Program output:', stdout);
    console.log('Program stderr:', stderr);
    context.succeed('done');  // Echo back the first key value

  });
};
