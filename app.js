var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://52.43.93.158', {
	host: '52.43.93.158',
	port: 1883,
	username: 'brad',
	password: '#########'
})

client.on('connect', function (connack) {
	client.subscribe('topic/#');

	setInterval(function() {
		client.publish('topic/'+getRandomInt(0, 10) +'/' + getRandomInt(100, 1000), 'This is the message!');
	}, 5000);
})

client.on('message', function (topic, message) {
	// message is Buffer
	console.log(topic, message.toString())
	// client.end()
})

client.on('offline', function() {
	console.log('offline!!!');
});

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
