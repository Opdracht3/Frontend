pipeline {
  agent any

  stages {
    stage('install') {
      steps {
        echo 'install..'
        sh("npm install")
      }
    }

    stage('build') {
      steps {
        echo 'Building..'
        sh("npm run build")
      }
    }

    stage('Test') {
      steps {
        sh("npm run test")
      }
    }


    stage('Build Docker') {
      steps {
        echo 'Buildin docker.'
        withCredentials([usernamePassword(credentialsId: 'docker-repo', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
          sh("sudo docker login -u=$USERNAME -p=$PASSWORD")
        }
        sh("sudo docker build . --tag husamay/rps-frontend:0.1.${BUILD_NUMBER}")
      }
    }


    stage('Test image') {
      steps {
        /* Ideally, we would run a test framework against our image.
         * For this example, we're using a Volkswagen-type approach ;-) */

        sh 'sudo docker rm frontend-container || true'
        sh 'sudo docker run -t --rm --name frontend-container husamay/rps-frontend:0.1.${BUILD_NUMBER} &'
        sh 'sleep 5s'
        sh 'sudo docker exec -t frontend-container bash -c \'ls -l\''
        sh 'sudo docker stop frontend-container'
      }
    }


    stage('Deploy Docker') {
      steps {
        echo 'Deploying 0.1.${BUILD_NUMBER} to repo....'
        sh("sudo docker push husamay/rps-frontend:0.1 .${BUILD_NUMBER}")
        echo 'Deploying latest tag to repo....'
        sh("sudo docker push husamay/rps-frontend:latest")
      }
    }
  }
}
