

module.exports = function(RED) {
    function anydo(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
			const anydo = require('newrelic')

			const options = {
			  email: 'sebastien.mathieu.82@gmail.com',
			  password: '4xbdk6naAE'
			}
			anydo(options, (err, result) => {
			  if (err) throw err
			  
			  // get the titles of all your tasks
			  msg.payload = result.models.task.items
			  node.send(msg);
			})
            
        });
    }
    RED.nodes.registerType("newrelic",anydo);
}