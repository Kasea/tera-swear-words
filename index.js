module.exports = function SwearWords(dispatch) {
	for(let msg of ['S_CHAT', 'S_WHISPER', 'S_PRIVATE_CHAT', 'C_CHAT', 'C_WHISPER']) dispatch.hook(msg, 1, {order: 100}, unfilter);
}

function unfilter(event) {
	event.message = event.message.replace(/<FONT>(.*?)<\/FONT>/g, '<FONT></FONT>$1');
	return true;
}