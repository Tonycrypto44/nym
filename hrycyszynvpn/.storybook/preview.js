import { NymMixnetTheme } from '../src/theme';
import { ClientContextProvider } from '../src/context/main';

const withThemeProvider= (Story, context) =>{
  return (
    <NymMixnetTheme>
      <ClientContextProvider>
        <Story {...context} />
      </ClientContextProvider>
    </NymMixnetTheme>
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