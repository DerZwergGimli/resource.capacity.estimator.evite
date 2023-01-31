import { jsPDF } from 'jspdf'

export function addPageNumbers(doc: jsPDF) {
  const pageCount = doc.getNumberOfPages()
  for (let i = 0; i < pageCount; i++) {
    doc.setPage(i)
    const pageCurrent = doc.getCurrentPageInfo().pageNumber
    doc.setFontSize(10)
    doc.text(
      pageCurrent.toString(),
      doc.internal.pageSize.width - 10,
      doc.internal.pageSize.height - 5
    )
  }
}
