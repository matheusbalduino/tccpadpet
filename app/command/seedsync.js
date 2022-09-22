const { Command } = require('@adonisjs/ace');
const util = require('util');
const execSync = util.promisify(require('child_process').execSync);


const defaultSeedOrder = [
  'UserSeeder.js',
  'ExpertiseSeeder.js'
];

class SeedSync extends Command {
  static get signature() {
    return `seed:sync
    {
      order? : Comma separated of seeds
    }`;
  }

  static get description() {
    return 'Seeds based on a list instead of running all seeds async.';
  }

  handle(args, options) {
    let seedOrder;

    if (args.order !== null) {
      seedOrder = args.order.split(/=(.+)/)[1].split(',');
    } else {
      seedOrder = defaultSeedOrder;
    }

    for (const seed of seedOrder) {
      this.success(`seed: ${seed}`);

      const exec = execSync(`adonis seed --files=${seed} --force`, { stdio: 'inherit' });
    }

    return;
  }
}

module.exports = SeedSync;
