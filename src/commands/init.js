module.exports = {
  name: 'init',
  description: 'Generate API project framework',
  run: async toolbox => {
    const { 
      print : {success, error, info},
      template,
      system,
      patching,
      askDBInformation,
      createConfigDb,
      setSequelizeDependence
    } = toolbox;
    const nameProject = toolbox.parameters.first;
    const { options } = toolbox.parameters;
    
    if (nameProject) {  
      let dbInformation  = (options.db) ? await askDBInformation() : null;
      
      await toolbox.createProject(system, nameProject);
      toolbox.createExpressFiles(template, nameProject);

      info('Installing dependences...')
      info( await toolbox.installDependences(system, nameProject) );
      
      info('Installing dev dependences...')
      info( await toolbox.installDevDependences(system, nameProject) );

      await toolbox.configNodemonSucrase(template, nameProject, patching);

      if (dbInformation != null) {
        info('Installing sequelize...');
        info( await setSequelizeDependence(system, nameProject) );

        info('Creating database configuration...');
        await createConfigDb(template, nameProject, dbInformation);
      }

      success(`Project ${nameProject} created success`)
      
    } else {
      error('Parameters are missing!')
      info('Correct usage: cli-node-api init nameProject')
    }
  }
}
