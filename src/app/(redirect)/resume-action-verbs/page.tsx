import { redirect } from 'next/navigation';

export default async function Home() {
  redirect('/resume/action-verbs');
}