# glc-task
Prerequisites
Before you can run the tests, make sure the following software is installed on your system:
Node.js
The tests require Node.js. Follow these steps to install it:
Windows or Mac:
Visit the Node.js website and download the installer for your operating system.
Run the installer and follow the prompts to install Node.js and npm.
Linux:
Use a package manager to install Node.js. For example, on Ubuntu, you can run:
sql
sudo apt update
sudo apt install nodejs npm


Verify Installation
Ensure Node.js and npm are correctly installed by running:
node -v
npm -v

This should print the version numbers of Node.js and npm, respectively.
Installation
Follow these steps to set up the project on your local machine:
Clone the Repository:
bash/terminal
git clone https://github.com/rts-tariq/glc-task.git

Navigate to the Project Directory:
bash/terminal
cd glc-task

Install Dependencies:
npm install

Cypress Installation
This project uses Cypress for end-to-end testing. The above npm install command will install Cypress and all other project dependencies.
Running Tests
To execute the Cypress tests, use the following command in the project directory:
bash/terminal
npx cypress open

This opens the Cypress Test Runner, where you can select and run individual test suites.
