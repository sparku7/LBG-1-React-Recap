pipeline {

    agent any

    stages {
        stage('Install') {
            steps {
                bat '''
                npm install
                '''
            }
        }
        stage('View') {
            steps {
                bat '''
                echo "Stage 2"
                '''
            }
        }
        stage('Run') {
            steps {
                bat 'script.bat'
            }
        }
    }
}