export const siteQuery = `*[_type == "siteSettings"][0]`;

export const homepageQuery = `{
  "siteSettings": *[_type == "siteSettings"][0],
  "heroSection": *[_type == "heroSection"][0],
  "countdownSettings": *[_type == "countdownSettings"][0],
  "aboutEvent": *[_type == "aboutEvent"][0],
  "eventDescription": *[_type == "eventDescription"][0],
  "eventHighlights": *[_type == "eventHighlights"][0],
  "ticketSettings": *[_type == "ticketSettings"][0],

  "offlineTicketSellers": *[_type == "offlineTicketSellers"] | order(order asc),

  "guestStars": *[_type == "guestStars"] | order(order asc),

  "sponsors": *[_type == "sponsors"] | order(order asc),

  "partners": *[_type == "partners"] | order(order asc),

  "gallery": *[_type == "gallery"][0].images,

  "faq": *[_type == "faq"] | order(order asc),

  "socialLinks": *[_type == "socialLinks"] | order(order asc),

  "contactInfo": *[_type == "contactInfo"][0],
  "footerSettings": *[_type == "footerSettings"][0],
  "sectionSettings": *[_type == "sectionSettings"][0],
  "navbarSettings": *[_type == "navbarSettings"][0]
}`;
