pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    if (isUnix()) {
                        sh '/opt/homebrew/bin/npm install'
                    } else {
                        bat 'npm install'
                    }
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'echo Build running'
                    } else {
                        bat 'echo Build running'
                    }
                }
            }
        }
    }
}
