import Resume from './resume.js'
// @ts-expect-error `?inline` query
import css from './style.css?inline'
// @ts-expect-error `?inline` query
import js from './script.js?raw'

export const pdfRenderOptions = { mediaType: 'print' }

/**
 * @param {import('./schema.d.ts').ResumeSchema} resume
 * @returns {string}
 */
export const render = resume => {
  return Resume(resume, { css, js })
}
