pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:${env.PATH}"
        DOCKER_CREDS = credentials('dockerhub-creds')
        DOCKER_IMAGE = "${DOCKER_CREDS_USR}/weather-app:latest"
    }

    stages {

        stage('Checkout') {
    steps {
        git branch: 'main', url: 'https://github.com/aryan249123-rgb/weather-forecast.git'
    }
}

        stage('Maven Build') {
            steps {
                sh 'mvn clean package'
            }
        }

        stage('Install Node Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }

        stage('Push to DockerHub') {
            steps {
                sh """
                echo ${DOCKER_CREDS_PSW} | docker login -u ${DOCKER_CREDS_USR} --password-stdin
                docker push ${DOCKER_IMAGE}
                """
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                withCredentials([file(credentialsId: 'kubeconfig', variable: 'KUBECONFIG')]) {
                    sh """
                    kubectl apply -f deployment.yaml
                    """
                }
            }
        }
    }
}