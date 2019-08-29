module.exports = {
  name: 'init',
  description: 'Generate API project framework',
  run: async toolbox => {
    const { print : {success, error, info}, template, system, patching } = toolbox
    const nameProject = toolbox.parameters.first;

    if (nameProject) {
      
      await createProject(system, nameProject);
      createExpressFiles(template, nameProject);
      
      info('Installing dependences...')
      const resultInstallDependences = await installDependences(system, nameProject);
      info(resultInstallDependences);
      
      info('Installing dev dependences...')
      const resultInstallDevDependences = await installDevDependences(system, nameProject);
      info(resultInstallDevDependences);
      
      await configNodemonSucrase(template, nameProject, patching);

      success(`Project ${nameProject} created success`)      

    } else {

      error('Parameters are missing!')
      info('Correct usage: cli-node-api init nameProject')

    }
    
  }
}

async function createProject(system, project,) {
  return system.run(`mkdir ${project}`, { trim: true })
}

async function installDependences(system, project,) {
  return system.run(
    `cd ${project} && yarn add express`,
  { trim: true })
}

async function installDevDependences(system, project,) {
  return system.run(
    `cd ${project} && yarn add nodemon sucrase -D`,
  { trim: true })
}

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

async function configNodemonSucrase(template, project, patching) {
  template.generate({
    template: 'nodemonConfig.json.ejs',
    target: `${project}/nodemon.json`,
  })

  patching.update(`${project}/package.json`, packagejs => {
    packagejs.scripts = { dev: "nodemon ./src/server.js" }
    console.log(packagejs)
    return packagejs;
  })

  return ;
}