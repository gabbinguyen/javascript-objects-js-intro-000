var playlist = new Object ({
  artist: 'song titles'
});

function updatePlaylist(playlist, name, title) {
  playlist[name] = title;
  return playlist;
}
