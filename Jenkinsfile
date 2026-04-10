pipeline {
    agent any

    environment {
        DOCKER_CREDS = credentials('dockerhub_cred')
        DOCKER_IMAGE = "aryan249123/weather-forecast:latest"
    }

    stages {

        stage('Clone Repository') {
            steps {
                git credentialsId: 'aryan249123-rgb',
                    url: 'https://github.com/aryan249123-rgb/weather-forecast.git',
                    branch: 'main'
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

        stage('Login to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub_cred', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    bat """
                    echo %PASS% | docker login -u %USER% --password-stdin
                    """
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                bat "docker push %DOCKER_IMAGE%"
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