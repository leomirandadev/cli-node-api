const crypto = require('crypto');

module.exports = (toolbox) => {
  
  async function setSequelizeDependence(system, project,template) {
    template.generate({
      template: 'sequelizerc.ejs',
      target: `${project}/.sequelizerc`,
    })
    return system.run(
      `cd ${project} && yarn add sequelize && yarn add sequelize-cli -D`,
    { trim: true })
  }
  toolbox.setSequelizeDependence = setSequelizeDependence;

  async function createConfigDb(template, project, dbInformation) {
    const { dialect, host, username, password, database} = dbInformation;
    template.generate({
      template: 'srcConfigDatabase.js.ejs',
      target: `${project}/src/config/database.js`,
      props: { dialect, host, username, password, database }
    })
    template.generate({
      template: 'srcConfigAuth.js.ejs',
      target: `${project}/src/config/auth.js`,
      props: { token: crypto.randomBytes(32).toString('hex') }
    })
  }
  toolbox.createConfigDb = createConfigDb;

}