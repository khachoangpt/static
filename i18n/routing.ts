import {defineRouting} from 'next-intl/routing';
import { locales } from './request';

export const routing = defineRouting({
  localePrefix: 'never',
  defaultLocale: 'en',
  locales: locales,
});