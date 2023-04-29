pipeline {
  agent any 

  parameters{
    string(name:"SPEC",defaultValue:"cypress/e2e/**/**",description:"cypress/e2e/*.spec.ts")
    choice(name:"BROWSER",choices:['chrome','edge','firefox'],description:"escoja un browser donde ejecutar")
  }
  options{
    ansiColor('xterm')
  }

  stages {
    stage('Build'){
        steps{
            echo "Building application"
        }
    }
    stage('testing'){
        steps{
            bat "npx cypress cache path"
            bat "npm install"
            bat "npm cypress open --browser ${BROWSER}  ${SPEC}"
        }
    }
    stage('Deploy app'){
          steps{
            echo "Deploy app"
          }
    }
  }
   post{
     always{
         publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
     }
   }
}
