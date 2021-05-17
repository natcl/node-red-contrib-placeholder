module.exports = function (RED) {
  function Placeholder (config) {
    RED.nodes.createNode(this, config)
    const node = this
    node.on('input', function (msg, send, done) {
      send = send || function () { node.send.apply(node, arguments) }
      msg.payload = msg.payload.toLowerCase()

      send(msg)
      if (done) done()
    })
  }
  RED.nodes.registerType('placeholder', Placeholder)
}
