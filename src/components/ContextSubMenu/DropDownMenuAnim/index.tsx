import { FC } from "react";
import Link from "next/link";
import { useLanguageQuery, useTranslation } from 'next-export-i18n';

export const DropDownMenuAnim: FC = () => {
  const { t } = useTranslation();

  return (
    <ul>
      <li key='Новинки'>
        <Link href={'https://www.ivi.ru/new/animation-new'}>{t('contextSubMenu.new')}</Link>
      </li>
      <li key='Мультики в HD'>
        <Link href={'https://www.ivi.ru/collections/cartoons-hd'}>{t('contextSubMenu.animations_HD')}</Link>
      </li>
      <li key='Мультфильмы Paramount Play'>
        <Link href={'https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready'}>{t('contextSubMenu.animations_Paramount_Play')}<br />Nickelodeon</Link>
      </li>
      <li key='Мультфильмы Dreamworks'>
        <Link href={'hhttps://www.ivi.ru/collections/dreamworks-cartoons'}>{t('contextSubMenu.animations_Dreamworks')}</Link>
      </li>
      <li key='Мультфильмы СТС Kids'>
        <Link href={'https://www.ivi.ru/collections/ctc-kids'}>{t('contextSubMenu.animations_СТС_Kids')}</Link>
      </li>
    </ul>
  );
};