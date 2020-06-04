pipeline {
  agent {
    docker {
      image 'node:12-alpine'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh '''node -v
ls -la
cat package.json
npm -v
npm install'''
      }
    }

  }
}