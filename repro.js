const { Worker, parentPort } = require('worker_threads');

if (parentPort) {
  console.log('In worker');
  const PosixMQ = require('posix-mq');
  const mq = new PosixMQ();
  try {
    mq.open({
      name: '/test-mq',
      mode: '0700',
      create: true,
      exclusive: true,
    });
    mq.unlink();
  } catch (error) {
    console.error(error);
  }
} else {
  // main
  const worker = new Worker(__filename);
}
