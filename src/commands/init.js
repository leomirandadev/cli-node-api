module.exports = {
  name: 'init',
  description: 'Generate API project framework',
  run: async toolbox => {
    const { print : {success, error, info}, template, system, patching } = toolbox
    const nameProject = toolbox.parameters.first;

    if (nameProject) {
      await toolbox.createProject(system, nameProject);
      
      toolbox.createExpressFiles(template, nameProject);
      
      info('Installing dependences...')
      info(
        await toolbox.installDependences(system, nameProject)
      );
      
      info('Installing dev dependences...')
      info(
        await toolbox.installDevDependences(system, nameProject)
      );

      await toolbox.configNodemonSucrase(template, nameProject, patching);

      success(`Project ${nameProject} created success`)      
    } else {
      error('Parameters are missing!')
      info('Correct usage: cli-node-api init nameProject')
    }
  }
}
