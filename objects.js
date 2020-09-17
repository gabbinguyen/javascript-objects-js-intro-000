var playlist = new Object ({
  artistName: 'song titles'
});

function updatePlaylist(playlist, name, title) {
  playlist[name] = title;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
