const { createCanvas } = require('canvas')
const fs = require('fs')
const path = require('path')

function generateIcon(size) {
  const canvas = createCanvas(size, size)
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = '#0F1117'
  ctx.fillRect(0, 0, size, size)

  const radius = size * 0.15
  ctx.beginPath()
  ctx.moveTo(radius, 0)
  ctx.lineTo(size - radius, 0)
  ctx.quadraticCurveTo(size, 0, size, radius)
  ctx.lineTo(size, size - radius)
  ctx.quadraticCurveTo(size, size, size - radius, size)
  ctx.lineTo(radius, size)
  ctx.quadraticCurveTo(0, size, 0, size - radius)
  ctx.lineTo(0, radius)
  ctx.quadraticCurveTo(0, 0, radius, 0)
  ctx.closePath()
  ctx.fillStyle = '#1A1D2E'
  ctx.fill()

  ctx.fillStyle = '#E8D44D'
  ctx.font = `bold ${size * 0.55}px system-ui`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('T', size / 2, size / 2 + size * 0.02)

  return canvas.toBuffer('image/png')
}

fs.writeFileSync(path.join(__dirname, 'public/icons/icon-192.png'), generateIcon(192))
fs.writeFileSync(path.join(__dirname, 'public/icons/icon-512.png'), generateIcon(512))
console.log('Icons generated!')
