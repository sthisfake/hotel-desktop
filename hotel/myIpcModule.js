module.exports = {
    handleMyEvent(event, arg) {
      console.log('my-event received:', arg);
      event.sender.send('my-event-response', 'This is a response from the main process.');
    },
  };
  