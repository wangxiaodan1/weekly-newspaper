/**
 * Created by leiyouwho on 6/16/16.
 */

import Brief from './components/Brief/Brief';
import Image from './components/Image/Image';
import Link from './components/Link/Link';
import Title from './components/Title/Title';

export default (componentName) => {
  switch (componentName) {
    case 'Brief':
      return Brief;
    case 'Image':
      return Image;
    case 'Link':
      return Link;
    case 'Title':
      return Title;
    default:
      return new Error('invalid component');
  }
};
