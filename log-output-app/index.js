const outputHash = () => {
    const timestamp = new Date()

    const hash = Math.random().toString(30).slice(2)
  
    console.log(timestamp.toISOString() + ": " + hash)
  
    setTimeout(outputHash, 5000)
  }


outputHash()