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
          sh "npm i"
          sh "npm run test"
        }
      }
    }
  }
}
