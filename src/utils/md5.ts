import crypto from 'crypto';

export const md5 = (str: string): string => {
  const hash = crypto.createHash('md5');
  hash.update(str);
  return hash.digest('hex');
};
