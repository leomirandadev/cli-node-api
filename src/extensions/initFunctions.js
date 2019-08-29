module.exports = (toolbox) => {
  async function createProject(system, project,) {
    return system.run(`mkdir ${project}`, { trim: true })
  }
  toolbox.createProject = createProject;

  async function installDependences(system, project,) {
    return system.run(
      `cd ${project} && yarn add express`,
    { trim: true })
  }
  toolbox.installDependences = installDependences;

  async function installDevDependences(system, project,) {
    return system.run(
      `cd ${project} && yarn add nodemon sucrase -D`,
    { trim: true })
  }
  toolbox.installDevDependences = installDevDependences;

  async function createExpressFiles(template, project) {
    template.generate({
      template: 'srcServer.js.ejs',
      target: `${project}/src/server.js`,
    })
    template.generate({
      template: 'srcApp.js.ejs',
      target: `${project}/src/app.js`,
    })
    template.generate({
      template: 'srcRoutes.js.ejs',
      target: `${project}/src/routes.js`,
    })
    template.generate({
      template: 'gitIgnore.js.ejs',
      target: `${project}/.gitignore`,
    })
  }
  toolbox.createExpressFiles = createExpressFiles;

  async function configNodemonSucrase(template, project, patching) {
    template.generate({
      template: 'nodemonConfig.json.ejs',
      target: `${project}/nodemon.json`,
    })
  
    patching.update(`${project}/package.json`, packagejs => {
      packagejs.scripts = { dev: "nodemon ./src/server.js" }
      return packagejs;
    })
  
    return ;
  }
  toolbox.configNodemonSucrase = configNodemonSucrase;
}