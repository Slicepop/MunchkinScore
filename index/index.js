const ably = new Ably.Realtime("TGKJ4Q.jWjiiQ:v95PiPO-mxSjusDRiT12_8NNLCI8qqkqAmwVhzjV74Q");

// Get the channel to publish and subscribe to
const channel = ably.channels.get('chan1');

// Function to publish a message
async function publish() {
  const text = document.getElementById("message").value;
  await channel.publish('PlayerName', text);
}

// Subscribe to messages on the channel
channel.subscribe('PlayerName', (message) => {
  const playerNameElement = document.querySelector(".playerName");
  if (playerNameElement) {
    playerNameElement.innerHTML = message.data;
  }
});
