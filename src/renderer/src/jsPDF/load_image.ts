import { jsPDF } from 'jspdf'
export function draw_image(doc: jsPDF): void {
  const image = new Image()
  image.src = '../../public/logo.png'
  const image_height = 50
  const image_width = 60
  doc.addImage(
    image,
    'png',
    (doc.internal.pageSize.getWidth() - image_width) / 2,
    (doc.internal.pageSize.getHeight() - image_height) / 2,
    image_width,
    image_height
  )

  return
}
