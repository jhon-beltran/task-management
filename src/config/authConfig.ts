export const oidcConfig = {
  authority: 'https://your-oidc-provider.com', // Replace with your OIDC provider URL
  client_id: 'your-client-id', // Replace with your client ID
  redirect_uri: 'http://localhost:3000/callback', // Callback URL after login
  response_type: 'code',
  scope: 'openid profile email',
  post_logout_redirect_uri: 'http://localhost:3000/', // Redirect after logout
};

export default oidcConfig;
