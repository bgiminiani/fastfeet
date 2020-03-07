module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'fastfeet_pg',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
