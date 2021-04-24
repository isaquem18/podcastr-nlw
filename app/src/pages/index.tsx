import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import ptBR from 'date-fns/locale/pt-BR';
import convertDurationToTimeString from '../util/convertDurationToTimeString';

import Head from 'next/head'
import { Header } from '../components/Header'
import { api } from '../services/api';
import styles from './home.module.scss';

interface HomeProps {
  episodes: Array<{
    id: string,
    title: string,
    members: string,
  }>,
}

export default function Home(props: HomeProps) {

  return (
    <main className={styles.homepage}>
      <div>{JSON.stringify(props.episodes)}</div>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const episodes = data.map((episode) => {
    return {
      id: episode.id,
      title: episode.id,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      description: episode.description,
      url: episode.file.url,
    };
  })

  return {
    props: {
      episodes: episodes,
    },
    revalidate: 60 * 60 * 8,
  }
}
