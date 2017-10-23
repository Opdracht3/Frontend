node {
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
             def newApp = docker.build("first-apps:001")
             newApp.push()
             newApp.push("${env.BUILD_NUMBER}")
             newApp.push("latest")
          }
          //def newApp = docker.build("tbrewster/dinf3:${env.BUILD_NUMBER}")
          // def newApp = docker.build("opdracht3/frontend:${env.BUILD_NUMBER}") tbrewster/dinf3
          //newApp.push()           
    }
}
