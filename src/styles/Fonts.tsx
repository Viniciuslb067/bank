import { css, Global } from '@emotion/react';

const globalFonts = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;1,400&display=swap');
`;

export const Fonts = () => <Global styles={globalFonts} />;
