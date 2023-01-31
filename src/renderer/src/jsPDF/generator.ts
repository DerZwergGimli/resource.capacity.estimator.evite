import {
  draw_AssignmentPage,
  draw_CoverSheet,
  draw_HostListPage,
  draw_VMListPage
} from './drawPages'
import { addPageNumbers } from './helperJSPDF'
import { jsPDF } from 'jspdf'

export async function generatePDF_FULL(doc: jsPDF): Promise<void> {
  draw_CoverSheet(doc)
  doc.addPage()

  draw_HostListPage(doc)
  doc.addPage()

  draw_VMListPage(doc)
  doc.addPage()

  draw_AssignmentPage(doc, true)

  //doc.addPage()
  //draw_CodePage(doc)

  addPageNumbers(doc)
  return
}

export async function generatePDF_SIMPLE(doc: jsPDF): Promise<void> {
  draw_CoverSheet(doc)
  doc.addPage()

  draw_AssignmentPage(doc, false)

  addPageNumbers(doc)
  return
}
