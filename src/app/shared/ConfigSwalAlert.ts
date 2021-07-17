const variables = {
  backgroundStyle: 'linear-gradient( 135deg, #262a2e 4%, #262a2e 90%)',
  backgroundStyleError: 'linear-gradient( 135deg, #262a2e 19%, #461e1e 90%)',
  confirmButtonColorStyleError: '#8B0000',
};

export const SwalConfig = {
  loadingDesign: {
    showConfirmButton: false,
    allowOutsideClick: false,
    icon: 'info',
    background: variables.backgroundStyle,
    html: '<p style="color:#ffff">Loading valid token...</p>',
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
