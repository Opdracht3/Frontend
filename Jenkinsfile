pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
              echo 'Building..'
              nodejs('recent node') {                
                sh("./npm install")
                sh("./npm build .")
              }
            }
        }
    }
}
