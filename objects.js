var playlist = {songTitle:, artistName: "Phil Ochs"};

function updatePlaylist(playlist,songTitle,artistName){
  playlist[songTitle] = :"Here's to the State of Mississippi";
  return playlist;
}
 // Remember, because one of this function's arguments
  // is `playlist`, the `playlist` _inside_ the function
  // is not the same as the top-level `playlist` outside
  // the function ^^^^^^^^^^
function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist;
  
}