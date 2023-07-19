import { GOOGLE_APP_ID, GOOGLE_APP_SECRET } from 'config/constants';
import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { AuthService } from 'services/auth-service';

export const authOptions: AuthOptions = {
  session: {
    maxAge: 12 * 60 * 60, // 12 hours,
    strategy: 'jwt',
  },
  pages: {
    error: '/admin/login',
    signIn: '/admin/login',
  },

  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: GOOGLE_APP_ID,
      clientSecret: GOOGLE_APP_SECRET,
      idToken: true,
      profile: (profile, tokens) => {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          id_token: tokens.id_token,
          provider: 'google',
        };
      },
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    async jwt(data: any) {
      const { token, account, user } = data;
      // Persist the OAuth access_token to the token right after signin

      if (account && user) {
        const { data: loginData } = await AuthService.socialLogin(
          account.id_token
        );

        return {
          userData: loginData.user,
          accessToken: loginData.token,
        };
      }
      return token;
    },
    async session({ session, token }: any) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

export default NextAuth(authOptions);
