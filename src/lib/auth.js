import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {

        async jwt({ token, user, account }) {
            console.log(token);
            
            if (account) {
                token.id_token = account.id_token;
            }
            return token;
        },
        async session({ session, token }) {
            session.id_token = token.id_token;
            return session;
        },
        
    }

}