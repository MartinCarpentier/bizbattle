pipeline {
  agent {
    dockerfile {
      filename 'dockerfile'
    }
    
  }
  stages {
    stage('Build docker file') {
      steps {
        sh 'Docker build -t . ymer123/bizbattle:latest'
      }
    }
  }
}