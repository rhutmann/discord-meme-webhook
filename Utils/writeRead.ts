import fs from 'fs/promises';
import path from 'path';

const file =
  process.env.NODE_ENV !== 'production'
    ? path.join(process.cwd(), '/webhooks/data.json')
    : path.join('/temp', 'hook.json');

export async function getWebHook() {
  const files = await fs.readdir(path.join('/temp', 'hook.json'));
  for (const file1 of files) console.log(file1, 'filess');

  // const rawFileContent = await fs.readFile(file, { encoding: 'utf-8' });
  // const data = JSON.parse(rawFileContent);

  // const hookURLS = data.webhooks ?? [];
  // return hookURLS;
  return [];
}

export function storeHooks(webhooks: any) {
  return fs.writeFile(file, JSON.stringify({ webhooks: webhooks || [] }));
}
