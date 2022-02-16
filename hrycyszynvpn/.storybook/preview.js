import { NymMixnetTheme } from '../src/theme';
import { ClientContextProvider } from '../src/context/main';
import { Fonts } from './preview-fonts';

const withThemeProvider= (Story, context) =>{
  return (
    <Fonts>
      <NymMixnetTheme>
        <ClientContextProvider>
          <Story {...context} />
        </ClientContextProvider>
      </NymMixnetTheme>
    </Fonts>
  )
}
export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}