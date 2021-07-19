const variables = {
  backgroundStyle: 'linear-gradient( 135deg, #262a2e 4%, #262a2e 90%)',
  backgroundStyleError: 'linear-gradient( 135deg, #262a2e 19%, #461e1e 90%)',
  confirmButtonColorStyleError: '#8B0000',
};

export const SwalConfig = {
  loadingDesignToken: {
    showConfirmButton: false,
    allowOutsideClick: false,
    icon: 'info',
    background: variables.backgroundStyle,
    html: '<p style="color:#ffff">Loading valid token...</p>',
  },
  loadingDesign: {
    showConfirmButton: false,
    allowOutsideClick: false,
    icon: 'info',
    background: variables.backgroundStyle,
    html: '<p style="color:#ffff">Loading...</p>',
  },
  loadingDesignArtist: {
    showConfirmButton: false,
    allowOutsideClick: false,
    icon: 'info',
    background: variables.backgroundStyle,
    html: '<p style="color:#ffff">Loading Artist...</p>',
  },
  loadingDesignTracks: {
    showConfirmButton: false,
    allowOutsideClick: false,
    icon: 'info',
    background: variables.backgroundStyle,
    html: '<p style="color:#ffff">Loading Tracks...</p>',
  },
  notFound: {
    showConfirmButton: true,
    icon: 'info',
    background: variables.backgroundStyle,
    html: '<p style="color:#ffff">The artist does not exist</p>',
  },
  errorConexion: {
    background: variables.backgroundStyleError,
    title: 'Connection error',
    icon: 'error',
    confirmButtonColor: variables.confirmButtonColorStyleError,
    showConfirmButton: true,
    allowOutsideClick: false,
    confirmButtonText: 'Try again',
  },
};
