pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh("./npm install")
                sh("./npm build .")
            }
        }
    }
}
