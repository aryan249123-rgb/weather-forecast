pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:${env.PATH}"
        DOCKER_IMAGE = "your-docker-username/weather-app:latest"   // 🔁 change this
        KUBE_CONFIG = credentials('kubeconfig')                    // Jenkins credential ID
        DOCKER_CREDS = credentials('dockerhub-creds')              // Jenkins credential ID
    }

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/aryan249123-rgb/weather-forecast.git'
            }
        }

        stage('Maven Build') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'mvn clean package'
                    } else {
                        bat 'mvn clean package'
                    }
                }
            }
        }

        stage('Install Node Dependencies') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm install'
                    } else {
                        bat 'npm install'
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    if (isUnix()) {
                        sh "docker build -t ${DOCKER_IMAGE} ."
                    } else {
                        bat "docker build -t %DOCKER_IMAGE% ."
                    }
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                script {
                    if (isUnix()) {
                        sh """
                        echo ${DOCKER_CREDS_PSW} | docker login -u ${DOCKER_CREDS_USR} --password-stdin
                        docker push ${DOCKER_IMAGE}
                        """
                    } else {
                        bat """
                        docker login -u %DOCKER_CREDS_USR% -p %DOCKER_CREDS_PSW%
                        docker push %DOCKER_IMAGE%
                        """
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    if (isUnix()) {
                        sh """
                        export KUBECONFIG=${KUBE_CONFIG}
                        kubectl apply -f deployment.yaml
                        """
                    } else {
                        bat """
                        set KUBECONFIG=%KUBE_CONFIG%
                        kubectl apply -f deployment.yaml
                        """
                    }
                }
            }
        }
    }
}