import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'blog.jobless.engineer',
  title: 'Blogs by ashish',
  subtitle: '',
  lang: 'en-US',
  description: 'Made with SvelteKit ',
  author: {
    avatar: '/assets/maskable@512.png',
    name: 'Ashish Raj',
    status: '🌸',
    bio: 'Hey, it\'s me!'
  },
  themeColor: '#3D4451'
}
