export type User = {
  id: number,
  username: string,
  email: string,
  password: string,
}

export type Token = {
  access_token: string,
  token_type: string,
  expires_in: number,
}

export const AUTH_TOKEN_NAME = 'my_app_auth_token'
