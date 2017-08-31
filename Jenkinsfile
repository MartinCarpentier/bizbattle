pipeline {
  agent {
    docker {
      image 'node:6'
    }
    
  }
  stages {
    stage('Initialize') {
      steps {
        sh '''echo PATH = ${PATH}
echo M2_HOME = ${M2_HOME}

yarn clean'''
      }
    }
    stage('Build') {
      steps {
        sh 'yarn install'
      }
    }
  }
}