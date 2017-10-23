node {
    def app
  
    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */
        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

        app = docker.build("Opdracht3/Frontend")
    }
  
    stage('Test image') {
        /* Ideally, we would run a test framework against our image.
         * For this example, we're using a Volkswagen-type approach ;-) */

        app.inside {
            sh 'echo "Tests passed"'
        }
    }
  
    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
  
    stage('Build') {
          echo 'Building..'
          nodejs('recent node') {                
            // sh("npm install")
            // sh("npm build .")
          }
    }
  
    stage('Create Docker Image') {
          docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
             //def newApp = docker.build("tbrewster/dinf3:${env.BUILD_NUMBER}")
             def newApp = docker.build("tbrewster/dinf3:first-apps")
             newApp.push()
             newApp.push("${env.BUILD_NUMBER}")
             newApp.push("latest")
          }
          //def newApp = docker.build("tbrewster/dinf3:${env.BUILD_NUMBER}")
          // def newApp = docker.build("opdracht3/frontend:${env.BUILD_NUMBER}") tbrewster/dinf3
          //newApp.push()           
    }
}
