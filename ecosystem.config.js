module.exports = {
    apps: [{
        name: 'tutorial-2',
        script: './index.js'
    }],
    deploy: {
        production: {
        user: 'ubuntu',
        host: 'ec2-18-188-224-244.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/robTest.pem',
        ref: 'origin/master',
        repo: 'git@github.com:roberttod/tutorial-pt-2.git', 
        path: '/home/ubuntu/tutorial-pt-2',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
}