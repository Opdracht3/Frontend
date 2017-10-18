pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
              echo 'Building..'
              nodejs('recent node') {                
                //sh("npm install")
                //sh("npm build .")
              }
           }
        }
        stage('Create Docker Image') {
          steps { 
            // sh('docker.build("Opdracht3/Frontend:${env.BUILD_NUMBER}")')    
            //script {
            //  def newApp = docker.build "tbrewster/frontend-pipeline:${env.BUILD_NUMBER}"
            //  newApp.push()
            //}
            sh('docker build tbrewster/frontend-pipeline')
          }
        }      
        stage ('Run Application') {
          steps {
          // try {
            // Start database container here
            // sh 'docker run -d --name db -p 8091-8093:8091-8093 -p 11210:11210 arungupta/oreilly-couchbase:latest'

            // Run application using Docker image
            // sh "DB=`docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' db`"
            echo 'bla bla'
            // sh "docker run tbrewster/frontend-pipeline:${env.BUILD_NUMBER}"

            // Run tests using Maven
            //dir ('webapp') {
            //  sh 'mvn exec:java -DskipTests'
            //}
          // } catch (error) {
          // } finally {
            // Stop and remove database container here
            //sh 'docker-compose stop db'
            //sh 'docker-compose rm db'
          // }
        }
          }

    }
}
