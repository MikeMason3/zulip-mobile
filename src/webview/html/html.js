/* @flow strict-local */
import template from './template';
import type { Auth, ThemeType } from '../../types';
import css from '../css/css';
import htmlBody from './htmlBody';
import script from '../js/script';

type InitOptionsType = {
  anchor: number,
  auth: Auth,
  highlightUnreadMessages: boolean,
  showMessagePlaceholders: boolean,
};

export default (content: string, theme: ThemeType, initOptions: InitOptionsType) => template`
$!${script(initOptions.anchor, initOptions.auth)}
$!${css(theme, initOptions.highlightUnreadMessages)}

<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<body style="overflow-x: hidden;">
$!${htmlBody(content, initOptions.showMessagePlaceholders)}
</body>
`;
