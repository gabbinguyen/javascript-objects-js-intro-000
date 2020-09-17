var playlist = new Object ({
  artistName: 'song titles'
});

function updatePlaylist(playlist, name, title) {
  playlist[name] = title;
  return playlist;
}

function removeFromPlaylist(playlist, name) {
  playlist.delete(name);
  return playlist;
}
