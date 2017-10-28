node {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */
        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

        app = docker.build("opdracht3/frontend")
    }

    stage('Test image') {
        /* Ideally, we would run a test framework against our image.
         * For this example, we're using a Volkswagen-type approach ;-) */

      sh 'sudo docker rm demo || true'
      sh 'sudo docker run -t --rm --name frontend-container opdracht3/frontend &'
      sh 'sleep 5s'
      sh 'sudo docker exec -t frontend-container bash -c \'ls -l\''
      sh 'sudo docker stop frontend-container'

    }

    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
      withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials',
                     usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
        sh "sudo docker login -u=${env.USERNAME} -p=$PASSWORD"
        sh "sudo docker tag opdracht3/frontend tbrewster/frontend:${env.BUILD_NUMBER}"
        sh "sudo docker push tbrewster/frontend:${env.BUILD_NUMBER}"
      }
    }
}
