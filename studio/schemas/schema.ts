import { defineType } from 'sanity';

type SanityRule = any;

type SanitySelection = any;

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'title', title: 'Site Title', type: 'string', validation: (Rule: SanityRule) => Rule.required() },
    { name: 'description', title: 'Site Description', type: 'text', validation: (Rule: SanityRule) => Rule.required() },
    { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
    { name: 'favicon', title: 'Favicon', type: 'image', options: { hotspot: true } },
  ],
  preview: { select: { title: 'title' } },
});

export const seoSettings = defineType({
  name: 'seoSettings',
  title: 'SEO Settings',
  type: 'document',
  fields: [
    { name: 'title', title: 'SEO Title', type: 'string', validation: (Rule: SanityRule) => Rule.required() },
    { name: 'description', title: 'SEO Description', type: 'text', validation: (Rule: SanityRule) => Rule.required() },
    { name: 'ogImage', title: 'OpenGraph Image', type: 'image', options: { hotspot: true } },
    { name: 'twitterCard', title: 'Twitter Card Type', type: 'string', options: { list: ['summary', 'summary_large_image'] }, initialValue: 'summary_large_image' },
  ],
  preview: { select: { title: 'title' } },
});

export const navbar = defineType({
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    { name: 'links', title: 'Links', type: 'array', of: [{ type: 'object', fields: [
      { name: 'label', title: 'Label', type: 'string' },
      { name: 'href', title: 'Href', type: 'string' }
    ] }] },
  ],
});

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    { name: 'badgeText', title: 'Badge Text', type: 'string' },
    { name: 'headline', title: 'Headline', type: 'string', validation: (Rule: SanityRule) => Rule.required() },
    { name: 'subheadline', title: 'Subheadline', type: 'text' },
    { name: 'primaryCta', title: 'Primary CTA', type: 'object', fields: [
      { name: 'label', title: 'Label', type: 'string' },
      { name: 'href', title: 'Href', type: 'url' }
    ] },
    { name: 'secondaryCta', title: 'Secondary CTA', type: 'object', fields: [
      { name: 'label', title: 'Label', type: 'string' },
      { name: 'href', title: 'Href', type: 'url' }
    ] },
  ],
});

export const countdownSettings = defineType({
  name: 'countdownSettings',
  title: 'Countdown Settings',
  type: 'document',
  fields: [
    { name: 'eventDate', title: 'Event Date', type: 'date', validation: (Rule: SanityRule) => Rule.required() },
    { name: 'eventTime', title: 'Event Time', type: 'string', validation: (Rule: SanityRule) => Rule.required() },
    { name: 'timezone', title: 'Timezone', type: 'string', initialValue: 'Asia/Jakarta' },
    { name: 'messageStarted', title: 'Started Message', type: 'string', initialValue: 'THE FESTIVAL HAS STARTED' },
  ],
});

export const aboutEvent = defineType({
  name: 'aboutEvent',
  title: 'About Event',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'intro', title: 'Intro', type: 'text' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } },
  ],
});

export const eventDescription = defineType({
  name: 'eventDescription',
  title: 'Event Description',
  type: 'document',
  fields: [
    { name: 'headline', title: 'Headline', type: 'string' },
    { name: 'story', title: 'Story', type: 'text' },
    { name: 'quote', title: 'Quote', type: 'string' },
    { name: 'imageCaption', title: 'Image Caption', type: 'string' },
  ],
});

export const eventHighlights = defineType({
  name: 'eventHighlights',
  title: 'Event Highlights',
  type: 'document',
  fields: [
    { name: 'guestStars', title: 'Guest Stars', type: 'number', validation: (Rule: SanityRule) => Rule.min(0) },
    { name: 'sponsorPartners', title: 'Sponsor Partners', type: 'number', validation: (Rule: SanityRule) => Rule.min(0) },
    { name: 'mediaReach', title: 'Media Reach', type: 'string' },
  ],
});

export const ticketSettings = defineType({
  name: 'ticketSettings',
  title: 'Ticket Settings',
  type: 'document',
  fields: [
    { name: 'onlineTitle', title: 'Online Ticket Title', type: 'string' },
    { name: 'onlineDescription', title: 'Online Ticket Description', type: 'text' },
    { name: 'onlineLink', title: 'Online Ticket Link', type: 'url', validation: (Rule: SanityRule) => Rule.required() },
    { name: 'offlineIntro', title: 'Offline Section Intro', type: 'string' },
  ],
});

export const offlineTicketSellers = defineType({
  name: 'offlineTicketSellers',
  title: 'Offline Ticket Sellers',
  type: 'document',
  fields: [
    { name: 'sellerName', title: 'Seller Name', type: 'string', validation: (Rule: SanityRule) => Rule.required() },
    { name: 'city', title: 'City', type: 'string' },
    { name: 'whatsapp', title: 'WhatsApp Number', type: 'string', validation: (Rule: SanityRule) => Rule.required() },
    { name: 'image', title: 'Seller Image', type: 'image', options: { hotspot: true } },
    { name: 'active', title: 'Active Seller', type: 'boolean', initialValue: true },
    { name: 'order', title: 'Order', type: 'number', initialValue: 0 },
  ],
  preview: {
    select: { title: 'sellerName', subtitle: 'city', media: 'image', active: 'active' },
    prepare(selection: SanitySelection) {
      return { title: selection.title, subtitle: `${selection.subtitle} • ${selection.active ? 'Active' : 'Inactive'}`, media: selection.media };
    },
  },
});

export const guestStars = defineType({
  name: 'guestStars',
  title: 'Guest Stars',
  type: 'document',
  fields: [
    { name: 'artistName', title: 'Artist Name', type: 'string', validation: (Rule: SanityRule) => Rule.required() },
    { name: 'genre', title: 'Genre', type: 'string' },
    { name: 'instagram', title: 'Instagram', type: 'url' },
    { name: 'performanceDate', title: 'Performance Date', type: 'string' },
    { name: 'image', title: 'Artist Image', type: 'image', options: { hotspot: true } },
    { name: 'order', title: 'Order', type: 'number', initialValue: 0 },
  ],
  preview: { select: { title: 'artistName', subtitle: 'genre', media: 'image' } },
});

export const sponsors = defineType({
  name: 'sponsors',
  title: 'Sponsors',
  type: 'document',
  fields: [
    { name: 'sponsorName', title: 'Sponsor Name', type: 'string', validation: (Rule: SanityRule) => Rule.required() },
    { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
    { name: 'website', title: 'Website', type: 'url' },
    { name: 'order', title: 'Order', type: 'number', initialValue: 0 },
  ],
  preview: { select: { title: 'sponsorName', media: 'logo' } },
});

export const partners = defineType({
  name: 'partners',
  title: 'Partners',
  type: 'document',
  fields: [
    { name: 'sponsorName', title: 'Partner Name', type: 'string', validation: (Rule: SanityRule) => Rule.required() },
    { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
    { name: 'website', title: 'Website', type: 'url' },
    { name: 'order', title: 'Order', type: 'number', initialValue: 0 },
  ],
  preview: { select: { title: 'sponsorName', media: 'logo' } },
});

export const gallery = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    { name: 'images', title: 'Images', type: 'array', of: [{ type: 'image', options: { hotspot: true } }], validation: (Rule: SanityRule) => Rule.max(12) },
  ],
});

export const faq = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    { name: 'question', title: 'Question', type: 'string', validation: (Rule: SanityRule) => Rule.required() },
    { name: 'answer', title: 'Answer', type: 'text', validation: (Rule: SanityRule) => Rule.required() },
    { name: 'order', title: 'Order', type: 'number', initialValue: 0 },
  ],
  preview: { select: { title: 'question', subtitle: 'answer' } },
});

export const socialLinks = defineType({
  name: 'socialLinks',
  title: 'Social Links',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'type', title: 'Platform', type: 'string', options: { list: ['Instagram', 'TikTok', 'WhatsApp', 'Maps'] } },
    { name: 'url', title: 'URL', type: 'url', validation: (Rule: SanityRule) => Rule.required() },
    { name: 'order', title: 'Order', type: 'number', initialValue: 0 },
  ],
  preview: { select: { title: 'title', subtitle: 'type' } },
});

export const contactInfo = defineType({
  name: 'contactInfo',
  title: 'Contact Info',
  type: 'document',
  fields: [
    { name: 'whatsapp', title: 'WhatsApp', type: 'string', validation: (Rule: SanityRule) => Rule.required() },
    { name: 'email', title: 'Email', type: 'string', validation: (Rule: SanityRule) => Rule.email().required() },
    { name: 'address', title: 'Address', type: 'text' },
    { name: 'instagram', title: 'Instagram URL', type: 'url' },
    { name: 'tiktok', title: 'TikTok URL', type: 'url' },
  ],
  preview: { select: { title: 'email', subtitle: 'address' } },
});

export const footerSettings = defineType({
  name: 'footerSettings',
  title: 'Footer Settings',
  type: 'document',
  fields: [
    { name: 'tagline', title: 'Footer Tagline', type: 'string' },
    { name: 'copyright', title: 'Copyright Text', type: 'string' },
    { name: 'social', title: 'Footer Social Links', type: 'array', of: [{ type: 'object', fields: [
      { name: 'type', title: 'Type', type: 'string', options: { list: ['Instagram', 'WhatsApp', 'TikTok'] } },
      { name: 'url', title: 'URL', type: 'url' }
    ] }] },
  ],
});

export const sectionSettings = defineType({
  name: 'sectionSettings',
  title: 'Section Settings',
  type: 'document',
  fields: [
    { name: 'sections', title: 'Sections', type: 'array', of: [{ type: 'object', fields: [
      { name: 'sectionId', title: 'Section ID', type: 'string', options: { list: [
        { title: 'hero', value: 'hero' },
        { title: 'about', value: 'about' },
        { title: 'description', value: 'description' },
        { title: 'highlights', value: 'highlights' },
        { title: 'tickets', value: 'tickets' },
        { title: 'guestStars', value: 'guestStars' },
        { title: 'gallery', value: 'gallery' },
        { title: 'sponsors', value: 'sponsors' },
        { title: 'social', value: 'social' },
        { title: 'faq', value: 'faq' },
        { title: 'contact', value: 'contact' },
        { title: 'footer', value: 'footer' }
      ] } },
      { name: 'enabled', title: 'Enabled', type: 'boolean', initialValue: true }
    ] }] },
  ],
  preview: { select: { title: 'sections' }, prepare(selection: SanitySelection) { return { title: 'Section Settings', subtitle: 'Manage visibility and order' }; } },
});
