import path from 'path';
import fs from 'fs';
import { spawn } from 'child_process';
import { md5 } from "./utils/md5";
import { DIR } from './constants/directories';
import { generate } from './gpt';

const createScript = async (description: string, savePath: string) => {
  const scriptContent = await generate(description);

  if (scriptContent === null) {
    throw new Error('Could not generate script');
  }

  fs.writeFileSync(savePath, scriptContent);
};

const executeScript = (scriptPath: string) => {
  const [_bin, _script, ...args] = process.argv;
  const runner = spawn('sh', [scriptPath, ...args], { stdio: 'inherit' });

  runner.on('exit', code => {
    process.exit(code ?? 0);
  });
};

export const script = (description: string) => {
  const hash = md5(description);
  const entryDirectory = path.dirname(require.main?.filename ?? __dirname);
  const saveDir = path.join(entryDirectory, DIR);
  const savePath = path.join(saveDir, hash);

  if (!fs.existsSync(saveDir)) {
    fs.mkdirSync(saveDir);
  }

  if (fs.existsSync(savePath)) {
    executeScript(savePath);
    return;
  }

  createScript(description, savePath).then(() => {
    executeScript(savePath);
  });
};
