import { FC } from "react";
import Link from "next/link";
import { useLanguageQuery, useTranslation } from 'next-export-i18n';

export const DropDownMenuFilm: FC = () => {
  const { t } = useTranslation();

  return (
    <ul>
      <li key='Новинки'>
        <Link href={'https://www.ivi.ru/new/movie-new'}>{t('contextSubMenu.new')}</Link>
      </li>
      <li key='Подборки'>
        <Link href={'https://www.ivi.ru/collections'}>{t('contextSubMenu.collections')}</Link>
      </li>
      <li key='Иви.Рейтинг'>
        <Link href={'https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready'}>{t('contextSubMenu.ivi_rating')}</Link>
      </li>
      <li key='Скоро на Иви'>
        <Link href={'https://www.ivi.ru/new/soon-ivi'}>{t('contextSubMenu.soon')}</Link>
      </li>
      <li key='Трейлеры'>
        <Link href={'https://www.ivi.ru/trailers'}>{t('contextSubMenu.trailers')}</Link>
      </li>
      <li key='Что посмотреть'>
        <Link href={'https://www.ivi.ru/goodmovies'}>{t('contextSubMenu.what_to_see')}</Link>
      </li>
      <li key='Фильмы в HD'>
        <Link href={'https://www.ivi.ru/collections/movies-hd'}>{t('contextSubMenu.movies_HD')}</Link>
      </li>
      <li key='Выбор Иви'>
        <Link href={'https://www.ivi.ru/collections/vyibor-ivi'}>{t('contextSubMenu.ivi_choice')}</Link>
      </li>
      <li key='Новинки подписки'>
        <Link href={'https://www.ivi.ru/collections/very-new-svod?sort=priority_in_collection'}>{t('contextSubMenu.subscription_news')}</Link>
      </li>
      <li key='Фильмы Amediateka'>
        <Link href={'https://www.ivi.ru/collections/filmyi-amediateka'}>{t('contextSubMenu.movies_Amediateka')}</Link>
      </li>
      <li key='Популярные фильмы'>
        <Link href={'https://www.ivi.ru/collections/best-movies'}>{t('contextSubMenu.popular_films')}</Link>
      </li>
      <li key='Фильмы Иви'>
        <Link href={'https://www.ivi.ru/collections/ivi-originals'}>{t('contextSubMenu.ivi_movies')}</Link>
      </li>
    </ul>
  );
};