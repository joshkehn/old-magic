console.log('Old Magic');

exports.hello = function hello (name) {
    if (name) {
        console.log('Hello %s', name);
    } else {
        console.log('Hello ale_');
    }
}
