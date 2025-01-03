// import GitHub from '@auth/core/providers/github'
import { defineConfig } from 'auth-astro'
import Google from '@auth/core/providers/google'
import GitHub from '@auth/core/providers/github'
import Twitch from '@auth/core/providers/twitch'

export default defineConfig({
	providers: [
		Google({
            clientId: import.meta.env.GOOGLE_CLIENT_ID,
            clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
        }),
        GitHub({
            clientId: import.meta.env.GITHUB_CLIENT_ID,
            clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
        }),
        Twitch({
            clientId: import.meta.env.TWITCH_CLIENT_ID,
            clientSecret: import.meta.env.TWITCH_CLIENT_SECRET,
        }),
	],
})