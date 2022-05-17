const util = require('util');
const exec = util.promisify(require('child_process').exec);
const path = require('path');

async function main(){
const filename = process.argv[2];

await myExec(`node parse.js ${filename}`);
await myExec(`node generate.js ${filename}.ast`);
const jsFilename = path.basename(filename, '.smplr') + '.js';

await myExec(`node ${jsFilename}`);

}

async function myExec(command)
{
    const results = await exec(command);
    process.stdout.write(results.stdout);
    process.stdout.write(results.stderr);
}

main().catch(err=> console.log(err.message));
