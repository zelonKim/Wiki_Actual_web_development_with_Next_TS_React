import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import {ServerStyleSheet} from 'styled-components'

// 기본 Document를 MyDocument로 덮어씀.
export default class MyDocument extends Document {

  static async getInitialProps(ctx: DocumentContext) { // 도큐먼트를 초기화함.
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => 
        originalRenderPage({
          enhanceApp: (App) => (props) => 
            sheet.collectStyles(<App {...props} />),
        })

        const initialProps = await Document.getInitialProps(ctx)

        return {
          ...initialProps,
          styles: [
            initialProps.styles,
            sheet.getStyleElement()
          ],
        }
    } finally {
      sheet.seal()
    }
  }
}
