/**
 * Created by peter on 14-8-23.
 */
console.log("child exed");
process.on('SIGTERM', function () {
    cleanUp();
    process.exit(0); });