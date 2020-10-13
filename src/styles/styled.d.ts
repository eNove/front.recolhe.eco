import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    //eslint-disable-line
    title: string

    colors: {
      background: string
      inputBackground: string
      footer: string
      text: string
      title: string
      placeholder: string
    }
  }
}
