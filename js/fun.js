var userFeed = new Instafeed({
    get: 'user',
    userId: '5699429712',
    accessToken: '5699429712.ac64ffa.50fd50ab26cb419c9735543fede52863',
    target: 'userfeed',
    resolution: 'standard_resolution',
    after: function() {}
});

window.onload = function() {
  userFeed.run();
};
