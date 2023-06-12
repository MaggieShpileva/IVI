import { FC } from "react";
import Link from "next/link";
import { useLanguageQuery, useTranslation } from 'next-export-i18n';

export const DropDownMenuSerial: FC = () => {
  const { t } = useTranslation();
  return (
    <ul>
      <li key='Новинки'>
        <Link href={'https://www.ivi.ru/new/series-new'}>{t('contextSubMenu.new')}</Link>
      </li>
      <li key='Иви.Рейтинг'>
        <Link href={'https://www.ivi.ru/series/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready'}>{t('contextSubMenu.ivi_rating')}</Link>
      </li>
      <li key='Сериалы в HD'>
        <Link href={'https://www.ivi.ru/collections/series-hd'}>{t('contextSubMenu.series_HD')}</Link>
      </li>
      <li key='Бесплатные сериалы'>
        <Link href={'https://www.ivi.ru/collections/tvshow-free?sort=new'}>{t('contextSubMenu.free_series')}</Link>
      </li>
      <li key='Сериалы Amediateka'>
        <Link href={'https://www.ivi.ru/collections/serialyi-amediateka'}>{t('contextSubMenu.series_Amediateka')}</Link>
      </li>
      <li key='Сериалы Paramount PlayЧто посмотреть'>
        <Link href={'https://www.ivi.ru/collections/series-paramount-play'}>{t('contextSubMenu.series_Paramount_Play')}</Link>
      </li>
    </ul>
  );
};