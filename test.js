const path = require('path');
const spawnSync = require('child_process').spawnSync;

it('should work with direct invocation of hello', () => {
    const result = spawnSync('./bin/hello');

    expect(result.error).toBeFalsy();
    expect(result.status).toBe(0);
    expect(result.stdout.toString().trim()).toBe('Hello');
});

it('should work if hello dirname is in $PATH', () => {
    // TODO: reset process.env.PATH on afterEach()
    process.env.PATH = `${__dirname}/bin` + path.delimiter + process.env.PATH;

    const result = spawnSync('hello');

    expect(result.error).toBeFalsy();
    expect(result.status).toBe(0);
    expect(result.stdout.toString().trim()).toBe('Hello');
});
