pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/aryan249123-rgb/weather-forecast.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
            
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
