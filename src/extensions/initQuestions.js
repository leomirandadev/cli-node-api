module.exports = (toolbox) => {
  async function askDBInformation() {
    const { dialect, host, database, username, password } = await toolbox.prompt.ask([
      { type: 'input', name: 'dialect', message: 'What your relational database management system? (mysql, postgres, etc)' },
      { type: 'input', name: 'host', message: 'What your database host?' },
      { type: 'input', name: 'database', message: "What's the database's name?" },
      { type: 'input', name: 'username', message: "What's the database's username?" },
      { type: 'password', name: 'password', message: "What's the database's password?" },
    ])
    return {
      dialect,
      host,
      database,
      username,
      password,
    }
  }
  toolbox.askDBInformation = askDBInformation;

}