pipeline {
    agent any

    environment {
        DOCKER_CREDS = credentials('dockerhub-creds')
        DOCKER_IMAGE = "${DOCKER_CREDS_USR}/weather-app:latest"
    }

    stages {

        // ❌ Removed duplicate checkout (Jenkins already does it)

        stage('Maven Build') {
            steps {
                bat 'mvn clean package'
            }
        }

        stage('Install Node Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "docker build -t %DOCKER_IMAGE% ."
            }
        }

        stage('Push to DockerHub') {
            steps {
                bat """
                docker login -u %DOCKER_CREDS_USR% -p %DOCKER_CREDS_PSW%
                docker push %DOCKER_IMAGE%
                """
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                withCredentials([file(credentialsId: 'kubeconfig', variable: 'KUBECONFIG')]) {
                    bat 'kubectl apply -f deployment.yaml'
                }
            }
        }
    }
}