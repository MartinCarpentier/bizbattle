#!/usr/bin/env groovy
pipeline { 
  agent { 
    node { 
      label 'docker'
    }
  }
  tools {
    nodejs 'nodejs'
  }
 
  stages {
    stage ('Checkout Code') {
      steps {
        checkout scm
      }
    }
    stage ('Verify Tools'){
      steps {
        parallel (
          node: { sh "npm -v" },
          docker: { sh "docker -v" }
        )
      }
    }
    stage ('Build app') {
      steps {
        sh "npm prune"
        sh "npm install"
      }
    }
    stage ('Test'){
      steps {
        sh "npm test"
      }
    }
 
    stage ('Build container') {
      steps {
        sh "docker build -t ymer123/bizbattle:latest ."
        sh "docker tag ymer123/bizbattle:latest ymer123/bizbattle:v${env.BUILD_ID}"
      }
    }
    stage ('Deploy') {
      steps {
        input "Ready to deploy?"
      }
    }
    stage ('Verify') {
      steps {
        input "Everything good?"
      }
    }
    stage ('Clean') {
      steps {
        sh "npm prune"
        sh "rm -rf node_modules"
      }
    }
  }
}