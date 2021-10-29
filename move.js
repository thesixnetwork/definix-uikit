/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */

const args = process.argv.slice(2);
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const { execSync } = require('child_process');

let envConfig;
try {
  const envFile = fs.readFileSync('.env.development.local');
  envConfig = dotenv.parse(envFile)
} catch (e) {
  console.error('.env.development.local not found or can\'t parsing.');
  process.exit(-1);
}


try {
  execSync(`npm run build && npm pack`, {
    stdio: 'inherit'
  });
} catch (e) {
  console.error('buile failed.');
  process.exit(-1);
}

const packFile = execSync('find *.tgz').toString();

if (args.length > 0 && args[0] === '-d') {
  execSync(`tar zxvf ${packFile}`);
  const unpackPath = path.resolve(__dirname, './package');
  
  try {
    Object.entries(envConfig).map(([, value]) => {
      if (value !== '') {
        const target = path.resolve(__dirname, value)
        execSync(`cp -rf ${unpackPath}/ ${target}/node_modules/definixswap-uikit`, {
          stdio: 'inherit'
        });
      }
      return '';
    })
  } catch (e) {
    console.error('uikit directly install failed.');
    process.exit(-1);
  } finally {
    execSync(`rm -rf ${unpackPath}`)
  }
  process.exit(0);
}

const packPath = path.resolve(__dirname, packFile);
try {
  Object.entries(envConfig).map(([, value]) => {
    if (value !== '') {
      const target = path.resolve(__dirname, value)
      try {
        execSync(`cd ${target} && yarn remove definixswap-uikit`, {
          stdio: 'inherit'
        })
      } catch (e) {
        console.warn('definixswap-uikit not found.');
      }
      execSync(`cd ${target} && yarn cache clean && yarn add ${path.relative(value, packPath)}`, {
        stdio: 'inherit'
      });
    }
    return '';
  })
} catch (e) {
  console.error('uikit install failed.');
  process.exit(-1);
} finally {
  execSync(`rm ${packPath}`)
}

