var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    config = require('../config'),
    chalk = require('chalk'),
    PushBullet = require('pushbullet');


var connection = {};


/**
 * Run the build task and start a server with BrowserSync
 */
gulp.task('browsersync', function() {
  // Serve files and connect browsers
  browserSync(null, {
    server: {
      baseDir: config.destPath
    },
    logConnections: false,
    debugInfo: false,
    open: true
  }, function (err, data) {

    if (err !== null) {
      console.log(
          chalk.red('✘  Setting up a local server failed... Please try again. Aborting.\n') +
          chalk.red(err)
      );
      process.exit(0);
    }

    // Store started state globally
    connection.external = data.options.external;
    connection.port = data.options.port;
    config.server.lrStarted = true;


    if(config.pushbullet.enabled){
      var pusher = new PushBullet('rBXwIUuQRJkcgOZ1OkWgPAqBKTWMFEHu');
      for(var i=0; i<config.pushbullet.user.length; i++){
        pusher.link(config.pushbullet.user[i].email, 'Web Starter Kit', connection.external+':'+connection.port, function(error, response) {
          if(err){
            console.log(chalk.red('✘  Error pushing to devices! '+ err));
          }
          else{
            console.log(chalk.green('Successful pushing to '+response.receiver_email_normalized+'!'));
          }

        });
      }
    }
    else{
      console.log(chalk.green('Pushbullet disabled!'));
    }




  });
});



