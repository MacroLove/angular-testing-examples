pipeline {
  agent {
    label 'master'
  }
  
  tools {
      nodejs 'nodejs'
  }
  
  stages {
    stage('Test') {
      steps {
        script {
          sh "npm ci"
          sh "npm run test"
        }
      }
    }
  }
}
