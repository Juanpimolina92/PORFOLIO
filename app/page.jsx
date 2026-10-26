import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import PortfolioRuntime from './portfolio-runtime';

export default async function Page() {
  // Local, trusted HTML is the shared editorial source for both delivery formats.
  // This keeps existing demos, copy and dialogs in sync during the Next migration.
  const source = await readFile(join(process.cwd(), 'index.html'), 'utf8');
  const body = source.match(/<body>([\s\S]*?)<\/body>/i)?.[1];
  if (!body) throw new Error('No se encontró el contenido del portfolio.');
  return <>
    <div id="portfolio-content" dangerouslySetInnerHTML={{ __html: body }} />
    <PortfolioRuntime />
  </>;
}
